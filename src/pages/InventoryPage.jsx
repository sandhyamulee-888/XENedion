import React from 'react';
import ModulePageLayout from '../components/shared/ModulePageLayout';

const inventoryFeatures = [
  {
    title: "Products and variants",
    description: "Sizes, colours and other attributes, each with its own code, price and barcode.",
    iconName: "Boxes",
  },
  {
    title: "Categories, brands and units",
    description: "Organise your catalogue; buy in boxes and sell in pieces with unit conversion.",
    iconName: "Layers",
  },
  {
    title: "Batches and expiry",
    description: "Track batch numbers and expiry dates, and see what's expiring soon.",
    iconName: "CalendarClock",
  },
  {
    title: "Branch stock and transfers",
    description: "Stock levels per branch, with transfers between branches.",
    iconName: "ArrowLeftRight",
  },
  {
    title: "Reorder alerts",
    description: "Set reorder levels per branch so you know when to buy.",
    iconName: "BellRing",
  },
  {
    title: "Bundles and combos",
    description: "Sell kits made of several products.",
    iconName: "PackagePlus",
  },
];

export default function InventoryPage() {
  return (
    <ModulePageLayout
      moduleName="Inventory"
      badge="Multi-Branch Real-Time Tracking"
      headline="Know what's on every shelf, in every branch."
      intro="Track stock by branch in real time. Every sale, purchase and adjustment updates the count and leaves an audit trail."
      features={inventoryFeatures}
      screenshotPlaceholder={
        <div className="card-white" style={{ padding: '28px', border: '1px solid var(--border-gold)', background: 'linear-gradient(180deg, #FFFFFF 0%, #F8FAFC 100%)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '16px', borderBottom: '1px solid var(--border-light)', marginBottom: '20px', flexWrap: 'wrap', gap: '12px' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ fontSize: '16px', fontWeight: 700, color: 'var(--steel-900)' }}>Inter-Branch Transfer #TRF-0841</span>
                <span style={{ padding: '2px 8px', borderRadius: '4px', background: '#DBEAFE', color: '#1E40AF', fontSize: '11px', fontFamily: 'var(--font-mono)', fontWeight: 600 }}>
                  In Transit
                </span>
              </div>
              <p style={{ fontSize: '12px', color: 'var(--steel-500)', marginTop: '4px' }}>
                Origin: Central Warehouse (Bengaluru) &rarr; Destination: Connaught Place (#01 Delhi)
              </p>
            </div>
            <div style={{ fontSize: '12px', color: 'var(--steel-600)', fontFamily: 'var(--font-mono)' }}>
              Dispatched: Today 08:30 IST &bull; Courier: BlueDart Track #98402
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
            <div style={{ padding: '16px', borderRadius: '12px', background: '#FFFFFF', border: '1px solid var(--border-light)' }}>
              <div style={{ fontSize: '11px', textTransform: 'uppercase', color: 'var(--steel-500)', fontWeight: 700, marginBottom: '6px' }}>Manifest Quantity</div>
              <div style={{ fontSize: '20px', fontWeight: 800, color: 'var(--steel-900)', fontFamily: 'var(--font-heading)' }}>450 Units</div>
              <div style={{ fontSize: '11px', color: 'var(--steel-500)', marginTop: '4px' }}>15 SKUs &bull; 8 Cartons sealed with RFID tags</div>
            </div>

            <div style={{ padding: '16px', borderRadius: '12px', background: '#FFFFFF', border: '1px solid var(--border-light)' }}>
              <div style={{ fontSize: '11px', textTransform: 'uppercase', color: 'var(--steel-500)', fontWeight: 700, marginBottom: '6px' }}>Batch Verification</div>
              <div style={{ fontSize: '14px', fontWeight: 700, color: 'var(--steel-800)' }}>Batch #B-2026-08 (Exp: 08/2027)</div>
              <div style={{ fontSize: '11px', color: '#059669', fontWeight: 600, marginTop: '4px' }}>All batches compliant with FIFO policy</div>
            </div>

            <div style={{ padding: '16px', borderRadius: '12px', background: '#FFFFFF', border: '1px solid var(--border-light)' }}>
              <div style={{ fontSize: '11px', textTransform: 'uppercase', color: 'var(--steel-500)', fontWeight: 700, marginBottom: '6px' }}>Stock Valuation Impact</div>
              <div style={{ fontSize: '14px', fontWeight: 700, color: 'var(--gold-700)' }}>&#8377;3,12,000 Transfer Value</div>
              <div style={{ fontSize: '11px', color: 'var(--steel-500)', marginTop: '4px' }}>Stock ledger automatically balanced on receipt</div>
            </div>
          </div>
        </div>
      }
    />
  );
}

