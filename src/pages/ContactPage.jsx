import React from 'react';
import { Link } from 'react-router-dom';
import ContactForm from '../components/shared/ContactForm';
import { Mail, Phone, MapPin, Globe, Clock, ShieldCheck } from 'lucide-react';

export default function ContactPage() {
  return (
    <div style={{ backgroundColor: '#FFFFFF' }}>
      <section style={{ backgroundColor: 'var(--steel-50)', borderBottom: '1px solid var(--border-light)', padding: '64px 0 54px', textAlign: 'center' }}>
        <div className="container">
          <div style={{ maxWidth: '720px', margin: '0 auto' }}>
            <h1 style={{ fontSize: '42px', fontWeight: 800, color: 'var(--steel-900)', letterSpacing: '-0.02em', marginBottom: '14px' }}>
              Get in touch with XENedion
            </h1>
            <p style={{ fontSize: '18px', color: 'var(--steel-600)', lineHeight: '1.6' }}>
              Whether you need a full demonstration or want to discuss multi-branch pricing, our solution specialists are ready to help.
            </p>
          </div>
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <div className="grid grid-cols-2 gap-12" style={{ alignItems: 'start' }}>
            {/* Left Column: Direct Info */}
            <div>
              <h2 style={{ fontSize: '28px', fontWeight: 800, color: 'var(--steel-900)', marginBottom: '16px' }}>
                Let&rsquo;s connect your business operations.
              </h2>
              <p style={{ fontSize: '15px', color: 'var(--steel-600)', lineHeight: '1.6', marginBottom: '32px' }}>
                Reach out to our team directly, or select a specialized inquiry path below for fast dispatch to the right engineering team.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '36px' }}>
                <div className="card-white" style={{ padding: '20px', display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: 'var(--gold-100)', color: 'var(--gold-700)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Mail size={20} />
                  </div>
                  <div>
                    <div style={{ fontSize: '11px', textTransform: 'uppercase', color: 'var(--steel-500)', fontWeight: 700 }}>Direct Email</div>
                    <a href="mailto:contact@xenedion.com" style={{ fontSize: '15px', fontWeight: 700, color: 'var(--steel-900)' }}>contact@xenedion.com</a>
                  </div>
                </div>

                <div className="card-white" style={{ padding: '20px', display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: 'var(--gold-100)', color: 'var(--gold-700)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <MapPin size={20} />
                  </div>
                  <div>
                    <div style={{ fontSize: '11px', textTransform: 'uppercase', color: 'var(--steel-500)', fontWeight: 700 }}>Offices</div>
                    <div style={{ fontSize: '15px', fontWeight: 700, color: 'var(--steel-900)' }}>Bangalore, India</div>
                  </div>
                </div>

                <div className="card-white" style={{ padding: '20px', display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: 'var(--gold-100)', color: 'var(--gold-700)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Globe size={20} />
                  </div>
                  <div>
                    <div style={{ fontSize: '11px', textTransform: 'uppercase', color: 'var(--steel-500)', fontWeight: 700 }}>Languages Supported</div>
                    <div style={{ fontSize: '15px', fontWeight: 700, color: 'var(--steel-900)' }}>English, Hindi, and Telugu</div>
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <Link to="/contact/request-a-demo" className="btn btn-primary">
                  Request a Demo
                </Link>
                <Link to="/contact/talk-to-sales" className="btn btn-secondary">
                  Talk to Sales
                </Link>
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <div>
              <ContactForm
                title="Send a Message"
                subtitle="Fill out the form and a representative will contact you shortly."
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

