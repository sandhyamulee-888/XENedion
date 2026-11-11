import React from 'react';
import { WifiOff, CreditCard, Landmark, Languages } from 'lucide-react';

const facts = [
  {
    icon: WifiOff,
    title: "Works offline at the counter",
    detail: "Cashiers keep billing smoothly even if the internet drops. Auto-syncs on reconnect.",
    badge: "Continuous Billing",
  },
  {
    icon: CreditCard,
    title: "Cash, UPI and card payments",
    detail: "Configure payment modes per counter device. Multi-tender support built in.",
    badge: "All Payment Modes",
  },
  {
    icon: Landmark,
    title: "Simple tax, GST & compliance",
    detail: "Choose flat rates or full Indian GST with CGST, SGST, IGST and HSN summaries.",
    badge: "3-Tier Tax Model",
  },
  {
    icon: Languages,
    title: "English, Hindi and Telugu",
    detail: "Adapt the ERP to the language your counter staff and warehouse teams speak.",
    badge: "Multi-Language",
  },
];

export default function ProofStrip() {
  return (
    <section style={{ backgroundColor: '#FFFFFF', borderBottom: '1px solid var(--border-light)', padding: '48px 0' }}>
      <div className="container">
        <div className="grid grid-cols-4 gap-6">
          {facts.map((fact) => {
            const Icon = fact.icon;
            return (
              <div
                key={fact.title}
                className="card-white"
                style={{ padding: '24px', transition: 'all 0.3s ease' }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                  <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: 'var(--gold-100)', border: '1px solid var(--gold-200)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--gold-700)' }}>
                    <Icon size={20} />
                  </div>
                  <span style={{ fontSize: '10px', fontFamily: 'var(--font-mono)', padding: '3px 8px', borderRadius: '9999px', background: 'var(--steel-50)', color: 'var(--steel-600)', border: '1px solid var(--border-light)', fontWeight: 600 }}>
                    {fact.badge}
                  </span>
                </div>
                <h3 style={{ fontSize: '15px', fontWeight: 700, color: 'var(--steel-900)', marginBottom: '8px' }}>
                  {fact.title}
                </h3>
                <p style={{ fontSize: '13px', color: 'var(--steel-600)', lineHeight: '1.5' }}>
                  {fact.detail}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

