import React from 'react';
import ModulePageLayout from '../components/shared/ModulePageLayout';
import { Download, FileSpreadsheet, Check } from 'lucide-react';

const taxFeatures = [
  {
    title: "Switch without starting over",
    description: "Upgrades start from an effective date and never rewrite old invoices.",
    iconName: "CalendarCheck2",
  },
  {
    title: "Reports your accountant wants",
    description:
      "Sales by rate, HSN summary, purchases register, credit and debit notes, exported to Excel.",
    iconName: "FileSpreadsheet",
  },
];

export default function TaxGstPage() {
  return (
    <ModulePageLayout
      moduleName="Tax & GST"
      badge="Multi-Tier Tax Engine"
      headline="The right tax setup for where you are today."
      intro="Choose one of three levels and move up when your business needs it. Past invoices stay exactly as they were issued."
      features={taxFeatures}
      screenshotPlaceholder={
        <div className="card-white" style={{ padding: '28px', border: '1px solid var(--border-gold)', background: 'linear-gradient(180deg, #FFFFFF 0%, #F8FAFC 100%)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '16px', borderBottom: '1px solid var(--border-light)', marginBottom: '20px', flexWrap: 'wrap', gap: '12px' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ fontSize: '16px', fontWeight: 700, color: 'var(--steel-900)' }}>GSTR-1 &amp; GSTR-3B Sales Register Summary</span>
                <span style={{ padding: '2px 8px', borderRadius: '4px', background: '#D1FAE5', color: '#065F46', fontSize: '11px', fontFamily: 'var(--font-mono)', fontWeight: 600 }}>
                  Ready for CA Filing
                </span>
              </div>
              <p style={{ fontSize: '12px', color: 'var(--steel-500)', marginTop: '4px' }}>
                Tax Period: October 2026 &bull; Multi-Branch Consolidated &bull; HSN Classification Validated
              </p>
            </div>
            <button className="btn btn-secondary" style={{ padding: '6px 14px', fontSize: '12px' }}>
              <Download size={14} />
              <span>Export to Excel (.xlsx)</span>
            </button>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
            <div style={{ padding: '16px', borderRadius: '12px', background: '#FFFFFF', border: '1px solid var(--border-light)' }}>
              <div style={{ fontSize: '11px', textTransform: 'uppercase', color: 'var(--steel-500)', fontWeight: 700, marginBottom: '6px' }}>Total Tax Collected</div>
              <div style={{ fontSize: '20px', fontWeight: 800, color: 'var(--steel-900)', fontFamily: 'var(--font-heading)' }}>&#8377;8,42,190.00</div>
              <div style={{ fontSize: '11px', color: 'var(--steel-500)', marginTop: '4px' }}>CGST: &#8377;3,41,000 | SGST: &#8377;3,41,000 | IGST: &#8377;1,60,190</div>
            </div>

            <div style={{ padding: '16px', borderRadius: '12px', background: '#FFFFFF', border: '1px solid var(--border-light)' }}>
              <div style={{ fontSize: '11px', textTransform: 'uppercase', color: 'var(--steel-500)', fontWeight: 700, marginBottom: '6px' }}>HSN / SAC Summary</div>
              <div style={{ fontSize: '14px', fontWeight: 700, color: 'var(--steel-800)' }}>14 Unique HSN Chapters</div>
              <div style={{ fontSize: '11px', color: '#059669', fontWeight: 600, marginTop: '4px' }}>0 mismatch errors &bull; Quantities matched to sales</div>
            </div>

            <div style={{ padding: '16px', borderRadius: '12px', background: '#FFFFFF', border: '1px solid var(--border-light)' }}>
              <div style={{ fontSize: '11px', textTransform: 'uppercase', color: 'var(--steel-500)', fontWeight: 700, marginBottom: '6px' }}>Reverse Charge (RCM)</div>
              <div style={{ fontSize: '14px', fontWeight: 700, color: 'var(--gold-700)' }}>&#8377;18,400.00 Flagged</div>
              <div style={{ fontSize: '11px', color: 'var(--steel-500)', marginTop: '4px' }}>Recorded under section 9(3) / 9(4)</div>
            </div>
          </div>
        </div>
      }
      extraContent={
        <section className="section section-light" id="tax-comparison" style={{ borderTop: '1px solid var(--border-light)' }}>
          <div className="container">
            <div className="section-header">
              <span style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', fontWeight: 700, textTransform: 'uppercase', color: 'var(--gold-700)' }}>
                Comparative Analysis
              </span>
              <h2 className="section-title">Choose your tax tier</h2>
              <p className="section-subtitle">
                Pick the tax level you need today; upgrade seamlessly when your business expands.
              </p>
            </div>

            <div className="card-white" style={{ overflowX: 'auto', padding: 0 }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '14px' }}>
                <thead>
                  <tr style={{ background: 'var(--steel-50)', borderBottom: '1px solid var(--border-light)', fontSize: '12px', textTransform: 'uppercase', fontFamily: 'var(--font-mono)', color: 'var(--steel-600)' }}>
                    <th style={{ padding: '16px 24px' }}>Level</th>
                    <th style={{ padding: '16px 24px' }}>Best for</th>
                    <th style={{ padding: '16px 24px' }}>What you get</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ borderBottom: '1px solid var(--border-light)' }}>
                    <td style={{ padding: '20px 24px', fontWeight: 700, color: 'var(--steel-900)', fontSize: '16px' }}>
                      Simple tax
                    </td>
                    <td style={{ padding: '20px 24px', color: 'var(--steel-600)' }}>
                      Businesses outside India, or not GST-registered
                    </td>
                    <td style={{ padding: '20px 24px', color: 'var(--steel-800)', fontWeight: 500 }}>
                      Your own flat tax rates on every invoice
                    </td>
                  </tr>

                  <tr style={{ borderBottom: '1px solid var(--border-light)', background: '#FFFDF5' }}>
                    <td style={{ padding: '20px 24px', fontWeight: 700, color: 'var(--gold-700)', fontSize: '16px' }}>
                      Basic GST <span style={{ fontSize: '11px', padding: '2px 8px', borderRadius: '4px', background: 'var(--gold-100)', color: 'var(--gold-800)', marginLeft: '8px' }}>Popular</span>
                    </td>
                    <td style={{ padding: '20px 24px', color: 'var(--steel-600)' }}>
                      GST-registered businesses that file their own returns
                    </td>
                    <td style={{ padding: '20px 24px', color: 'var(--steel-800)', fontWeight: 500 }}>
                      GSTIN on invoices, CGST/SGST/IGST worked out automatically, GST register and HSN summary
                    </td>
                  </tr>

                  <tr>
                    <td style={{ padding: '20px 24px', fontWeight: 700, color: 'var(--steel-900)', fontSize: '16px' }}>
                      GST Compliance add-on
                    </td>
                    <td style={{ padding: '20px 24px', color: 'var(--steel-600)' }}>
                      Businesses that want compliance handled in the ERP
                    </td>
                    <td style={{ padding: '20px 24px', color: 'var(--steel-800)', fontWeight: 500 }}>
                      Input tax credit tracking, reverse charge, rate overrides, and GST reports with Excel export
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
      }
    />
  );
}

