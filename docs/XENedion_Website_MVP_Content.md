# XENedion Website — MVP Content
Prepared 3 November 2026 · Based on the XENedion ERP codebase as it stands today

The MVP site markets only what the product does today: sales, an offline-ready POS, inventory, purchasing and three levels of tax, run across branches with role-based access. Everything else in the planned sitemap waits for a later release.

---

## 1. Positioning

**One-line pitch:** XENedion is the cloud ERP for growing multi-branch businesses: sell at the counter or by quotation, track stock in every branch, and stay tax-ready, all in one system.

**Who it is for (MVP):**
- Retailers and distributors with 1 to 50 branches who need a POS and back office that agree.
- Indian businesses that need GST done right, from unregistered to fully compliant.
- Businesses outside India, or not GST-registered, that need simple flat-rate tax.

**Three promises every page repeats:**
1. **One system, every branch.** Sales, POS, stock and purchases share one database, so numbers match across branches.
2. **Keeps selling when the internet drops.** The POS terminal works offline and syncs when it reconnects.
3. **Tax that grows with you.** Start on simple tax, move to GST, then turn on full compliance, without changing systems.

**Tagline options:**
- Run every branch from one place.
- The ERP that keeps selling, offline or online.
- From the counter to compliance.

---

## 2. MVP sitemap

The MVP ships 12 pages. Each page below is checked against the codebase as of today; "Later" pages go live when the module ships.

| Planned page | MVP | What the product has today |
| :--- | :--- | :--- |
| Home | Ship now | All live modules below |
| Modules → Sales | Ship now | Quotations, sales orders, invoices, credit notes, PDF invoices |
| Modules → Inventory | Ship now | Products, variants, barcodes, batches and expiry, branch stock, transfers, bundles |
| Modules → Purchasing | Ship now | Supplier bills and debit notes |
| Modules → Point of Sale (new page, not in the plan) | Ship now | Separate POS terminal app, works offline |
| Modules → Tax & GST (new page, not in the plan) | Ship now | Simple tax, Basic GST, GST Compliance add-on |
| Platform → Overview (merge Architecture, Security, Integrations into it) | Ship now | Multi-company, multi-branch, roles, tenant isolation, audit log |
| Pricing | Ship now | Plans and feature flags exist in the product; use "Talk to sales" if prices aren't final |
| About | Ship now | No product dependency |
| Contact → Request a Demo, Talk to Sales | Ship now | No product dependency |
| Solutions → Retail, Distribution | Ship now | Short pages; they fit the live modules |
| Modules → Order Management | Fold into Sales | Sales orders live inside Sales |
| Modules → Vendor Management | Fold into Purchasing | Supplier records live inside Purchasing |
| Modules → Finance & Accounts | Later | Screen is a placeholder |
| Modules → Reports & Analytics; Platform → Dashboards & Analytics | Later | GST reports exist; general dashboards are placeholders |
| Modules → CRM, HR, Logistics, Warehouse Management | Later | Not built |
| Platform → AI & Automation | Later | Not built |
| Solutions → Manufacturing, Automotive, Logistics, Professional Services | Later | Need modules that are not built |
| Why XENedion → MCSAR, Implementation, Customer Success | Later | Needs content from the team |
| Resources, Partners | Later | Need case studies and a partner programme |

**MVP navigation:** Home · Modules (Sales, Point of Sale, Inventory, Purchasing, Tax & GST) · Platform · Solutions (Retail, Distribution) · Pricing · About · Request a Demo (button).

---

## 3. Home page

### Hero
- **Headline:** Run every branch from one place.
- **Subhead:** XENedion brings your counter sales, quotations, stock, purchases and tax into one cloud ERP, so every branch works from the same numbers.
- **Buttons:** Request a demo (primary) · See the modules (secondary)
- **Visual:** the POS terminal beside the back-office stock screen.

### Proof strip (4 short facts)
- Works offline at the counter
- Cash, UPI and card payments
- Simple tax, GST and full GST compliance
- English, Hindi and Telugu

### Module cards (one line each, links to the module page)
- **Point of Sale:** Fast billing that keeps working when the internet drops.
- **Sales:** Quotation to sales order to invoice, with PDFs your customers can trust.
- **Inventory:** Stock, batches and expiry for every branch, in real time.
- **Purchasing:** Record supplier bills and debit notes, and keep stock in step.
- **Tax & GST:** Pick the tax level you need today; upgrade when you grow.

