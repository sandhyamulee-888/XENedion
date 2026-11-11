import React, { useState } from 'react';
import { Wifi, WifiOff, RefreshCw } from 'lucide-react';
import './ProductMockup.css';

export default function ProductMockup() {
  const [networkStatus, setNetworkStatus] = useState('online');

  const toggleNetwork = () => {
    if (networkStatus === 'online') {
      setNetworkStatus('offline');
    } else if (networkStatus === 'offline') {
      setNetworkStatus('syncing');
      setTimeout(() => {
        setNetworkStatus('online');
      }, 1500);
    }
  };

  return (
    <div className="hero-ecosystem-spacer">
      {/* Interactive Telemetry Pill floating in the upper right of the background ecosystem */}
      <div className="ecosystem-telemetry-row">
        <button
          type="button"
          className={`overlay-status-pill ${networkStatus}`}
          onClick={toggleNetwork}
          title="Click to test offline resilience simulation"
        >
          {networkStatus === 'online' && (
            <>
              <span className="live-pulse-dot" />
              <Wifi size={12} color="#059669" />
              <span>Cloud Live Sync &bull; 14 Branches Online</span>
            </>
          )}
          {networkStatus === 'syncing' && (
            <>
              <RefreshCw size={12} color="#D97706" className="spin-icon" />
              <span>Syncing offline bills...</span>
            </>
          )}
          {networkStatus === 'offline' && (
            <>
              <WifiOff size={12} color="#DC2626" />
              <span>Offline Ready (Saving locally) &bull; Click to Sync</span>
            </>
          )}
        </button>
      </div>

      {/* Transparent spacer keeping the right column open so the background ecosystem shines unobstructed */}
      <div className="hero-ecosystem-stage" />
    </div>
  );
}
