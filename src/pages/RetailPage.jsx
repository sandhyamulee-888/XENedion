import React from 'react';
import { Link } from 'react-router-dom';
import {
  Store,
  WifiOff,
  PackageCheck,
  CreditCard,
  Award,
  ArrowRight,
  ShieldCheck,
  RotateCcw,
} from 'lucide-react';

const retailHighlights = [
  {
    title: "Offline-Ready Checkout Counters",
    desc: "Long queues won't wait for your internet service provider. XENedion POS continues ringing up items, taking cash or UPI, and syncing the moment connectivity returns.",
    icon: WifiOff,
  },
  {
    title: "Real-Time Stock Across Outlets",
    desc: "Check product availability at your neighboring branch or central warehouse right from the billing screen when a customer asks for a different size or color.",
    icon: PackageCheck,
  },
  {
    title: "Safe Returns & Verified Refunds",
    desc: "Every return is verified against the original invoice number, preventing fraudulent refunds across all store branches.",
    icon: RotateCcw,
  },
  {
    title: "Cashier Shift Auditing",
    desc: "Open and close the till with required cash counts at each session end. Manager approval is mandatory for voids, overrides and discounts.",
    icon: ShieldCheck,
  },
  {
    title: "Customer Loyalty & Rewards",
    desc: "Recognize repeat customers instantly with unified mobile number lookups. Accrue and redeem points across any store outlet.",
    icon: Award,
  },
  {
    title: "Multi-Tender Payments",
    desc: "Split bills effortlessly across UPI QR codes, credit/debit cards, and cash with clean register balances.",
    icon: CreditCard,
  },
];

export default function RetailPage() {
  return (
    <div style={{ backgroundColor: '#FFFFFF' }}>
      {/* Hero */}
      <section style={{ backgroundColor: 'var(--steel-50)', borderBottom: '1px solid var(--border-light)', padding: '64px 0 54px' }}>
        <div className="container">
          <div style={{ maxWidth: '840px' }}>
            <div className="badge-gold" style={{ marginBottom: '16px' }}>
              <Store size={15} color="var(--gold-600)" />
              <span style={{ fontWeight: 700, textTransform: 'uppercase', color: 'var(--gold-700)' }}>
                Industry Solution &bull; Multi-Store Retail
              </span>
            </div>

            <h1 style={{ fontSize: '42px', fontWeight: 800, color: 'var(--steel-900)', letterSpacing: '-0.02em', lineHeight: 1.15, marginBottom: '16px' }}>
              Designed for retail chains with 1 to 50 branch locations.
            </h1>

            <p style={{ fontSize: '18px', color: 'var(--steel-600)', lineHeight: '1.6', marginBottom: '28px' }}>
              Keep store queues moving with an offline-capable POS, unified customer loyalty, and automatic stock synchronization that prevents out-of-stock surprises.
            </p>

            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', flexWrap: 'wrap' }}>
              <Link to="/contact/request-a-demo" className="btn btn-primary">
                <span>Request a Retail Demo</span>
                <ArrowRight size={16} />
              </Link>
              <Link to="/contact/talk-to-sales" className="btn btn-secondary">
                <span>Talk to Sales</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Grid */}
      <section className="section section-light">
        <div className="container">
          <div className="section-header">
            <span style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', fontWeight: 700, textTransform: 'uppercase', color: 'var(--gold-700)' }}>
              Retail Performance
            </span>
            <h2 className="section-title">Everything your store operations require</h2>
            <p className="section-subtitle">
              Engineered specifically for supermarkets, apparel boutiques, electronics outlets, and multi-branch retail brands.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-8">
            {retailHighlights.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="card-white" style={{ padding: '32px' }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: '14px', background: 'var(--gold-100)', border: '1px solid var(--gold-200)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--gold-700)', marginBottom: '20px' }}>
                    <Icon size={24} />
                  </div>
                  <h3 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--steel-900)', marginBottom: '10px' }}>
                    {item.title}
                  </h3>
                  <p style={{ fontSize: '14px', color: 'var(--steel-600)', lineHeight: '1.6' }}>
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="section section-slate" style={{ textAlign: 'center' }}>
        <div className="container container-narrow">
          <div className="card-white" style={{ padding: '48px 36px', borderColor: 'var(--border-gold)', background: 'linear-gradient(135deg, #FFFDF5 0%, #FFFFFF 100%)' }}>
            <h2 style={{ fontSize: '28px', fontWeight: 800, color: 'var(--steel-900)', marginBottom: '12px' }}>
              Ready to unify your store counters?
            </h2>
            <p style={{ fontSize: '15px', color: 'var(--steel-600)', lineHeight: '1.6', maxWidth: '580px', margin: '0 auto 28px' }}>
              Schedule a demonstration customized for your retail catalogue, barcode scanners, and counter layout.
            </p>
            <Link to="/contact/request-a-demo" className="btn btn-primary">
              <span>Book a Retail Walkthrough</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

