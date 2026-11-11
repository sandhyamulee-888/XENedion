import React from 'react';
import { Link } from 'react-router-dom';
import { Check, ShieldCheck, ArrowRight } from 'lucide-react';

const taxTiers = [
  {
    step: "01",
    level: "Simple tax",
    bestFor: "Businesses outside India, or not GST-registered",
    whatYouGet: "Your own flat tax rates on every invoice",
    highlights: [
      "Custom flat tax percentages",
      "Per-line tax calculation",
      "Ideal for non-GST entities & exports",
      "Immediate activation",
    ],
    badge: "Foundation",
  },
  {
    step: "02",
    level: "Basic GST",
    bestFor: "GST-registered businesses that file their own returns",
    whatYouGet: "GSTIN on invoices, CGST/SGST/IGST worked out automatically, GST register and HSN summary",
    highlights: [
      "Automated CGST + SGST vs IGST split",
      "HSN / SAC summary breakdown",
      "Sales & purchases GST registers",
      "Valid B2B & B2C invoice formats",
    ],
    badge: "Most Popular",
    popular: true,
  },
  {
    step: "03",
    level: "GST Compliance add-on",
    bestFor: "Businesses that want compliance handled in the ERP",
    whatYouGet: "Input tax credit tracking, reverse charge, rate overrides, and GST reports with Excel export",
    highlights: [
      "Input Tax Credit (ITC) tracking",
      "Reverse charge mechanism (RCM)",
      "Special rate overrides & adjustments",
      "Full GST reports with Excel export for CA",
    ],
    badge: "Advanced Enterprise",
  },
];

export default function TaxLadder() {
  return (
    <section className="section section-slate" id="tax-ladder">
      <div className="container">
        <div className="section-header">
          <div className="badge-gold" style={{ marginBottom: '14px' }}>
            <span>Promise #3 &bull; Tax That Grows With You</span>
          </div>
          <h2 className="section-title">
            The right tax setup for where you are today.
          </h2>
          <p className="section-subtitle">
            Start on simple tax, move to GST, then turn on full compliance, without changing systems.
            Upgrades start from an effective date and never rewrite old invoices.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-8" style={{ alignItems: 'stretch' }}>
          {taxTiers.map((tier) => (
            <div
              key={tier.level}
              className="card-white"
              style={{
                padding: '32px',
                display: 'flex',
                flexDirection: 'column',
                position: 'relative',
                border: tier.popular ? '2px solid var(--gold-500)' : '1px solid var(--border-light)',
                boxShadow: tier.popular ? 'var(--shadow-card-hover)' : 'var(--shadow-card)',
                transform: tier.popular ? 'translateY(-6px)' : 'none',
              }}
            >
              {tier.popular && (
                <div style={{ position: 'absolute', top: '-14px', left: '50%', transform: 'translateX(-50%)', padding: '4px 14px', borderRadius: '9999px', background: 'var(--gold-gradient)', color: '#FFFFFF', fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', boxShadow: 'var(--shadow-gold-sm)' }}>
                  {tier.badge}
                </div>
              )}

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                <span style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', fontWeight: 700, padding: '3px 10px', borderRadius: '6px', background: 'var(--gold-100)', color: 'var(--gold-800)', border: '1px solid var(--gold-200)' }}>
                  Stage {tier.step}
                </span>
                {!tier.popular && (
                  <span style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', color: 'var(--steel-500)', fontWeight: 600 }}>
                    {tier.badge}
                  </span>
                )}
              </div>

              <h3 style={{ fontSize: '22px', fontWeight: 800, color: 'var(--steel-900)', marginBottom: '8px' }}>
                {tier.level}
              </h3>

              <div style={{ fontSize: '13px', color: 'var(--steel-600)', marginBottom: '14px', minHeight: '40px' }}>
                <strong style={{ color: 'var(--steel-800)' }}>Best for: </strong>
                {tier.bestFor}
              </div>

              <div style={{ padding: '12px 14px', borderRadius: '10px', background: 'var(--steel-50)', border: '1px solid var(--border-light)', fontSize: '13px', color: 'var(--steel-700)', marginBottom: '20px' }}>
                <strong style={{ color: 'var(--gold-700)', display: 'block', marginBottom: '4px', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  What you get:
                </strong>
                {tier.whatYouGet}
              </div>

              <div style={{ borderTop: '1px solid var(--border-light)', paddingTop: '18px', marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {tier.highlights.map((h, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: 'var(--steel-600)', fontWeight: 500 }}>
                    <Check size={14} color="var(--gold-600)" style={{ flexShrink: 0 }} />
                    <span>{h}</span>
                  </div>
                ))}
              </div>

              <div style={{ marginTop: '24px', paddingTop: '16px', borderTop: '1px solid var(--border-light)' }}>
                <Link
                  to="/modules/tax-gst"
                  style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', fontSize: '13px', fontWeight: 700, color: tier.popular ? 'var(--gold-700)' : 'var(--steel-700)' }}
                >
                  <span>See full Tax details</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