### How it works (3 steps)
1. **Set up your company and branches.** Add branches, users and roles in minutes.
2. **Add your products.** Set up your catalogue with barcodes, variants and units.
3. **Start selling.** Bill at the counter or send quotations; stock and tax update on every sale.

### Why teams switch (3 blocks)
- **Branches stay in sync.** One database for every branch, so stock and sales never disagree.
- **Your data stays yours.** Each company's data is isolated at the database level, and support can only see your account with your admin's approval.
- **Built for India, ready for elsewhere.** GST when you need it, simple flat-rate tax when you don't.

**Closing call to action:** See XENedion on your own data. [Request a demo]

---

## 4. Module pages

Each module page uses the same layout: headline, one-paragraph intro, 4 to 6 feature blocks, one screenshot, and a Request a demo button.

### Point of Sale
- **Headline:** Billing that never stops.
- **Intro:** A dedicated POS terminal app for your counters. Cashiers sign in with a PIN, bill in seconds, and keep selling even when the internet goes down; sales sync as soon as it's back.
- **Feature blocks:**
  - **Works offline:** bills are saved on the device and synced automatically.
  - **Cash, UPI and card:** choose the payment modes each terminal accepts.
  - **Hold and recall bills:** park a customer's bill and serve the next in line.
  - **Returns made safe:** returns are checked against the original invoice before any refund.
  - **Shifts that add up:** open and close the till for each session, with a cash count at close.
  - **Manager control:** voids and overrides need a manager's approval; every receipt can be reprinted.
  - **Customer loyalty:** look up customers at the counter and redeem loyalty points.

### Sales
- **Headline:** From quotation to cash, in one flow.
- **Intro:** Send a quotation, turn it into a sales order, and invoice it without retyping a line. Customer details and tax carry through every step.
- **Feature blocks:**
  - **Quotations:** create, revise and email quotations as PDFs.
  - **Sales orders:** convert accepted quotations into orders in one click.
  - **Invoices:** branded PDF invoices with your tax ID and invoice numbering per series.
  - **Credit notes:** handle returns and corrections against the original invoice.
  - **Customer records:** one customer list shared by sales and POS.

### Inventory
- **Headline:** Know what's on every shelf, in every branch.
- **Intro:** Track stock by branch in real time. Every sale, purchase and adjustment updates the count and leaves an audit trail.
- **Feature blocks:**
  - **Products and variants:** sizes, colours and other attributes, each with its own code, price and barcode.
  - **Categories, brands and units:** organise your catalogue; buy in boxes and sell in pieces with unit conversion.
  - **Batches and expiry:** track batch numbers and expiry dates, and see what's expiring soon.
  - **Branch stock and transfers:** stock levels per branch, with transfers between branches.
  - **Reorder alerts:** set reorder levels per branch so you know when to buy.
  - **Bundles and combos:** sell kits made of several products.

### Purchasing
- **Headline:** Purchases that keep your stock honest.
- **Intro:** Record supplier bills as goods arrive, so stock and costs stay correct.
- **Feature blocks:**
  - **Supplier records:** keep supplier details and tax IDs in one place.
  - **Supplier bills:** draft, review and post bills.
  - **Debit notes:** record returns to suppliers.
  - **Tax on purchases:** GST on purchases is captured for your registers.

### Tax & GST
- **Headline:** The right tax setup for where you are today.
- **Intro:** Choose one of three levels and move up when your business needs it. Past invoices stay exactly as they were issued.
- **Tax Levels Table:**
  - **Simple tax:** Best for: Businesses outside India, or not GST-registered. What you get: Your own flat tax rates on every invoice.
  - **Basic GST:** Best for: GST-registered businesses that file their own returns. What you get: GSTIN on invoices, CGST/SGST/IGST worked out automatically, GST register and HSN summary.
  - **GST Compliance add-on:** Best for: Businesses that want compliance handled in the ERP. What you get: Input tax credit tracking, reverse charge, rate overrides, and GST reports with Excel export.
- **Feature blocks:**
  - **Switch without starting over:** upgrades start from an effective date and never rewrite old invoices.
  - **Reports your accountant wants:** sales by rate, HSN summary, purchases register, credit and debit notes, exported to Excel.

---

## 5. Platform page

