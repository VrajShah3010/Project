import React from 'react';

const Header = () => {
  return (
    <header style={headerStyle}>
      <div style={logoStyle}>unfluke</div>
      <nav style={navStyle}>
        <h4>LeaderBoard</h4>
        <h4>Historical Trading</h4>
        <h4>Historical Chart</h4>
        <h4>Scanners</h4>
        <h4>Alerts</h4>
        <h4>Basic Backtest</h4>
        <h4>Advanced Backtest</h4>
        <h4>Pricing</h4>
        <h4>My Earnings</h4>
      </nav>
      <div style={profileStyle}>Profile Icon</div>
    </header>
  );
}

const headerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '10px 20px',
  background: '#f8f9fa',
  borderBottom: '1px solid #e9ecef'
};

const logoStyle = {
  fontSize: '24px',
  fontWeight: 'bold'
};

const navStyle = {
  display: 'flex',
  gap: '15px'
};

const profileStyle = {
  fontSize: '18px'
};

export default Header;
