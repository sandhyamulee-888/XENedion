import React from 'react';
import { Database, ShieldCheck, Globe2 } from 'lucide-react';

const reasons = [
  {
    title: "Branches stay in sync.",
    subtitle: "One database for every branch, so stock and sales never disagree.",
    icon: Database,
    detail:
      "When a sale happens at Counter 3 in Bandra, warehouse stock in Delhi is instantly current. No end-of-day batch reconciliation or ghost inventory.",
    stat: "100% Real-Time",
  },
  {
    title: "Your data stays yours.",
    subtitle: "Each company's data is isolated at the database level, and support can only see your account with your admin's approval.",
    icon: ShieldCheck,
    detail:
      "Tenant-level database isolation prevents multi-tenant leakage. Even our engineering support requires a cryptographic, time-limited token authorized by your administrator.",
    stat: "Strict Tenant Isolation",
  },
  {
    title: "Built for India, ready for elsewhere.",
    subtitle: "GST when you need it, simple flat-rate tax when you don't.",
    icon: Globe2,
    detail:
      "Full native handling for CGST, SGST, IGST, reverse charge and HSN codes for domestic branches, plus flexible flat-rate tax systems for overseas expansion.",
    stat: "Multi-Jurisdiction Ready",
  },
];

export default function WhySwitch() {
  return (
    <section className="section section-slate" id="why-switch">
      <div className="container">
        <div className="section-header">
          <span style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--gold-700)' }}>
            Engineered For Stability
          </span>
          <h2 className="section-title">
            Why teams switch
          </h2>
          <p className="section-subtitle">
            Built from scratch to eliminate the silent friction that breaks multi-branch retail and distribution.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-8">
          {reasons.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="card-white"
                style={{ padding: '32px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px' }}>
                    <div style={{ width: '52px', height: '52px', borderRadius: '14px', background: 'var(--gold-100)', border: '1px solid var(--gold-200)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--gold-700)' }}>
                      <Icon size={26} />
                    </div>
                    <span style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', padding: '4px 10px', borderRadius: '9999px', background: 'var(--gold-100)', color: 'var(--gold-800)', border: '1px solid var(--gold-200)', fontWeight: 700 }}>
                      {item.stat}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '20px', fontWeight: 700, color: 'var(--steel-900)', marginBottom: '8px' }}>
                    {item.title}
                  </h3>

                  <p style={{ fontSize: '14px', fontWeight: 600, color: 'var(--steel-800)', marginBottom: '12px', lineHeight: '1.5' }}>
                    {item.subtitle}
                  </p>

                  <p style={{ fontSize: '13px', color: 'var(--steel-600)', lineHeight: '1.6' }}>
                    {item.detail}
                  </p>
                </div>

                <div style={{ marginTop: '28px', paddingTop: '16px', borderTop: '1px solid var(--border-light)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '12px', color: 'var(--steel-500)' }}>
                  <span>Architecture Guarantee</span>
                  <span style={{ color: 'var(--gold-700)', fontFamily: 'var(--font-mono)', fontWeight: 700 }}>
                    XENedion Core
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

