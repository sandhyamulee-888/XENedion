import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/layout/ScrollToTop';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

// Pages
import Home from './pages/Home';
import PosPage from './pages/PosPage';
import SalesPage from './pages/SalesPage';
import InventoryPage from './pages/InventoryPage';
import PurchasingPage from './pages/PurchasingPage';
import TaxGstPage from './pages/TaxGstPage';
import PlatformPage from './pages/PlatformPage';
import RetailPage from './pages/RetailPage';
import DistributionPage from './pages/DistributionPage';
import PricingPage from './pages/PricingPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import RequestDemoPage from './pages/RequestDemoPage';
import TalkSalesPage from './pages/TalkSalesPage';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <div className="site-wrapper" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <ScrollToTop />
      <Header />
      <main className="site-main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/modules/point-of-sale" element={<PosPage />} />
          <Route path="/modules/sales" element={<SalesPage />} />
          <Route path="/modules/inventory" element={<InventoryPage />} />
          <Route path="/modules/purchasing" element={<PurchasingPage />} />
          <Route path="/modules/tax-gst" element={<TaxGstPage />} />
          <Route path="/platform" element={<PlatformPage />} />
          <Route path="/solutions/retail" element={<RetailPage />} />
          <Route path="/solutions/distribution" element={<DistributionPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/contact/request-a-demo" element={<RequestDemoPage />} />
          <Route path="/contact/talk-to-sales" element={<TalkSalesPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

