import React from 'react';
import { Building2, PackagePlus, Zap } from 'lucide-react';

const steps = [
  {
    num: "01",
    title: "Set up your company and branches.",
    desc: "Add branches, users and roles in minutes. Define permissions for cashiers, branch managers and accounting admins.",
    icon: Building2,
  },
  {
    num: "02",
    title: "Add your products.",
    desc: "Set up your catalogue with barcodes, variants and units. Configure buy-in-boxes and sell-in-pieces conversion.",
    icon: PackagePlus,
  },
  {
    num: "03",
    title: "Start selling.",
    desc: "Bill at the counter or send quotations; stock and tax update on every sale across your entire branch network.",
    icon: Zap,
  },
];

export default function HowItWorks() {
  return (
    <section className="section section-light" id="how-it-works">
      <div className="container">
        <div className="section-header">
          <span style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--gold-700)' }}>
            Rapid Deployment
          </span>
          <h2 className="section-title">
            How it works
          </h2>
          <p className="section-subtitle">
            Get your multi-branch operations live without months of consultants or IT overhead.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-8">
          {steps.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.num}
                className="card-white"
                style={{ padding: '32px', position: 'relative' }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px' }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: '14px', background: 'var(--gold-100)', border: '1px solid var(--gold-200)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--gold-700)' }}>
                    <Icon size={24} />
                  </div>
                  <span style={{ fontSize: '36px', fontWeight: 800, fontFamily: 'var(--font-heading)', color: 'var(--steel-200)' }}>
                    {item.num}
                  </span>
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
  );
}

