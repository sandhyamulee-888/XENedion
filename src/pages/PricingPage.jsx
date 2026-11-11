import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Check, ChevronDown, ArrowRight } from 'lucide-react';

const plans = [
  {
    name: "Starter",
    description: "Ideal for single-branch stores starting their journey with unified counter billing and inventory.",
    price: "Talk to sales",
    priceNote: "Customized quote for single branch",
    includes: "Sales, Inventory, POS, Simple tax or Basic GST, 1 branch",
    features: [
      "1 branch included",
      "Sales (Quotations, Orders, Invoices)",
      "Point of Sale (Offline ready)",
      "Real-time Inventory tracking",
      "Simple tax or Basic GST",
      "Unified customer master",
      "Email support",
    ],
    highlight: false,
    cta: "Talk to Sales",
  },
  {
    name: "Growth",
    description: "Designed for expanding multi-branch retailers and distributors requiring purchase tracking.",
    price: "Talk to sales",
    priceNote: "Scales with branch volume",
    includes: "Everything in Starter, plus Purchasing and multiple branches",
    features: [
      "Multiple branches included",
      "Everything in Starter",
      "Purchasing (Supplier bills & debit notes)",
      "Inter-branch stock transfers",
      "Role-based access permissions",
      "Shift opening/closing cash audits",
      "Priority onboarding & support",
    ],
    highlight: true,
    badge: "Recommended for Expansion",
    cta: "Talk to Sales",
  },
  {
    name: "Compliance",
    description: "For established businesses that require complete Indian GST compliance and advanced audit controls.",
    price: "Talk to sales",
    priceNote: "Enterprise branch tier",
    includes: "Everything in Growth, plus the GST Compliance add-on",
    features: [
      "Everything in Growth",
      "GST Compliance add-on",
      "Input Tax Credit (ITC) tracking",
      "Reverse Charge Mechanism (RCM)",
      "Rate overrides & special tax adjustments",
      "Full GST reports with Excel export for CA",
      "Dedicated account specialist",
    ],
    highlight: false,
    cta: "Talk to Sales",
  },
];

const faqs = [
  {
    question: "Can I change plans later?",
    answer:
      "Yes, absolutely. You can upgrade from Starter to Growth or Compliance at any time as your branch network expands. Upgrades apply smoothly with your effective start date and never rewrite previous invoices or audit logs.",
  },
  {
    question: "Do you charge per branch or per user?",
    answer:
      "Our pricing is structured around active branch locations to keep your costs predictable. Unlike traditional ERPs that penalize team collaboration with steep per-seat fees, XENedion allows you to add cashier and manager roles per branch. Talk to sales for exact branch volume brackets.",
  },
  {
    question: "Is my data exported if I leave?",
    answer:
      "Yes, completely. Your data always stays yours. We provide standard exports of your products, customers, sales registers, supplier bills, and GST reports in Excel and CSV formats at any time without lock-in.",
  },
];

