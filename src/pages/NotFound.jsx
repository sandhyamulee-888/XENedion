import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Home, Compass } from 'lucide-react';

export default function NotFound() {
  return (
    <div style={{ minHeight: '70vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '60px 20px', backgroundColor: '#FFFFFF' }}>
      <div className="container container-narrow" style={{ textAlign: 'center' }}>
        <div className="badge-gold" style={{ marginBottom: '20px' }}>
          <span>Error 404 &bull; Page Not Found</span>
        </div>

        <h1 style={{ fontSize: '48px', fontWeight: 800, color: 'var(--steel-900)', letterSpacing: '-0.02em', marginBottom: '16px' }}>
          This page is disconnected.
        </h1>

        <p style={{ fontSize: '16px', color: 'var(--steel-600)', maxWidth: '540px', margin: '0 auto 32px', lineHeight: '1.6' }}>
          The link you followed may be broken or the page has been moved. Let's get you back to the connected core.
        </p>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '14px', flexWrap: 'wrap' }}>
          <Link to="/" className="btn btn-primary">
            <Home size={16} />
            <span>Return Home</span>
          </Link>
          <Link to="/modules/point-of-sale" className="btn btn-secondary">
            <Compass size={16} />
            <span>Explore Modules</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

