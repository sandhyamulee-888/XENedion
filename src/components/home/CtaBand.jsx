import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';

export default function CtaBand() {
  return (
    <section className="section section-light" id="cta-band">
      <div className="container container-narrow">
        <div
          className="card-white"
          style={{
            padding: '56px 40px',
            textAlign: 'center',
            borderColor: 'var(--border-gold)',
            background: 'linear-gradient(135deg, #FFFDF5 0%, #FFFFFF 50%, #FEF8E7 100%)',
            boxShadow: 'var(--shadow-card-hover)',
          }}
        >
          <div className="badge-gold" style={{ marginBottom: '20px' }}>
            <Sparkles size={14} color="var(--gold-600)" />
            <span>Tailored Product Walkthrough</span>
          </div>

          <h2 style={{ fontSize: '38px', fontWeight: 800, color: 'var(--steel-900)', letterSpacing: '-0.02em', marginBottom: '16px' }}>
            See XENedion on your own data.
          </h2>

          <p style={{ fontSize: '16px', color: 'var(--steel-600)', lineHeight: '1.6', maxWidth: '600px', margin: '0 auto 32px' }}>
            See how your branches, counter terminals, warehouse stock, and tax registers operate inside one clean, unified cloud ERP.
          </p>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
            <Link to="/contact/request-a-demo" className="btn btn-primary" style={{ padding: '14px 28px' }}>
              <span>Request a Demo</span>
              <ArrowRight size={16} />
            </Link>

            <Link to="/contact/talk-to-sales" className="btn btn-secondary" style={{ padding: '14px 28px' }}>
              <span>Talk to Sales</span>
            </Link>
          </div>

          <div style={{ marginTop: '36px', paddingTop: '24px', borderTop: '1px solid var(--border-light)', display: 'flex', justifyContent: 'center', gap: '24px', flexWrap: 'wrap', fontSize: '13px', color: 'var(--steel-600)', fontWeight: 500 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <CheckCircle2 size={15} color="#059669" />
              <span>Response within 1 working day</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <CheckCircle2 size={15} color="#059669" />
              <span>Engineered for 1 to 50 branches</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