One page covers Overview, Architecture, Security and Integrations for the MVP.
- **Headline:** Built for businesses with more than one counter.
- **Intro:** XENedion is a cloud ERP where every company, branch and user has a clear place. Your team sees what their role allows, and your data never mixes with anyone else's.
- **Feature blocks:**
  - **Multi-branch by design:** add branches, assign users to them, and keep stock, sales and terminals per branch.
  - **Roles and permissions:** decide who can sell, adjust stock, post bills or change tax settings.
  - **Your data, isolated:** each company's records are kept separate at the database level, not just in the app.
  - **Support only with your consent:** our support team can see your account only after your admin grants time-limited access, and every visit is logged.
  - **Audit trail:** key changes record who did what, and when.
  - **Your words, your language:** rename labels to match how your business talks, and use the app in English, Hindi or Telugu.
  - **Documents stored safely:** invoices and quotations are generated as PDFs and kept in secure cloud storage.
- **Architecture (keep it short on the site):** cloud web app for the back office, a separate POS terminal app that installs on the counter device, and one shared database behind both.
- **Integrations:** don't list any for MVP. Use "Talk to us about integrations" until the team confirms which ones to show (see Open questions).

---

## 6. Pricing, About and Contact

### Pricing
The product already supports subscription plans, a trial status, and turning features on per plan. Prices are not set yet, so the MVP page shows plan names and what's included, with "Talk to sales" in place of a price.

| Plan (working names) | Includes | Price |
| :--- | :--- | :--- |
| **Starter** | Sales, Inventory, POS, Simple tax or Basic GST, 1 branch | Talk to sales |
| **Growth** | Everything in Starter, plus Purchasing and multiple branches | Talk to sales |
| **Compliance** | Everything in Growth, plus the GST Compliance add-on | Talk to sales |

*Add a line under the table, "Every plan starts with a free trial", only if the lead confirms trials are offered.* (Note: Do not show free trial per prompt instructions).

**FAQ block:**
- Can I change plans later?
- Do you charge per branch or per user?
- Is my data exported if I leave?

### About
- **Headline:** We build the ERP we wished growing businesses had.
- **Body (3 short paragraphs):**
  - Paragraph 1: The problem (branches, counters and the back office on different systems).
  - Paragraph 2: The answer (one cloud ERP, offline POS, tax levels that grow with you).
  - Paragraph 3: The team (passionate engineering and product team solving multi-branch retail & distribution challenges).
- **Needs from the team:** founding story, team photos, office location (mark with TODO comments).

### Contact — Request a demo form
- **Fields:**
  - Full name (Required)
  - Work email (Required)
  - Phone (Required, with country code)
  - Company name (Required)
  - Country (Required - tells sales whether to show GST or simple tax)
  - Number of branches (Required - 1, 2–5, 6–20, 20+)
  - Business type (Required - Retail, Distribution, Other)
  - Modules of interest (Optional - Checkboxes: POS, Sales, Inventory, Purchasing, Tax & GST)
  - Message (Optional)
- **Talk to sales:** same form without the module checkboxes, plus a phone number and email shown beside it.
- **After submit:** "Thanks, we'll contact you within one working day." Confirm the response time with sales.
- **Partner enquiry:** later, with the Partners section.

---

## 7. Claims to avoid

The site must not promise these until they ship; each was checked in the codebase.

| Don't say | Why | Say instead (if needed) |
| :--- | :--- | :--- |
| Finance, accounting, ledgers, P&L | Finance screen is a placeholder | "Finance module coming soon" |
| Dashboards, analytics, business reports | Dashboard and Reports screens are placeholders; only GST reports exist | "GST reports with Excel export" |
| CRM, HR, payroll, logistics, warehouse management | Not built | Leave out |
| AI, automation, forecasting | Not built | Leave out |
| Bulk import of products | Import screen exists but has no backend yet | "Set up your catalogue" |
| Files GST returns for you, GSTR-1/3B filing | Returns filing isn't built | "GST reports your accountant can file from" |
| E-invoicing and e-way bills | Code exists, but the GSP provider and CA sign-off are still open | "E-invoicing coming soon" until confirmed |
| Named integrations (Tally, Shopify, payment gateways) | None confirmed | "Talk to us about integrations" |
| Customer logos, numbers of users, uptime figures | No approved data | Leave out until marketing has it |

---

## 8. Open questions for the lead
- [ ] Plan names, prices and limits (per branch, per user, or per terminal)?
- [ ] Do we offer a free trial, and for how long?
- [ ] Can we say "e-invoicing and e-way bills" yet, or wait for the CA and GSP decision?
- [ ] Are Hindi and Telugu ready to advertise across the whole app?
- [ ] Is online store checkout (website order to quotation to payment) ready to market?
- [ ] Which integrations, if any, go on the Platform page?
- [ ] Target launch markets: India only, or also outside India from day one?
- [ ] Screenshots: which demo company and data can we use?
- [ ] Sales response time to quote on the Contact page.

