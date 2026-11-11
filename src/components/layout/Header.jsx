import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  ChevronDown,
  Menu,
  X,
  CreditCard,
  FileSpreadsheet,
  PackageCheck,
  ShoppingBag,
  Receipt,
  Store,
  Truck,
  ArrowRight,
} from "lucide-react";
import "./Header.css";

const modulesList = [
  {
    name: "Point of Sale",
    href: "/modules/point-of-sale",
    tagline: "Fast billing that keeps working when the internet drops.",
    icon: CreditCard,
  },
  {
    name: "Sales",
    href: "/modules/sales",
    tagline: "Quotation to sales order to invoice, with PDFs your customers can trust.",
    icon: FileSpreadsheet,
  },
  {
    name: "Inventory",
    href: "/modules/inventory",
    tagline: "Stock, batches and expiry for every branch, in real time.",
    icon: PackageCheck,
  },
  {
    name: "Purchasing",
    href: "/modules/purchasing",
    tagline: "Record supplier bills and debit notes, and keep stock in step.",
    icon: ShoppingBag,
  },
  {
    name: "Tax & GST",
    href: "/modules/tax-gst",
    tagline: "Pick the tax level you need today; upgrade when you grow.",
    icon: Receipt,
  },
];

const solutionsList = [
  {
    name: "Retail",
    href: "/solutions/retail",
    description: "Multi-counter billing, offline resilience, and unified branch stock for modern retailers.",
    icon: Store,
  },
  {
    name: "Distribution",
    href: "/solutions/distribution",
    description: "Quotation-to-invoice flows, inter-branch transfers, and B2B purchase tracking.",
    icon: Truck,
  },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [modulesDropdownOpen, setModulesDropdownOpen] = useState(false);
  const [solutionsDropdownOpen, setSolutionsDropdownOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setModulesDropdownOpen(false);
    setSolutionsDropdownOpen(false);
  }, [pathname]);

  return (
    <header className={`site-header ${isScrolled ? "scrolled" : ""}`}>
      <div className="container header-container">
        {/* Brand Logo with Image */}
        <Link to="/" className="header-logo-link">
          <img
            src="/assets/xenedion-logo.png"
            alt="XENedion - Business, Connected."
            className="header-logo-img"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="header-nav">
          <Link to="/" className={`nav-link ${pathname === "/" ? "active" : ""}`}>
            Home
          </Link>

          {/* Modules Mega Menu */}
          <div
            className="nav-dropdown-wrapper"
            onMouseEnter={() => setModulesDropdownOpen(true)}
            onMouseLeave={() => setModulesDropdownOpen(false)}
          >
            <button
              type="button"
              className={`nav-link ${pathname.startsWith("/modules") ? "active" : ""}`}
            >
              <span>Modules</span>
              <ChevronDown size={15} />
            </button>

            {modulesDropdownOpen && (
              <div className="mega-menu">
                <div className="mega-menu-header">
                  <span>Core Live Modules</span>
                  <span style={{ color: "var(--steel-500)", fontWeight: 500 }}>
                    One shared database across branches
                  </span>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                  {modulesList.map((item) => {
                    const Icon = item.icon;
                    const active = pathname === item.href;
                    return (
                      <Link
                        key={item.name}
                        to={item.href}
                        className={`mega-menu-item ${active ? "active" : ""}`}
                      >
                        <div className="mega-menu-icon">
                          <Icon size={18} />
                        </div>
                        <div>
                          <div className="mega-menu-title">{item.name}</div>
                          <div className="mega-menu-desc">{item.tagline}</div>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          <Link
            to="/platform"
            className={`nav-link ${pathname === "/platform" ? "active" : ""}`}
          >
            Platform
          </Link>

          {/* Solutions Dropdown */}
          <div
            className="nav-dropdown-wrapper"
            onMouseEnter={() => setSolutionsDropdownOpen(true)}
            onMouseLeave={() => setSolutionsDropdownOpen(false)}
          >
            <button
              type="button"
              className={`nav-link ${pathname.startsWith("/solutions") ? "active" : ""}`}
            >
              <span>Solutions</span>
              <ChevronDown size={15} />
            </button>

            {solutionsDropdownOpen && (
              <div className="solutions-menu">
                <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                  {solutionsList.map((sol) => {
                    const Icon = sol.icon;
                    const active = pathname === sol.href;
                    return (
                      <Link
                        key={sol.name}
                        to={sol.href}
                        className={`mega-menu-item ${active ? "active" : ""}`}
                      >
                        <div className="mega-menu-icon">
                          <Icon size={18} />
                        </div>
                        <div>
                          <div className="mega-menu-title">{sol.name}</div>
                          <div className="mega-menu-desc">{sol.description}</div>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          <Link
            to="/pricing"
            className={`nav-link ${pathname === "/pricing" ? "active" : ""}`}
          >
            Pricing
          </Link>

          <Link
            to="/about"
            className={`nav-link ${pathname === "/about" ? "active" : ""}`}
          >
            About
          </Link>
        </nav>

        {/* Desktop CTA Actions */}
        <div className="header-actions">
          <Link
            to="/contact/talk-to-sales"
            style={{ fontSize: "13px", fontWeight: "600", color: "var(--steel-700)", padding: "8px 12px" }}
          >
            Talk to Sales
          </Link>
          <Link to="/contact/request-a-demo" className="btn-primary" style={{ padding: "10px 20px" }}>
            <span>Request a Demo</span>
            <ArrowRight size={14} />
          </Link>
        </div>

        {/* Mobile Toggle Button */}
        <button
          type="button"
          className="mobile-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Navigation"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <div className={`mobile-drawer ${mobileMenuOpen ? "open" : ""}`}>
        <Link to="/" className="nav-link">Home</Link>
        <div style={{ padding: "8px 0", borderTop: "1px solid var(--border-light)" }}>
          <div style={{ fontSize: "11px", fontWeight: 700, color: "var(--gold-700)", textTransform: "uppercase", marginBottom: "6px" }}>
            Modules
          </div>
          {modulesList.map((m) => (
            <Link key={m.name} to={m.href} className="nav-link" style={{ paddingLeft: "20px" }}>
              {m.name}
            </Link>
          ))}
        </div>
        <Link to="/platform" className="nav-link">Platform</Link>
        <div style={{ padding: "8px 0", borderTop: "1px solid var(--border-light)" }}>
          <div style={{ fontSize: "11px", fontWeight: 700, color: "var(--gold-700)", textTransform: "uppercase", marginBottom: "6px" }}>
            Solutions
          </div>
          {solutionsList.map((s) => (
            <Link key={s.name} to={s.href} className="nav-link" style={{ paddingLeft: "20px" }}>
              {s.name}
            </Link>
          ))}
        </div>
        <Link to="/pricing" className="nav-link">Pricing</Link>
        <Link to="/about" className="nav-link">About</Link>
        <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginTop: "12px" }}>
          <Link to="/contact/request-a-demo" className="btn-primary" style={{ textAlign: "center" }}>
            Request a Demo
          </Link>
          <Link to="/contact/talk-to-sales" className="btn-secondary" style={{ textAlign: "center" }}>
            Talk to Sales
          </Link>
        </div>
      </div>
    </header>
  );
}

