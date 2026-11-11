import React from 'react';
import ModulePageLayout from '../components/shared/ModulePageLayout';

const purchasingFeatures = [
  {
    title: "Supplier records",
    description: "Keep supplier details and tax IDs in one place.",
    iconName: "Building",
  },
  {
    title: "Supplier bills",
    description: "Draft, review and post bills.",
    iconName: "FileCheck",
  },
  {
    title: "Debit notes",
    description: "Record returns to suppliers.",
    iconName: "Undo",
  },
  {
    title: "Tax on purchases",
    description: "GST on purchases is captured for your registers.",
    iconName: "Receipt",
  },
];

export default function PurchasingPage() {
  return (
    <ModulePageLayout
      moduleName="Purchasing"
      badge="Vendor Bills & Procurement"
      headline="Purchases that keep your stock honest."
      intro="Record supplier bills as goods arrive, so stock and costs stay correct."
      features={purchasingFeatures}
      screenshotPlaceholder={
        <div className="card-white" style={{ padding: '28px', border: '1px solid var(--border-gold)', background: 'linear-gradient(180deg, #FFFFFF 0%, #F8FAFC 100%)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '16px', borderBottom: '1px solid var(--border-light)', marginBottom: '20px', flexWrap: 'wrap', gap: '12px' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ fontSize: '16px', fontWeight: 700, color: 'var(--steel-900)' }}>Supplier Bill #PB-2026-904</span>
                <span style={{ padding: '2px 8px', borderRadius: '4px', background: '#D1FAE5', color: '#065F46', fontSize: '11px', fontFamily: 'var(--font-mono)', fontWeight: 600 }}>
                  Posted &amp; Matched
                </span>
              </div>
              <p style={{ fontSize: '12px', color: 'var(--steel-500)', marginTop: '4px' }}>
                Vendor: Prime Textiles Corp &bull; GSTIN: 27AABCP1234D1Z2 &bull; Branch: Central Depot
              </p>
            </div>
            <div style={{ textAlign: 'right' }}>
              <span style={{ fontSize: '11px', color: 'var(--steel-500)', display: 'block' }}>Total Invoiced Amount</span>
              <span style={{ fontSize: '20px', fontWeight: 800, color: 'var(--steel-900)', fontFamily: 'var(--font-heading)' }}>&#8377;1,48,200.00</span>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
            <div style={{ padding: '16px', borderRadius: '12px', background: '#FFFFFF', border: '1px solid var(--border-light)' }}>
              <div style={{ fontSize: '11px', textTransform: 'uppercase', color: 'var(--steel-500)', fontWeight: 700, marginBottom: '6px' }}>Input Tax Credit (ITC)</div>
              <div style={{ fontSize: '14px', fontWeight: 700, color: '#059669' }}>&#8377;22,606.78 Claimable</div>
              <div style={{ fontSize: '11px', color: 'var(--steel-500)', marginTop: '4px' }}>Matched to GSTR-2B eligible ledger</div>
            </div>

            <div style={{ padding: '16px', borderRadius: '12px', background: '#FFFFFF', border: '1px solid var(--border-light)' }}>
              <div style={{ fontSize: '11px', textTransform: 'uppercase', color: 'var(--steel-500)', fontWeight: 700, marginBottom: '6px' }}>Stock Reception</div>
              <div style={{ fontSize: '14px', fontWeight: 700, color: 'var(--steel-800)' }}>100% Received &bull; QC Passed</div>
              <div style={{ fontSize: '11px', color: 'var(--steel-500)', marginTop: '4px' }}>Stock count adjusted immediately across 6 SKUs</div>
            </div>

            <div style={{ padding: '16px', borderRadius: '12px', background: '#FFFFFF', border: '1px solid var(--border-light)' }}>
              <div style={{ fontSize: '11px', textTransform: 'uppercase', color: 'var(--steel-500)', fontWeight: 700, marginBottom: '6px' }}>Vendor Debit Notes</div>
              <div style={{ fontSize: '14px', fontWeight: 700, color: 'var(--gold-700)' }}>&#8377;0 (Clean shipment)</div>
              <div style={{ fontSize: '11px', color: 'var(--steel-500)', marginTop: '4px' }}>No damaged pieces or variances recorded</div>
            </div>
          </div>
        </div>
      }
    />
  );
}

