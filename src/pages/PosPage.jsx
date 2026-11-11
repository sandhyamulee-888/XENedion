import React from 'react';
import ModulePageLayout from '../components/shared/ModulePageLayout';

const posFeatures = [
  {
    title: "Works offline",
    description: "Bills are saved on the device and synced automatically.",
    iconName: "WifiOff",
  },
  {
    title: "Cash, UPI and card",
    description: "Choose the payment modes each terminal accepts.",
    iconName: "CreditCard",
  },
  {
    title: "Hold and recall bills",
    description: "Park a customer's bill and serve the next in line.",
    iconName: "PauseCircle",
  },
  {
    title: "Returns made safe",
    description: "Returns are checked against the original invoice before any refund.",
    iconName: "Undo2",
  },
  {
    title: "Shifts that add up",
    description: "Open and close the till for each session, with a cash count at close.",
    iconName: "Clock",
  },
  {
    title: "Manager control",
    description: "Voids and overrides need a manager's approval; every receipt can be reprinted.",
    iconName: "ShieldAlert",
  },
  {
    title: "Customer loyalty",
    description: "Look up customers at the counter and redeem loyalty points.",
    iconName: "Award",
  },
];

export default function PosPage() {
  return (
    <ModulePageLayout
      moduleName="Point of Sale"
      badge="Counter & Offline Terminal"
      headline="Billing that never stops."
      intro="A dedicated POS terminal app for your counters. Cashiers sign in with a PIN, bill in seconds, and keep selling even when the internet goes down; sales sync as soon as it's back."
      features={posFeatures}
      screenshotPlaceholder={
        <div className="card-white" style={{ padding: '28px', border: '1px solid var(--border-gold)', background: 'linear-gradient(180deg, #FFFFFF 0%, #F8FAFC 100%)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '16px', borderBottom: '1px solid var(--border-light)', marginBottom: '20px', flexWrap: 'wrap', gap: '12px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'var(--gold-100)', color: 'var(--gold-700)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800 }}>
                POS
              </div>
              <div>
                <h4 style={{ fontSize: '15px', fontWeight: 700, color: 'var(--steel-900)' }}>Terminal Counter #02 &mdash; Express Checkout</h4>
                <p style={{ fontSize: '12px', color: 'var(--steel-500)' }}>Cashier: Vikram Singh (PIN: ****) &bull; Session Active</p>
              </div>
            </div>
            <div className="status-badge status-online">
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#059669' }}></span>
              <span>Terminal Ready &bull; Offline Sync Active</span>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
            <div style={{ padding: '16px', borderRadius: '12px', background: '#FFFFFF', border: '1px solid var(--border-light)' }}>
              <div style={{ fontSize: '11px', textTransform: 'uppercase', color: 'var(--steel-500)', fontWeight: 700, marginBottom: '6px' }}>Current Bill Items</div>
              <div style={{ fontSize: '13px', color: 'var(--steel-800)', fontFamily: 'var(--font-mono)' }}>1x Casual Denim Jeans &bull; &#8377;2,199</div>
              <div style={{ fontSize: '13px', color: 'var(--steel-800)', fontFamily: 'var(--font-mono)', marginTop: '4px' }}>2x Cotton Graphic Tees &bull; &#8377;1,398</div>
              <div style={{ fontSize: '12px', color: '#047857', marginTop: '10px', paddingTop: '8px', borderTop: '1px solid var(--border-light)', fontWeight: 600 }}>
                Subtotal: &#8377;3,597 &bull; GST (12%): &#8377;431.64
              </div>
            </div>

            <div style={{ padding: '16px', borderRadius: '12px', background: '#FFFFFF', border: '1px solid var(--border-light)' }}>
              <div style={{ fontSize: '11px', textTransform: 'uppercase', color: 'var(--steel-500)', fontWeight: 700, marginBottom: '6px' }}>Customer Loyalty</div>
              <div style={{ fontSize: '13px', fontWeight: 700, color: 'var(--steel-900)' }}>Ananya Rao (+91 98201 *****)</div>
              <div style={{ fontSize: '12px', color: 'var(--gold-700)', fontWeight: 600, marginTop: '4px' }}>Points Balance: 420 pts (Redeem &#8377;210)</div>
              <div style={{ fontSize: '11px', color: 'var(--steel-500)', marginTop: '8px' }}>
                Tier: Platinum Member &bull; Branch: Indiranagar
              </div>
            </div>

            <div style={{ padding: '16px', borderRadius: '12px', background: '#FFFFFF', border: '1px solid var(--border-light)' }}>
              <div style={{ fontSize: '11px', textTransform: 'uppercase', color: 'var(--steel-500)', fontWeight: 700, marginBottom: '6px' }}>Shift Till Balance</div>
              <div style={{ fontSize: '20px', fontWeight: 800, color: 'var(--steel-900)', fontFamily: 'var(--font-heading)' }}>&#8377;14,250.00</div>
              <div style={{ fontSize: '12px', color: 'var(--steel-500)', marginTop: '4px' }}>Opening: &#8377;2,000 &bull; Cash Sales: &#8377;12,250</div>
              <div style={{ fontSize: '11px', color: '#047857', fontWeight: 600, marginTop: '8px' }}>Shift status: Balanced &bull; Count verified</div>
            </div>
          </div>
        </div>
      }
    />
  );
}

