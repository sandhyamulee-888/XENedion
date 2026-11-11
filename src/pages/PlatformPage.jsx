import React from 'react';
import { Link } from 'react-router-dom';
import {
  Building2,
  ShieldCheck,
  Database,
  Lock,
  History,
  Languages,
  FileCheck,
  ArrowRight,
  MessageSquare,
} from 'lucide-react';

const platformFeatures = [
  {
    title: "Multi-branch by design",
    description: "Add branches, assign users to them, and keep stock, sales and terminals per branch.",
    icon: Building2,
  },
  {
    title: "Roles and permissions",
    description: "Decide who can sell, adjust stock, post bills or change tax settings.",
    icon: ShieldCheck,
  },
  {
    title: "Your data, isolated",
    description: "Each company's records are kept separate at the database level, not just in the app.",
    icon: Database,
  },
  {
    title: "Support only with your consent",
    description:
      "Our support team can see your account only after your admin grants time-limited access, and every visit is logged.",
    icon: Lock,
  },
  {
    title: "Audit trail",
    description: "Key changes record who did what, and when.",
    icon: History,
  },
  {
    title: "Your words, your language",
    description:
      "Rename labels to match how your business talks, and use the app in English, Hindi or Telugu.",
    icon: Languages,
  },
  {
    title: "Documents stored safely",
    description:
      "Invoices and quotations are generated as PDFs and kept in secure cloud storage.",
    icon: FileCheck,
  },
];

export default function PlatformPage() {
  return (
    <div style={{ backgroundColor: '#FFFFFF' }}>
      {/* Hero */}
      <section style={{ backgroundColor: 'var(--steel-50)', borderBottom: '1px solid var(--border-light)', padding: '64px 0 54px' }}>
        <div className="container">
          <div style={{ maxWidth: '840px' }}>
            <div className="badge-gold" style={{ marginBottom: '16px' }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--gold-500)' }} className="animate-pulse-dot" />
              <span style={{ fontWeight: 700, textTransform: 'uppercase', color: 'var(--gold-700)' }}>
                Platform Architecture &amp; Security
              </span>
            </div>

            <h1 style={{ fontSize: '42px', fontWeight: 800, color: 'var(--steel-900)', letterSpacing: '-0.02em', lineHeight: 1.15, marginBottom: '16px' }}>
              Built for businesses with more than one counter.
            </h1>

            <p style={{ fontSize: '18px', color: 'var(--steel-600)', lineHeight: '1.6', marginBottom: '28px' }}>
              XENedion is a cloud ERP where every company, branch and user has a clear place. Your team sees what their role allows, and your data never mixes with anyone else's.
            </p>

            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', flexWrap: 'wrap' }}>
              <Link to="/contact/request-a-demo" className="btn btn-primary">
                <span>Request a Demo</span>
                <ArrowRight size={16} />
              </Link>
              <Link to="/contact/talk-to-sales" className="btn btn-secondary">
                <span>Talk to Sales</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Blocks */}
      <section className="section section-light">
        <div className="container">
          <div className="section-header">
            <span style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', fontWeight: 700, textTransform: 'uppercase', color: 'var(--gold-700)' }}>
              Security &amp; Administration
            </span>
            <h2 className="section-title">
              Enterprise control without enterprise complexity.
            </h2>
            <p className="section-subtitle">
              Keep every counter, warehouse and accountant restricted to their authorized scope.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-8">
            {platformFeatures.map((feat) => {
              const Icon = feat.icon;
              return (
                <div key={feat.title} className="card-white" style={{ padding: '32px' }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: '14px', background: 'var(--gold-100)', border: '1px solid var(--gold-200)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--gold-700)', marginBottom: '20px' }}>
                    <Icon size={24} />
                  </div>
                  <h3 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--steel-900)', marginBottom: '10px' }}>
                    {feat.title}
                  </h3>
                  <p style={{ fontSize: '14px', color: 'var(--steel-600)', lineHeight: '1.6' }}>
                    {feat.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="section section-slate" style={{ textAlign: 'center' }}>
        <div className="container container-narrow">
          <div className="card-white" style={{ padding: '48px 36px', borderColor: 'var(--border-gold)', background: 'linear-gradient(135deg, #FFFDF5 0%, #FFFFFF 100%)' }}>
            <div style={{ width: '52px', height: '52px', borderRadius: '14px', background: 'var(--gold-100)', border: '1px solid var(--gold-200)', color: 'var(--gold-700)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
              <MessageSquare size={24} />
            </div>
            <h2 style={{ fontSize: '28px', fontWeight: 800, color: 'var(--steel-900)', marginBottom: '12px' }}>
              Need custom hardware or software connections?
            </h2>
            <p style={{ fontSize: '15px', color: 'var(--steel-600)', lineHeight: '1.6', maxWidth: '580px', margin: '0 auto 28px' }}>
              Talk to us about integrations. We work with businesses to ensure compatibility with your existing barcode scanners, thermal receipt printers, and internal workflows.
            </p>
            <Link to="/contact/talk-to-sales" className="btn btn-primary">
              <span>Talk to Us About Integrations</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

