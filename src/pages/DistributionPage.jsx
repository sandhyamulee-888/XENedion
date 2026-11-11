import React from 'react';
import { Link } from 'react-router-dom';
import {
  Truck,
  FileSpreadsheet,
  ArrowLeftRight,
  ShoppingBag,
  Receipt,
  ArrowRight,
  Boxes,
  ShieldCheck,
} from 'lucide-react';

const distHighlights = [
  {
    title: "Seamless Quotation to Invoice",
    desc: "Generate professional PDF quotations for B2B buyers. Convert approved quotes into active sales orders and invoices in a single click without re-entering lines.",
    icon: FileSpreadsheet,
  },
  {
    title: "Multi-Depot Stock & Transfers",
    desc: "Manage stock across regional depots and branch hubs. Initiate, dispatch, and track branch transfers with full audit trails.",
    icon: ArrowLeftRight,
  },
  {
    title: "Units of Measure (UOM) Conversion",
    desc: "Procure inventory in master cartons, pallets or cases from manufacturers, and sell in packs or individual pieces to retailers.",
    icon: Boxes,
  },
  {
    title: "Supplier Bills & Debit Notes",
    desc: "Record supplier bills as shipments arrive. Post debit notes with exact tax adjustments for damaged or short-shipped goods.",
    icon: ShoppingBag,
  },
  {
    title: "B2B GST & HSN Compliance",
    desc: "Automatic CGST, SGST, IGST calculations and HSN rate lookups. Export monthly sales and purchase registers directly for your chartered accountant.",
    icon: Receipt,
  },
  {
    title: "Multi-Branch Price Lists",
    desc: "Assign distinct pricing tiers and tax rules according to customer category or regional branch territory.",
    icon: ShieldCheck,
  },
];

export default function DistributionPage() {
  return (
    <div style={{ backgroundColor: '#FFFFFF' }}>
      {/* Hero */}
      <section style={{ backgroundColor: 'var(--steel-50)', borderBottom: '1px solid var(--border-light)', padding: '64px 0 54px' }}>
        <div className="container">
          <div style={{ maxWidth: '840px' }}>
            <div className="badge-gold" style={{ marginBottom: '16px' }}>
              <Truck size={15} color="var(--gold-600)" />
              <span style={{ fontWeight: 700, textTransform: 'uppercase', color: 'var(--gold-700)' }}>
                Industry Solution &bull; Wholesale &amp; Distribution
              </span>
            </div>

            <h1 style={{ fontSize: '42px', fontWeight: 800, color: 'var(--steel-900)', letterSpacing: '-0.02em', lineHeight: 1.15, marginBottom: '16px' }}>
              Built for high-volume wholesale, trade &amp; distribution.
            </h1>

            <p style={{ fontSize: '18px', color: 'var(--steel-600)', lineHeight: '1.6', marginBottom: '28px' }}>
              Coordinate regional warehouses, B2B sales orders, bulk procurement, and full tax registers across all your distribution hubs from one shared database.
            </p>

            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', flexWrap: 'wrap' }}>
              <Link to="/contact/request-a-demo" className="btn btn-primary">
                <span>Request a Distribution Demo</span>
                <ArrowRight size={16} />
              </Link>
              <Link to="/contact/talk-to-sales" className="btn btn-secondary">
                <span>Talk to Sales</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Grid */}
      <section className="section section-light">
        <div className="container">
          <div className="section-header">
            <span style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', fontWeight: 700, textTransform: 'uppercase', color: 'var(--gold-700)' }}>
              Distribution Workflow
            </span>
            <h2 className="section-title">Designed for wholesale accuracy</h2>
            <p className="section-subtitle">
              Eliminate order fulfillment bottlenecks and inventory blind spots across your logistics network.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-8">
            {distHighlights.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="card-white" style={{ padding: '32px' }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: '14px', background: 'var(--gold-100)', border: '1px solid var(--gold-200)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--gold-700)', marginBottom: '20px' }}>
                    <Icon size={24} />
                  </div>
                  <h3 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--steel-900)', marginBottom: '10px' }}>
                    {item.title}
                  </h3>
                  <p style={{ fontSize: '14px', color: 'var(--steel-600)', lineHeight: '1.6' }}>
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="section section-slate" style={{ textAlign: 'center' }}>
        <div className="container container-narrow">
          <div className="card-white" style={{ padding: '48px 36px', borderColor: 'var(--border-gold)', background: 'linear-gradient(135deg, #FFFDF5 0%, #FFFFFF 100%)' }}>
            <h2 style={{ fontSize: '28px', fontWeight: 800, color: 'var(--steel-900)', marginBottom: '12px' }}>
              Scale your distribution network without adding software silos.
            </h2>
            <p style={{ fontSize: '15px', color: 'var(--steel-600)', lineHeight: '1.6', maxWidth: '580px', margin: '0 auto 28px' }}>
              Speak with our solution engineers to map your depot warehouses, credit terms, and supplier flows.
            </p>
            <Link to="/contact/talk-to-sales" className="btn btn-primary">
              <span>Talk to Wholesale Sales</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

