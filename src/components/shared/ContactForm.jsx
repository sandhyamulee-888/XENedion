import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

export default function ContactForm({
  defaultIntent = "demo",
  title = "Request a Tailored Demo",
  subtitle = "Fill in your details below and our solution architects will prepare a walkthrough on your business requirements.",
}) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    branches: '2-5',
    moduleInterest: defaultIntent === 'sales' ? 'Full Suite' : 'Point of Sale & Inventory',
    message: '',
    botField: '', // Honeypot
  });

  const [status, setStatus] = useState('idle'); // 'idle' | 'loading' | 'success' | 'error'
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');

    // Honeypot check
    if (formData.botField) {
      setStatus('success');
      return;
    }

    if (!formData.name || !formData.email || !formData.phone) {
      setErrorMessage('Please fill in all required fields (Name, Email, Phone).');
      return;
    }

    // Email basic regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setErrorMessage('Please enter a valid business email address.');
      return;
    }

    setStatus('loading');

    // Simulate API call and logging
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // TODO: Connect to production email/CRM provider here
      // e.g. await fetch('/api/contact', { method: 'POST', body: JSON.stringify(formData) })
      // or integrate directly with Sendgrid, Resend, or HubSpot CRM webhook.
      console.log("[XENedion Lead Captured]:", formData);

      setStatus('success');
    } catch (err) {
      setStatus('error');
      setErrorMessage('An unexpected error occurred. Please try again or email contact@xenedion.com.');
    }
  };

  return (
    <div className="card-white" style={{ padding: '40px', maxWidth: '640px', margin: '0 auto', borderColor: 'var(--border-gold)' }}>
      {status === 'success' ? (
        <div style={{ textAlign: 'center', padding: '30px 10px' }}>
          <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: '#D1FAE5', color: '#059669', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
            <CheckCircle2 size={36} />
          </div>
          <h3 style={{ fontSize: '24px', fontWeight: 800, color: 'var(--steel-900)', marginBottom: '10px' }}>
            Thank you! Your request has been received.
          </h3>
          <p style={{ fontSize: '15px', color: 'var(--steel-600)', lineHeight: '1.6', marginBottom: '24px' }}>
            Our solutions team will review your branch requirements and get back to you within 1 business day.
          </p>
          <button
            type="button"
            onClick={() => {
              setStatus('idle');
              setFormData({
                name: '',
                email: '',
                phone: '',
                company: '',
                branches: '2-5',
                moduleInterest: 'Point of Sale & Inventory',
                message: '',
                botField: '',
              });
            }}
            className="btn btn-secondary"
          >
            Submit Another Request
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate>
          <div style={{ marginBottom: '28px', textAlign: 'center' }}>
            <h2 style={{ fontSize: '28px', fontWeight: 800, color: 'var(--steel-900)', marginBottom: '8px' }}>
              {title}
            </h2>
            <p style={{ fontSize: '14px', color: 'var(--steel-600)', lineHeight: '1.5' }}>
              {subtitle}
            </p>
          </div>

          {errorMessage && (
            <div style={{ padding: '12px 16px', borderRadius: '10px', background: '#FEF2F2', border: '1px solid #FECACA', color: '#991B1B', fontSize: '13px', display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '20px' }}>
              <AlertCircle size={16} />
              <span>{errorMessage}</span>
            </div>
          )}

          {/* Honeypot field (hidden from users) */}
          <div style={{ display: 'none' }}>
            <input
              type="text"
              name="botField"
              value={formData.botField}
              onChange={handleChange}
              tabIndex={-1}
              autoComplete="off"
            />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
            <div>
              <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: 'var(--steel-700)', marginBottom: '6px' }}>
                Full Name *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Rajesh Kumar"
                className="form-input"
                required
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: 'var(--steel-700)', marginBottom: '6px' }}>
                Business Email *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="rajesh@company.com"
                className="form-input"
                required
              />
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
            <div>
              <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: 'var(--steel-700)', marginBottom: '6px' }}>
                Phone Number *
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+91 98765 43210"
                className="form-input"
                required
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: 'var(--steel-700)', marginBottom: '6px' }}>
                Company Name
              </label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Acme Retail Ltd"
                className="form-input"
              />
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
            <div>
              <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: 'var(--steel-700)', marginBottom: '6px' }}>
                Number of Branches
              </label>
              <select
                name="branches"
                value={formData.branches}
                onChange={handleChange}
                className="form-select"
              >
                <option value="1">1 branch (Single store)</option>
                <option value="2-5">2 to 5 branches</option>
                <option value="6-20">6 to 20 branches</option>
                <option value="21-50">21 to 50 branches</option>
              </select>
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: 'var(--steel-700)', marginBottom: '6px' }}>
                Primary Module Focus
              </label>
              <select
                name="moduleInterest"
                value={formData.moduleInterest}
                onChange={handleChange}
                className="form-select"
              >
                <option value="Point of Sale & Inventory">Point of Sale &amp; Inventory</option>
                <option value="Sales & Invoicing">Sales &amp; Invoicing</option>
                <option value="Purchasing & Vendors">Purchasing &amp; Vendors</option>
                <option value="Tax & GST Compliance">Tax &amp; GST Compliance</option>
                <option value="Full Suite">Full Suite (All Modules)</option>
              </select>
            </div>
          </div>

          <div style={{ marginBottom: '24px' }}>
            <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: 'var(--steel-700)', marginBottom: '6px' }}>
              How can we help? (Optional)
            </label>
            <textarea
              name="message"
              rows={3}
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us about your current challenges, branches, or timing..."
              className="form-textarea"
            />
          </div>

          <button
            type="submit"
            disabled={status === 'loading'}
            className="btn btn-primary"
            style={{ width: '100%', padding: '14px', fontSize: '14px', justifyContent: 'center' }}
          >
            {status === 'loading' ? (
              <>
                <Loader2 size={18} style={{ animation: 'spin 1s linear infinite' }} />
                <span>Sending Request...</span>
              </>
            ) : (
              <>
                <span>Submit Request</span>
                <Send size={16} />
              </>
            )}
          </button>

          <p style={{ fontSize: '12px', color: 'var(--steel-500)', textAlign: 'center', marginTop: '14px' }}>
            We respect your privacy. No spam. You'll hear from our team within 1 business day.
          </p>
        </form>
      )}
    </div>
  );
}

