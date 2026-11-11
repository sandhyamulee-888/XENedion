import React from 'react';
import ModulePageLayout from '../components/shared/ModulePageLayout';
import { Download } from 'lucide-react';

const salesFeatures = [
  {
    title: "Quotations",
    description: "Create, revise and email quotations as PDFs.",
    iconName: "FileText",
  },
  {
    title: "Sales orders",
    description: "Convert accepted quotations into orders in one click.",
    iconName: "FileCheck2",
  },
  {
    title: "Invoices",
    description: "Branded PDF invoices with your tax ID and invoice numbering per series.",
    iconName: "FileSpreadsheet",
  },
  {
    title: "Credit notes",
    description: "Handle returns and corrections against the original invoice.",
    iconName: "RotateCcw",
  },
  {
    title: "Customer records",
    description: "One customer list shared by sales and POS.",
    iconName: "Users2",
  },
];

export default function SalesPage() {
  return (
    <ModulePageLayout
      moduleName="Sales"
      badge="Quotation to Invoice Flow"
      headline="From quotation to cash, in one flow."
      intro="Send a quotation, turn it into a sales order, and invoice it without retyping a line. Customer details and tax carry through every step."
      features={salesFeatures}
      screenshotPlaceholder={
        <div className="card-white" style={{ padding: '28px', border: '1px solid var(--border-gold)', background: 'linear-gradient(180deg, #FFFFFF 0%, #F8FAFC 100%)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '16px', borderBottom: '1px solid var(--border-light)', marginBottom: '20px', flexWrap: 'wrap', gap: '12px' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ fontSize: '16px', fontWeight: 700, color: 'var(--steel-900)' }}>Invoice #INV-2026-DEL-0482</span>
                <span style={{ padding: '2px 8px', borderRadius: '4px', background: '#D1FAE5', color: '#065F46', fontSize: '11px', fontFamily: 'var(--font-mono)', fontWeight: 600 }}>
                  Posted &amp; Emailed
                </span>
              </div>
              <p style={{ fontSize: '12px', color: 'var(--steel-500)', marginTop: '4px' }}>
                Converted from Quotation #QT-1092 &bull; Customer: Metro Retailers Pvt Ltd (GSTIN: 07AAAAA0000A1Z5)
              </p>
            </div>
            <button className="btn btn-secondary" style={{ padding: '6px 14px', fontSize: '12px' }}>
              <Download size={14} />
              <span>Download Tax Invoice PDF</span>
            </button>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
            <div style={{ padding: '16px', borderRadius: '12px', background: '#FFFFFF', border: '1px solid var(--border-light)' }}>
              <div style={{ fontSize: '11px', textTransform: 'uppercase', color: 'var(--steel-500)', fontWeight: 700, marginBottom: '6px' }}>Invoice Total</div>
              <div style={{ fontSize: '20px', fontWeight: 800, color: 'var(--steel-900)', fontFamily: 'var(--font-heading)' }}>&#8377;1,28,450.00</div>
              <div style={{ fontSize: '11px', color: 'var(--steel-500)', marginTop: '4px' }}>CGST: &#8377;11,560.50 &bull; SGST: &#8377;11,560.50</div>
            </div>

            <div style={{ padding: '16px', borderRadius: '12px', background: '#FFFFFF', border: '1px solid var(--border-light)' }}>
              <div style={{ fontSize: '11px', textTransform: 'uppercase', color: 'var(--steel-500)', fontWeight: 700, marginBottom: '6px' }}>Payment Terms</div>
              <div style={{ fontSize: '14px', fontWeight: 700, color: 'var(--steel-800)' }}>Net 30 Days &bull; Due 15 Nov</div>
              <div style={{ fontSize: '11px', color: '#059669', fontWeight: 600, marginTop: '4px' }}>Payment status: Unpaid (Due in 10 days)</div>
            </div>

            <div style={{ padding: '16px', borderRadius: '12px', background: '#FFFFFF', border: '1px solid var(--border-light)' }}>
              <div style={{ fontSize: '11px', textTransform: 'uppercase', color: 'var(--steel-500)', fontWeight: 700, marginBottom: '6px' }}>Audit Trail</div>
              <div style={{ fontSize: '12px', color: 'var(--steel-700)' }}>QT-1092 &rarr; SO-0841 &rarr; INV-0482</div>
              <div style={{ fontSize: '11px', color: 'var(--steel-500)', marginTop: '4px' }}>Immutable ledger linked</div>
            </div>
          </div>
        </div>
      }
    />
  );
}

