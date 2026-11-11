import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Globe } from 'lucide-react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link to="/">
              <img
                src="/assets/xenedion-logo.png"
                alt="XENedion - Business, Connected."
                className="footer-logo-img"
              />
            </Link>
            <p style={{ fontSize: '14px', lineHeight: '1.6', color: 'var(--steel-600)', maxWidth: '340px' }}>
              Cloud ERP built for growing multi-branch businesses (1 to 50 branches). Point of Sale, Sales, Inventory, Purchasing, and Tax &amp; GST — all connected in real time.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: 'var(--steel-600)' }}>
              <Globe size={16} color="var(--gold-600)" />
              <span>Available in English, Hindi, and Telugu</span>
            </div>
          </div>

          <div>
            <div className="footer-heading">Modules</div>
            <ul className="footer-links">
              <li><Link to="/modules/point-of-sale" className="footer-link">Point of Sale</Link></li>
              <li><Link to="/modules/sales" className="footer-link">Sales</Link></li>
              <li><Link to="/modules/inventory" className="footer-link">Inventory</Link></li>
              <li><Link to="/modules/purchasing" className="footer-link">Purchasing</Link></li>
              <li><Link to="/modules/tax-gst" className="footer-link">Tax &amp; GST</Link></li>
              <li><Link to="/platform" className="footer-link">Platform &amp; Architecture</Link></li>
            </ul>
          </div>

          <div>
            <div className="footer-heading">Solutions &amp; Company</div>
            <ul className="footer-links">
              <li><Link to="/solutions/retail" className="footer-link">Retail Chains</Link></li>
              <li><Link to="/solutions/distribution" className="footer-link">Wholesale &amp; Distribution</Link></li>
              <li><Link to="/pricing" className="footer-link">Pricing Plans</Link></li>
              <li><Link to="/about" className="footer-link">About XENedion</Link></li>
              <li><Link to="/contact" className="footer-link">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <div className="footer-heading">Get in Touch</div>
            <ul className="footer-links">
              <li style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px' }}>
                <Mail size={15} color="var(--gold-600)" />
                <a href="mailto:contact@xenedion.com" className="footer-link">contact@xenedion.com</a>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px' }}>
                <Phone size={15} color="var(--gold-600)" />
                <span style={{ color: 'var(--steel-700)' }}>+91 (Talk to sales)</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '13px' }}>
                <MapPin size={15} color="var(--gold-600)" style={{ flexShrink: 0, marginTop: '3px' }} />
                <span>Bangalore, India</span>
              </li>
              <li style={{ marginTop: '12px' }}>
                <Link to="/contact/request-a-demo" className="btn btn-primary" style={{ padding: '8px 16px', fontSize: '13px', width: '100%', justifyContent: 'center' }}>
                  Request a Demo
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div>
            &copy; {new Date().getFullYear()} XENedion&trade;. All rights reserved. &ldquo;Business, Connected.&rdquo; is a trademark of XENedion.
          </div>
          <div style={{ display: 'flex', gap: '16px' }}>
            <Link to="/contact" className="footer-link" style={{ fontSize: '12px' }}>Privacy Policy</Link>
            <Link to="/contact" className="footer-link" style={{ fontSize: '12px' }}>Terms of Service</Link>
            <Link to="/contact/talk-to-sales" className="footer-link" style={{ fontSize: '12px' }}>Talk to Sales</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

