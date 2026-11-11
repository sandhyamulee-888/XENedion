import React, { useState, useEffect, useRef } from 'react';
import {
  CreditCard,
  Package,
  ShoppingBag,
  Receipt,
  Wifi,
  WifiOff,
  CheckCircle2,
  ArrowRight,
  Layers,
} from 'lucide-react';

const steps = [
  {
    step: "01",
    title: "Sale at counter",
    icon: CreditCard,
    badge: "Branch 01 • POS Terminal",
    description:
      "A cashier scans items at any counter terminal. The bill is finalized in seconds via Cash, Card or UPI, even if the internet is disconnected.",
    detail: "Immediate local receipt printed • Transaction signed",
  },
  {
    step: "02",
    title: "Stock updates across branches",
    icon: Package,
    badge: "Central Inventory • Real Time",
    description:
      "The shared database updates instantly. Branch stock is recalculated, preventing overselling across both physical counters and wholesale orders.",
    detail: "Audited adjustment • Reorder levels monitored",
  },
  {
    step: "03",
    title: "Purchase raised automatically",
    icon: ShoppingBag,
    badge: "Procurement • Back Office",
    description:
      "When branch stock falls below your configured reorder threshold, draft supplier bills or inter-branch transfers are generated automatically.",
    detail: "Supplier tax IDs linked • Quantities matched",
  },
  {
    step: "04",
    title: "Tax calculated for your registers",
    icon: Receipt,
    badge: "Compliance • Accountant Ready",
    description:
      "CGST, SGST, IGST, or simple flat rates are computed on the transaction. The HSN summary and sales registers update without manual intervention.",
    detail: "Ready for one-click Excel export for CA filing",
  },
];