export default function PricingPage() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div style={{ backgroundColor: '#FFFFFF' }}>
      {/* Hero */}
      <section style={{ backgroundColor: 'var(--steel-50)', borderBottom: '1px solid var(--border-light)', padding: '64px 0 54px', textAlign: 'center' }}>
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <div className="badge-gold" style={{ marginBottom: '16px' }}>
              <span style={{ fontWeight: 700, textTransform: 'uppercase', color: 'var(--gold-700)' }}>
                Transparent, Branch-Focused Pricing
              </span>
            </div>

            <h1 style={{ fontSize: '42px', fontWeight: 800, color: 'var(--steel-900)', letterSpacing: '-0.02em', lineHeight: 1.15, marginBottom: '16px' }}>
              Simple plans for growing businesses.
            </h1>

            <p style={{ fontSize: '18px', color: 'var(--steel-600)', lineHeight: '1.6', maxWidth: '640px', margin: '0 auto' }}>
              Choose the right tier for your branch footprint today, and upgrade as you scale without retyping or migrating data.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="section section-light">
        <div className="container">
          <div className="grid grid-cols-3 gap-8" style={{ alignItems: 'stretch' }}>
            {plans.map((plan) => (
              <div
                key={plan.name}
                className="card-white"
                style={{
                  padding: '36px',
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative',
                  border: plan.highlight ? '2px solid var(--gold-500)' : '1px solid var(--border-light)',
                  boxShadow: plan.highlight ? 'var(--shadow-card-hover)' : 'var(--shadow-card)',
                  transform: plan.highlight ? 'translateY(-6px)' : 'none',
                }}
              >
                {plan.highlight && (
                  <div style={{ position: 'absolute', top: '-14px', left: '50%', transform: 'translateX(-50%)', padding: '4px 14px', borderRadius: '9999px', background: 'var(--gold-gradient)', color: '#FFFFFF', fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', boxShadow: 'var(--shadow-gold-sm)', whiteSpace: 'nowrap' }}>
                    {plan.badge}
                  </div>
                )}

                <h3 style={{ fontSize: '24px', fontWeight: 800, color: 'var(--steel-900)', marginBottom: '8px' }}>
                  {plan.name}
                </h3>

                <p style={{ fontSize: '13px', color: 'var(--steel-600)', lineHeight: '1.5', marginBottom: '24px', minHeight: '40px' }}>
                  {plan.description}
                </p>

                <div style={{ padding: '16px', borderRadius: '12px', background: 'var(--steel-50)', border: '1px solid var(--border-light)', marginBottom: '24px' }}>
                  <div style={{ fontSize: '24px', fontWeight: 800, color: 'var(--steel-900)', fontFamily: 'var(--font-heading)' }}>
                    {plan.price}
                  </div>
                  <div style={{ fontSize: '11px', color: 'var(--steel-500)', marginTop: '2px' }}>
                    {plan.priceNote}
                  </div>
                </div>

                <div style={{ padding: '10px 14px', borderRadius: '8px', background: 'var(--gold-50)', border: '1px solid var(--gold-200)', fontSize: '12px', color: 'var(--gold-800)', fontWeight: 600, marginBottom: '24px' }}>
                  <strong>Includes: </strong> {plan.includes}
                </div>

                <div style={{ borderTop: '1px solid var(--border-light)', paddingTop: '20px', marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '32px' }}>
                  {plan.features.map((feat, fIdx) => (
                    <div key={fIdx} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: 'var(--steel-700)', fontWeight: 500 }}>
                      <Check size={14} color="var(--gold-600)" style={{ flexShrink: 0 }} />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                <Link
                  to="/contact/talk-to-sales"
                  className={plan.highlight ? "btn btn-primary" : "btn btn-secondary"}
                  style={{ width: '100%', justifyContent: 'center', padding: '12px' }}
                >
                  <span>{plan.cta}</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="section section-slate" id="faq">
        <div className="container container-narrow">
          <div className="section-header">
            <span style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', fontWeight: 700, textTransform: 'uppercase', color: 'var(--gold-700)' }}>
              Frequently Asked Questions
            </span>
            <h2 className="section-title">Everything you need to know</h2>
            <p className="section-subtitle">
              Straightforward answers about our subscription model, branches, and data ownership.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className="card-white"
                  style={{ padding: '24px 28px', cursor: 'pointer', transition: 'all 0.2s ease' }}
                  onClick={() => toggleFaq(index)}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <h3 style={{ fontSize: '16px', fontWeight: 700, color: 'var(--steel-900)' }}>
                      {faq.question}
                    </h3>
                    <ChevronDown
                      size={18}
                      color="var(--steel-500)"
                      style={{
                        transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                        transition: 'transform 0.2s ease',
                        flexShrink: 0,
                        marginLeft: '16px',
                      }}
                    />
                  </div>
                  {isOpen && (
                    <p style={{ marginTop: '14px', paddingTop: '14px', borderTop: '1px solid var(--border-light)', fontSize: '14px', color: 'var(--steel-600)', lineHeight: '1.6' }}>
                      {faq.answer}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

