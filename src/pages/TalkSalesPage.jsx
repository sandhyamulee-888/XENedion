import React from 'react';
import ContactForm from '../components/shared/ContactForm';
import { Building2, ShieldCheck, Zap } from 'lucide-react';

export default function TalkSalesPage() {
  return (
    <div style={{ backgroundColor: '#FFFFFF' }}>
      <section style={{ backgroundColor: 'var(--steel-50)', borderBottom: '1px solid var(--border-light)', padding: '64px 0 54px', textAlign: 'center' }}>
        <div className="container">
          <div style={{ maxWidth: '720px', margin: '0 auto' }}>
            <div className="badge-gold" style={{ marginBottom: '16px' }}>
              <span>Multi-Branch Licensing</span>
            </div>
            <h1 style={{ fontSize: '42px', fontWeight: 800, color: 'var(--steel-900)', letterSpacing: '-0.02em', marginBottom: '14px' }}>
              Talk to our enterprise sales team
            </h1>
            <p style={{ fontSize: '18px', color: 'var(--steel-600)', lineHeight: '1.6' }}>
              Custom deployment plans, multi-branch volume brackets, and hardware integration support.
            </p>
          </div>
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <div className="grid grid-cols-2 gap-12" style={{ alignItems: 'start' }}>
            <div>
              <h2 style={{ fontSize: '26px', fontWeight: 800, color: 'var(--steel-900)', marginBottom: '16px' }}>
                How we partner with multi-branch enterprises:
              </h2>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '32px' }}>
                <div className="card-white" style={{ padding: '24px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
                    <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'var(--gold-100)', color: 'var(--gold-700)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Building2 size={20} />
                    </div>
                    <h3 style={{ fontSize: '17px', fontWeight: 700, color: 'var(--steel-900)' }}>
                      Branch Volume Pricing
                    </h3>
                  </div>
                  <p style={{ fontSize: '14px', color: 'var(--steel-600)', lineHeight: '1.6' }}>
                    Transparent pricing brackets engineered for 1 to 50 branch locations. Add counter operators without per-seat penalty fees.
                  </p>
                </div>

                <div className="card-white" style={{ padding: '24px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
                    <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'var(--gold-100)', color: 'var(--gold-700)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Zap size={20} />
                    </div>
                    <h3 style={{ fontSize: '17px', fontWeight: 700, color: 'var(--steel-900)' }}>
                      Assisted Catalogue Onboarding
                    </h3>
                  </div>
                  <p style={{ fontSize: '14px', color: 'var(--steel-600)', lineHeight: '1.6' }}>
                    Our team assists in setting up your product master, barcode formats, UOM units, and multi-tier pricing templates.
                  </p>
                </div>

                <div className="card-white" style={{ padding: '24px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
                    <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'var(--gold-100)', color: 'var(--gold-700)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <ShieldCheck size={20} />
                    </div>
                    <h3 style={{ fontSize: '17px', fontWeight: 700, color: 'var(--steel-900)' }}>
                      Dedicated Account Engineering
                    </h3>
                  </div>
                  <p style={{ fontSize: '14px', color: 'var(--steel-600)', lineHeight: '1.6' }}>
                    Direct technical contact with our senior team for rapid onboarding and multi-store rollout coordination.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <ContactForm
                defaultIntent="sales"
                title="Speak With Sales"
                subtitle="Provide your branch count and contact details for an immediate quote."
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