export default function ScrollStory() {
  const [activeStep, setActiveStep] = useState(0);
  const [isDemoOffline, setIsDemoOffline] = useState(false);

  return (
    <section className="section section-light" id="workflow">
      <div className="container">
        <div className="section-header">
          <div className="badge-gold" style={{ marginBottom: '14px' }}>
            <Layers size={14} color="var(--gold-600)" />
            <span>Connected Operations In Action</span>
          </div>
          <h2 className="section-title">
            One system, every branch.
          </h2>
          <p className="section-subtitle">
            Follow a single transaction from the store counter to the warehouse, procurement, and tax registers in one unbroken chain.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-12" style={{ alignItems: 'start' }}>
          {/* Left: Sticky Visualization Screen */}
          <div style={{ position: 'sticky', top: '100px' }}>
            <div className="card-white" style={{ padding: '32px', borderColor: 'var(--border-gold)', background: 'linear-gradient(180deg, #FFFDF5 0%, #FFFFFF 100%)' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingBottom: '16px', borderBottom: '1px solid var(--border-light)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: 'var(--gold-500)' }} className="animate-pulse-dot" />
                  <span style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', fontWeight: 700, color: 'var(--steel-900)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    Branch Flow Engine
                  </span>
                </div>

                <button
                  type="button"
                  onClick={() => setIsDemoOffline(!isDemoOffline)}
                  className={`status-badge ${isDemoOffline ? 'status-offline' : 'status-online'}`}
                  style={{ cursor: 'pointer' }}
                  title="Click to toggle offline mode simulation"
                >
                  {isDemoOffline ? (
                    <>
                      <WifiOff size={13} color="#DC2626" />
                      <span>Offline (Click to sync)</span>
                    </>
                  ) : (
                    <>
                      <Wifi size={13} color="#059669" />
                      <span>Online • Live Sync</span>
                    </>
                  )}
                </button>
              </div>

              {/* Connecting Track & 4 Nodes */}
              <div style={{ position: 'relative', margin: '32px 0' }}>
                <div style={{ position: 'absolute', top: '24px', left: '10px', right: '10px', height: '4px', background: 'var(--steel-200)', zIndex: 0, borderRadius: '4px' }}>
                  <div
                    style={{
                      height: '100%',
                      background: 'var(--gold-gradient)',
                      width: `${(activeStep / (steps.length - 1)) * 100}%`,
                      transition: 'width 0.4s ease',
                      borderRadius: '4px',
                    }}
                  />
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', position: 'relative', zIndex: 1 }}>
                  {steps.map((st, idx) => {
                    const NodeIcon = st.icon;
                    const isActive = activeStep === idx;
                    const isPassed = activeStep >= idx;
                    return (
                      <div
                        key={idx}
                        onClick={() => setActiveStep(idx)}
                        style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', cursor: 'pointer' }}
                      >
                        <div
                          style={{
                            width: '48px',
                            height: '48px',
                            borderRadius: '14px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            background: isActive ? 'var(--gold-gradient)' : isPassed ? 'var(--gold-100)' : '#FFFFFF',
                            color: isActive ? '#FFFFFF' : isPassed ? 'var(--gold-700)' : 'var(--steel-400)',
                            border: `1px solid ${isActive ? 'var(--gold-500)' : isPassed ? 'var(--gold-300)' : 'var(--border-light)'}`,
                            boxShadow: isActive ? 'var(--shadow-gold-sm)' : 'none',
                            transform: isActive ? 'scale(1.1)' : 'scale(1)',
                            transition: 'all 0.3s ease',
                          }}
                        >
                          <NodeIcon size={20} />
                        </div>
                        <span style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', marginTop: '8px', fontWeight: isActive ? 700 : 500, color: isActive ? 'var(--gold-700)' : 'var(--steel-500)' }}>
                          Step {st.step}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Dynamic State Card */}
              <div style={{ padding: '20px', borderRadius: '14px', background: 'var(--steel-50)', border: '1px solid var(--border-light)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                  <span style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', color: 'var(--gold-700)', fontWeight: 700, textTransform: 'uppercase' }}>
                    Current Operation
                  </span>
                  <span style={{ fontSize: '10px', padding: '2px 8px', borderRadius: '4px', background: '#FFFFFF', border: '1px solid var(--border-light)', color: 'var(--steel-700)', fontFamily: 'var(--font-mono)' }}>
                    {steps[activeStep].badge}
                  </span>
                </div>

                <h4 style={{ fontSize: '17px', fontWeight: 700, color: 'var(--steel-900)', marginBottom: '6px' }}>
                  {steps[activeStep].title}
                </h4>

                <p style={{ fontSize: '13px', color: 'var(--steel-600)', lineHeight: '1.6', marginBottom: '12px' }}>
                  {steps[activeStep].description}
                </p>

                {isDemoOffline && (
                  <div style={{ padding: '10px 14px', borderRadius: '10px', background: '#FEF2F2', border: '1px solid #FECACA', fontSize: '12px', color: '#991B1B', display: 'flex', gap: '8px', marginBottom: '12px' }}>
                    <WifiOff size={16} color="#DC2626" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <div>
                      <strong>Offline resilience active:</strong> The POS continues processing counter receipts locally with encrypted offline caching. The moment internet restores, it synchronizes seamlessly to HQ.
                    </div>
                  </div>
                )}

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '10px', borderTop: '1px solid var(--border-light)', fontSize: '11px', color: 'var(--steel-500)', fontFamily: 'var(--font-mono)' }}>
                  <span>{steps[activeStep].detail}</span>
                  <span style={{ color: '#047857', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <CheckCircle2 size={13} /> Verified
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Interactive Step Cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {steps.map((item, index) => {
              const StepIcon = item.icon;
              const isActive = activeStep === index;
              return (
                <div
                  key={item.step}
                  onClick={() => setActiveStep(index)}
                  className="card-white"
                  style={{
                    padding: '28px',
                    borderColor: isActive ? 'var(--gold-500)' : 'var(--border-light)',
                    boxShadow: isActive ? 'var(--shadow-card-hover)' : 'var(--shadow-sm)',
                    transform: isActive ? 'translateX(6px)' : 'none',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', fontWeight: 700, padding: '3px 10px', borderRadius: '6px', background: 'var(--gold-100)', color: 'var(--gold-800)', border: '1px solid var(--gold-200)' }}>
                      Phase {item.step}
                    </span>
                    <span style={{ fontSize: '12px', color: 'var(--steel-500)', fontWeight: 500 }}>
                      {item.badge}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--steel-900)', display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                    <StepIcon size={20} color="var(--gold-600)" />
                    <span>{item.title}</span>
                  </h3>

                  <p style={{ fontSize: '14px', color: 'var(--steel-600)', lineHeight: '1.6', marginBottom: '14px' }}>
                    {item.description}
                  </p>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', color: 'var(--steel-500)', fontFamily: 'var(--font-mono)', paddingTop: '10px', borderTop: '1px solid var(--border-light)' }}>
                    <ArrowRight size={13} color="var(--gold-600)" />
                    <span>{item.detail}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

