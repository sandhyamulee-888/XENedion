import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  WifiOff,
  CreditCard,
  PauseCircle,
  Undo2,
  Clock,
  ShieldAlert,
  Award,
  FileText,
  FileCheck2,
  FileSpreadsheet,
  RotateCcw,
  Users2,
  Boxes,
  Layers,
  CalendarClock,
  ArrowLeftRight,
  BellRing,
  PackagePlus,
  Building,
  FileCheck,
  Undo,
  Receipt,
  CalendarCheck2,
  CheckCircle2,
} from 'lucide-react';

const iconMap = {
  WifiOff,
  CreditCard,
  PauseCircle,
  Undo2,
  Clock,
  ShieldAlert,
  Award,
  FileText,
  FileCheck2,
  FileSpreadsheet,
  RotateCcw,
  Users2,
  Boxes,
  Layers,
  CalendarClock,
  ArrowLeftRight,
  BellRing,
  PackagePlus,
  Building,
  FileCheck,
  Undo,
  Receipt,
  CalendarCheck2,
};

export default function ModulePageLayout({
  moduleName,
  headline,
  intro,
  badge = "Live Module",
  features = [],
  screenshotPlaceholder,
  extraContent,
}) {
  return (
    <div style={{ backgroundColor: '#FFFFFF' }}>
      {/* Module Hero */}
      <section style={{ backgroundColor: 'var(--steel-50)', borderBottom: '1px solid var(--border-light)', padding: '64px 0 54px', position: 'relative' }}>
        <div className="container">
          <div style={{ maxWidth: '840px' }}>
            <div className="badge-gold" style={{ marginBottom: '16px' }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--gold-500)' }} className="animate-pulse-dot" />
              <span style={{ fontWeight: 700, textTransform: 'uppercase', color: 'var(--gold-700)' }}>{moduleName}</span>
              <span style={{ color: 'var(--steel-300)' }}>&bull;</span>
              <span style={{ color: 'var(--steel-600)', fontFamily: 'var(--font-mono)' }}>{badge}</span>
            </div>

            <h1 style={{ fontSize: '42px', fontWeight: 800, color: 'var(--steel-900)', letterSpacing: '-0.02em', lineHeight: 1.15, marginBottom: '16px' }}>
              {headline}
            </h1>

            <p style={{ fontSize: '18px', color: 'var(--steel-600)', lineHeight: '1.6', marginBottom: '28px' }}>
              {intro}
            </p>

            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', flexWrap: 'wrap' }}>
              <Link to="/contact/request-a-demo" className="btn btn-primary">
                <span>Request a Demo</span>
                <ArrowRight size={16} />
              </Link>
              <Link to="/contact/talk-to-sales" className="btn btn-secondary">
                <span>Talk to Sales</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Screenshot / Mockup Preview Slot */}
      {screenshotPlaceholder && (
        <section style={{ padding: '40px 0', backgroundColor: '#FFFFFF' }}>
          <div className="container">
            {screenshotPlaceholder}
          </div>
        </section>
      )}

      {/* Feature Blocks */}
      <section className="section section-light" id="features">
        <div className="container">
          <div className="section-header">
            <span style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', fontWeight: 700, textTransform: 'uppercase', color: 'var(--gold-700)' }}>
              Core Capabilities
            </span>
            <h2 className="section-title">
              Engineered for multi-branch performance
            </h2>
            <p className="section-subtitle">
              Every feature is built into the unified core. No third-party sync apps or brittle middleware.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-8">
            {features.map((feat, idx) => {
              const Icon = iconMap[feat.iconName] || CheckCircle2;
              return (
                <div key={idx} className="card-white" style={{ padding: '32px' }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: '14px', background: 'var(--gold-100)', border: '1px solid var(--gold-200)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--gold-700)', marginBottom: '20px' }}>
                    <Icon size={24} />
                  </div>
                  <h3 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--steel-900)', marginBottom: '10px' }}>
                    {feat.title}
                  </h3>
                  <p style={{ fontSize: '14px', color: 'var(--steel-600)', lineHeight: '1.6' }}>
                    {feat.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Extra Section (e.g. Tax Table or Architecture Specs) */}
      {extraContent}

      {/* Bottom CTA Banner */}
      <section className="section section-slate">
        <div className="container container-narrow" style={{ textAlign: 'center' }}>
          <div className="card-white" style={{ padding: '48px 36px', borderColor: 'var(--border-gold)', background: 'linear-gradient(135deg, #FFFDF5 0%, #FFFFFF 100%)' }}>
            <h2 style={{ fontSize: '32px', fontWeight: 800, color: 'var(--steel-900)', marginBottom: '14px' }}>
              See {moduleName} in action with your own workflows.
            </h2>
            <p style={{ fontSize: '15px', color: 'var(--steel-600)', lineHeight: '1.6', marginBottom: '28px', maxWidth: '600px', margin: '0 auto 28px' }}>
              Book a 30-minute tailored demonstration with our product engineering team. We'll show you how XENedion coordinates your multi-branch operations.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '14px', flexWrap: 'wrap' }}>
              <Link to="/contact/request-a-demo" className="btn btn-primary">
                <span>Request a Demo</span>
                <ArrowRight size={16} />
              </Link>
              <Link to="/contact/talk-to-sales" className="btn btn-secondary">
                <span>Talk to Sales</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

