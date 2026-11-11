import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Layers, Zap, Wifi, Network } from 'lucide-react';
import heroBgImage from '../../assets/xenedion-hero-bg.jpg';
import ProductMockup from './ProductMockup';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero-section">
      {/* 1. Dedicated background image layer with subtle saturation & brightness adjustments */}
      <div
        className="hero-bg-layer"
        style={{
          backgroundImage: `url(${heroBgImage})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'right center',
          backgroundSize: 'cover',
        }}
      />

      {/* 2. Soft white gradient overlay (0-25%: 95%, 25-40%: 80%, 40-55%: 55%, 55-70%: 25%, 85%: 0%) */}
      <div className="hero-gradient-overlay" />

      {/* 3. Hero content layer */}
      <div className="container">
        <div className="hero-grid">
          {/* Left Column: Clean Enterprise Text & CTAs */}
          <div className="hero-copy-col">
            {/* Eyebrow Pill */}
            <div className="hero-pill">
              <span className="hero-pill-dot animate-pulse-dot" />
              <span className="hero-pill-badge">XENEDION CLOUD ERP</span>
              <span className="hero-pill-sep">&bull;</span>
              <span className="hero-pill-tagline">BUSINESS CONNECTED</span>
            </div>

            {/* Main Headline */}
            <h1 className="hero-headline">
              <span className="text-navy-solid">Run </span>
              <span className="text-gradient-orange">every branch </span>
              <span className="text-navy-solid">from one place.</span>
            </h1>

            {/* Supporting Paragraph */}
            <p className="hero-subhead">
              XENedion brings your counter sales, quotations, stock, purchases and tax into one cloud ERP, so every branch works from the same numbers.
            </p>

            {/* CTAs */}
            <div className="hero-actions">
              <Link to="/contact/request-a-demo" className="btn btn-primary hero-btn-main">
                <span>REQUEST A DEMO</span>
                <ArrowRight size={16} />
              </Link>

              <a href="#modules" className="btn btn-secondary hero-btn-sub">
                <Layers size={16} color="var(--orange-600)" />
                <span>SEE THE MODULES</span>
              </a>
            </div>

            {/* Trust Indicators Strip */}
            <div className="hero-trust-row">
              <div className="hero-trust-item">
                <div className="trust-icon-wrap">
                  <Zap size={14} color="var(--orange-600)" />
                </div>
                <span>Zero Installation</span>
              </div>
              <div className="hero-trust-item">
                <div className="trust-icon-wrap">
                  <Wifi size={14} color="var(--orange-600)" />
                </div>
                <span>Offline-Ready POS</span>
              </div>
              <div className="hero-trust-item">
                <div className="trust-icon-wrap">
                  <Network size={14} color="var(--orange-600)" />
                </div>
                <span>Multi-Branch Real-Time</span>
              </div>
            </div>
          </div>

          {/* Right Column: Open Showcase for Background Ecosystem */}
          <div className="hero-visual-col">
            <ProductMockup />
          </div>
        </div>
      </div>
    </section>
  );
}
