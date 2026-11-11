import React from 'react';
import { Link } from 'react-router-dom';
import {
  CreditCard,
  FileSpreadsheet,
  PackageCheck,
  ShoppingBag,
  Receipt,
  ArrowRight,
  Sparkles,
} from 'lucide-react';

const modules = [
  {
    name: "Point of Sale",
    tagline: "Fast billing that keeps working when the internet drops.",
    href: "/modules/point-of-sale",
    icon: CreditCard,
    features: [
      "Offline local bill storage",
      "Cash, UPI & card tenders",
      "Hold & recall customer bills",
      "Shift open/close cash counts",
    ],
  },
  {
    name: "Sales",
    tagline: "Quotation to sales order to invoice, with PDFs your customers can trust.",
    href: "/modules/sales",
    icon: FileSpreadsheet,
    features: [
      "One-click quote to order",
      "Branded PDF invoice series",
      "Audit-safe credit notes",
      "Unified customer master",
    ],
  },
  {
    name: "Inventory",
    tagline: "Stock, batches and expiry for every branch, in real time.",
    href: "/modules/inventory",
    icon: PackageCheck,
    features: [
      "Branch stock levels & transfers",
      "Batch & expiry date tracking",
      "Variants, barcodes & UOM conversion",
      "Multi-product kits & bundles",
    ],
  },
  {
    name: "Purchasing",
    tagline: "Record supplier bills and debit notes, and keep stock in step.",
    href: "/modules/purchasing",
    icon: ShoppingBag,
    features: [
      "Centralized supplier records & tax IDs",
      "Draft, review and post bills",
      "Supplier debit notes for returns",
      "Purchase tax capture for registers",
    ],
  },
  {
    name: "Tax & GST",
    tagline: "Pick the tax level you need today; upgrade when you grow.",
    href: "/modules/tax-gst",
    icon: Receipt,
    features: [
      "Simple flat tax or Basic GST",
      "GST compliance with ITC & reverse charge",
      "Effective date upgrades (never alters past invoices)",
      "Excel exports for your accountant",
    ],
  },
];

export default function ModuleGrid() {
  return (
    <section id="modules" className="section section-slate">
      <div className="container">
        <div className="section-header">
          <div className="badge-gold" style={{ marginBottom: '14px' }}>
            <Sparkles size={14} color="var(--gold-600)" />
            <span>Modular by Nature, Unified by Design</span>
          </div>
          <h2 className="section-title">
            One database, five integrated engines.
          </h2>
          <p className="section-subtitle">
            Every module works together seamlessly in real time. No synchronization middleware, no data discrepancies across branches.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-8">
          {modules.map((mod) => {
            const Icon = mod.icon;
            return (
              <Link
                key={mod.name}
                to={mod.href}
                className="card-white"
                style={{ padding: '32px', display: 'flex', flexDirection: 'column', height: '100%', textDecoration: 'none' }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
                  <div style={{ width: '52px', height: '52px', borderRadius: '14px', background: 'var(--gold-100)', border: '1px solid var(--gold-200)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--gold-700)' }}>
                    <Icon size={26} />
                  </div>
                  <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'var(--steel-50)', border: '1px solid var(--border-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--steel-500)' }}>
                    <ArrowRight size={15} />
                  </div>
                </div>

                <h3 style={{ fontSize: '20px', fontWeight: 700, color: 'var(--steel-900)', marginBottom: '8px' }}>
                  {mod.name}
                </h3>

                <p style={{ fontSize: '14px', color: 'var(--steel-600)', lineHeight: '1.6', marginBottom: '24px' }}>
                  {mod.tagline}
                </p>

                <div style={{ borderTop: '1px solid var(--border-light)', paddingTop: '18px', marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {mod.features.map((feat, fIndex) => (
                    <div key={fIndex} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: 'var(--steel-600)', fontWeight: 500 }}>
                      <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--gold-500)' }}></span>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                <div style={{ marginTop: '24px', paddingTop: '12px', display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px', fontWeight: 700, color: 'var(--gold-700)' }}>
                  <span>Explore {mod.name}</span>
                  <ArrowRight size={14} />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

