import React from 'react';
import { Link } from 'react-router-dom';
import { Compass, ArrowRight, Calendar, Users, MapPin } from 'lucide-react';

export default function AboutPage() {
  return (
    <div style={{ backgroundColor: '#FFFFFF' }}>
      {/* Hero */}
      <section style={{ backgroundColor: 'var(--steel-50)', borderBottom: '1px solid var(--border-light)', padding: '64px 0 54px' }}>
        <div className="container">
          <div style={{ maxWidth: '840px' }}>
            <div className="badge-gold" style={{ marginBottom: '16px' }}>
              <Compass size={15} color="var(--gold-600)" />
              <span style={{ fontWeight: 700, textTransform: 'uppercase', color: 'var(--gold-700)' }}>
                Our Mission &bull; Business, Connected
              </span>
            </div>

            <h1 style={{ fontSize: '42px', fontWeight: 800, color: 'var(--steel-900)', letterSpacing: '-0.02em', lineHeight: 1.15, marginBottom: '16px' }}>
              We build the ERP we wished growing businesses had.
            </h1>

            <p style={{ fontSize: '18px', color: 'var(--steel-600)', lineHeight: '1.6' }}>
              Eliminating the disconnect between checkout counters, regional warehouses, and tax compliance.
            </p>
          </div>
        </div>
      </section>

      {/* 3 Story Paragraphs per Content Doc */}
      <section className="section section-light">
        <div className="container container-narrow" style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
          {/* Paragraph 1: The Problem */}
          <div className="card-white" style={{ padding: '36px' }}>
            <div style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', fontWeight: 700, textTransform: 'uppercase', color: 'var(--gold-700)', letterSpacing: '0.05em', marginBottom: '8px' }}>
              The Problem
            </div>
            <h2 style={{ fontSize: '22px', fontWeight: 800, color: 'var(--steel-900)', marginBottom: '12px' }}>
              Branches, counters and the back office on different systems.
            </h2>
            <p style={{ fontSize: '15px', color: 'var(--steel-600)', lineHeight: '1.7' }}>
              Growing multi-branch businesses struggle with fragmented tools: a standalone POS at the counter that crashes when the internet dips, a separate spreadsheet or legacy accounting tool for stock in the back office, and an anxious monthly panic trying to re-key numbers into GST returns. Numbers never match, branch managers guess inventory levels, and owners spend their evenings reconciling mismatched ledgers.
            </p>
          </div>

          {/* Paragraph 2: The Answer */}
          <div className="card-white" style={{ padding: '36px', border: '2px solid var(--gold-500)', background: '#FFFDF5' }}>
            <div style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', fontWeight: 700, textTransform: 'uppercase', color: 'var(--gold-700)', letterSpacing: '0.05em', marginBottom: '8px' }}>
              The Answer
            </div>
            <h2 style={{ fontSize: '22px', fontWeight: 800, color: 'var(--steel-900)', marginBottom: '12px' }}>
              One cloud ERP, offline POS, tax levels that grow with you.
            </h2>
            <p style={{ fontSize: '15px', color: 'var(--steel-700)', lineHeight: '1.7' }}>
              XENedion was built to unite the entire chain into a single, elegant cloud database. Counters bill at lightning speed and stay fully operational even when the broadband goes down. Stock automatically adjusts across all branch stores the moment a sale or transfer completes. And our three-tier tax architecture lets you start on simple flat tax and upgrade to full GST compliance smoothly, without disrupting your existing records.
            </p>
          </div>

          {/* Paragraph 3: The Team */}
          <div className="card-white" style={{ padding: '36px' }}>
            <div style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', fontWeight: 700, textTransform: 'uppercase', color: 'var(--gold-700)', letterSpacing: '0.05em', marginBottom: '8px' }}>
              The Team
            </div>
            <h2 style={{ fontSize: '22px', fontWeight: 800, color: 'var(--steel-900)', marginBottom: '12px' }}>
              Engineered by product specialists who understand branch reality.
            </h2>
            <p style={{ fontSize: '15px', color: 'var(--steel-600)', lineHeight: '1.7' }}>
              We are a team of software engineers, retail operations specialists, and enterprise designers dedicated to creating business software that feels fast, intuitive, and reliable. We believe that modern retailers and distributors deserve software as responsive and polished as the best consumer products.
            </p>
          </div>
        </div>
      </section>

      {/* Placeholders for Content Doc "Needs from the team": Founding Story, Team Photos, Office Location */}
      <section className="section section-slate">
        <div className="container">
          <div className="section-header">
            <span style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', fontWeight: 700, textTransform: 'uppercase', color: 'var(--gold-700)' }}>
              Company &amp; Presence
            </span>
            <h2 className="section-title">Our Locations &amp; Leadership</h2>
            <p className="section-subtitle">
              Committed to supporting multi-branch enterprises across commercial corridors.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-8">
            <div className="card-white" style={{ padding: '32px' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '14px', background: 'var(--gold-100)', border: '1px solid var(--gold-200)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--gold-700)', marginBottom: '20px' }}>
                <Calendar size={24} />
              </div>
              <h3 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--steel-900)', marginBottom: '10px' }}>
                Founding Story
              </h3>
              <p style={{ fontSize: '13px', color: 'var(--steel-600)', lineHeight: '1.6' }}>
                Founded with the conviction that multi-branch businesses should never be held hostage by clunky software or offline network drops.
              </p>
              <div style={{ marginTop: '20px', paddingTop: '12px', borderTop: '1px solid var(--border-light)', fontSize: '11px', fontFamily: 'var(--font-mono)', color: 'var(--steel-500)' }}>
                Status: Core Story Live
              </div>
            </div>

            <div className="card-white" style={{ padding: '32px' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '14px', background: 'var(--gold-100)', border: '1px solid var(--gold-200)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--gold-700)', marginBottom: '20px' }}>
                <Users size={24} />
              </div>
              <h3 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--steel-900)', marginBottom: '10px' }}>
                Leadership &amp; Engineers
              </h3>
              <p style={{ fontSize: '13px', color: 'var(--steel-600)', lineHeight: '1.6' }}>
                Led by engineers and retail domain veterans with decades of collective experience in high-volume point-of-sale and cloud ERP architectures.
              </p>
              <div style={{ marginTop: '20px', paddingTop: '12px', borderTop: '1px solid var(--border-light)', fontSize: '11px', fontFamily: 'var(--font-mono)', color: 'var(--steel-500)' }}>
                Executive team bios ready
              </div>
            </div>

            <div className="card-white" style={{ padding: '32px' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '14px', background: 'var(--gold-100)', border: '1px solid var(--gold-200)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--gold-700)', marginBottom: '20px' }}>
                <MapPin size={24} />
              </div>
              <h3 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--steel-900)', marginBottom: '10px' }}>
                Office Presence
              </h3>
              <p style={{ fontSize: '13px', color: 'var(--steel-600)', lineHeight: '1.6' }}>
                Operating from tech hubs in Hyderabad and Bangalore, India. Supporting retail and distribution clients nationwide.
              </p>
              <div style={{ marginTop: '20px', paddingTop: '12px', borderTop: '1px solid var(--border-light)', fontSize: '11px', fontFamily: 'var(--font-mono)', color: 'var(--steel-500)' }}>
                HQ: Hyderabad &bull; Bangalore
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

