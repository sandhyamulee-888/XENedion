import React from 'react';
import ContactForm from '../components/shared/ContactForm';
import { CheckCircle2, ShieldCheck, Zap } from 'lucide-react';

export default function RequestDemoPage() {
  return (
    <div style={{ backgroundColor: '#FFFFFF' }}>
      <section style={{ backgroundColor: 'var(--steel-50)', borderBottom: '1px solid var(--border-light)', padding: '64px 0 54px', textAlign: 'center' }}>
        <div className="container">
          <div style={{ maxWidth: '720px', margin: '0 auto' }}>
            <div className="badge-gold" style={{ marginBottom: '16px' }}>
              <span>Personalized Walkthrough</span>
            </div>
            <h1 style={{ fontSize: '42px', fontWeight: 800, color: 'var(--steel-900)', letterSpacing: '-0.02em', marginBottom: '14px' }}>
              Request a tailored XENedion demo
            </h1>
            <p style={{ fontSize: '18px', color: 'var(--steel-600)', lineHeight: '1.6' }}>
              See how our offline-capable POS, real-time branch inventory, and automated tax engine perform on your real business workflow.
            </p>
          </div>
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <div className="grid grid-cols-2 gap-12" style={{ alignItems: 'start' }}>
            <div>
              <h2 style={{ fontSize: '26px', fontWeight: 800, color: 'var(--steel-900)', marginBottom: '16px' }}>
                What happens during your 30-minute session:
              </h2>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '32px' }}>
                <div style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                  <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'var(--gold-100)', color: 'var(--gold-700)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, flexShrink: 0 }}>
                    1
                  </div>
                  <div>
                    <h3 style={{ fontSize: '16px', fontWeight: 700, color: 'var(--steel-900)', marginBottom: '4px' }}>
                      Branch Footprint Analysis
                    </h3>
                    <p style={{ fontSize: '14px', color: 'var(--steel-600)', lineHeight: '1.5' }}>
                      We map your current number of store counters, warehouses, and tax filing structure.
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                  <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'var(--gold-100)', color: 'var(--gold-700)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, flexShrink: 0 }}>
                    2
                  </div>
                  <div>
                    <h3 style={{ fontSize: '16px', fontWeight: 700, color: 'var(--steel-900)', marginBottom: '4px' }}>
                      Offline POS &amp; Inventory Demo
                    </h3>
                    <p style={{ fontSize: '14px', color: 'var(--steel-600)', lineHeight: '1.5' }}>
                      Live demonstration of counter billing, offline caching, and instantaneous stock balancing across branches.
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                  <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'var(--gold-100)', color: 'var(--gold-700)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, flexShrink: 0 }}>
                    3
                  </div>
                  <div>
                    <h3 style={{ fontSize: '16px', fontWeight: 700, color: 'var(--steel-900)', marginBottom: '4px' }}>
                      GST &amp; Excel Reports Walkthrough
                    </h3>
                    <p style={{ fontSize: '14px', color: 'var(--steel-600)', lineHeight: '1.5' }}>
                      Review how sales registers, HSN summaries, and ITC ledgers export smoothly for your chartered accountant.
                    </p>
                  </div>
                </div>
              </div>

              <div style={{ padding: '20px', borderRadius: '14px', background: 'var(--steel-50)', border: '1px solid var(--border-light)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#059669', fontWeight: 700, fontSize: '14px', marginBottom: '6px' }}>
                  <CheckCircle2 size={16} />
                  <span>No credit card or setup fee required</span>
                </div>
                <p style={{ fontSize: '13px', color: 'var(--steel-600)', lineHeight: '1.5' }}>
                  Our solution architects will guide you through the software and provide a clear, honest assessment.
                </p>
              </div>
            </div>

            <div>
              <ContactForm
                defaultIntent="demo"
                title="Book Your Demo"
                subtitle="Pick a convenient time with our product engineering team."
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

