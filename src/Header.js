import React from 'react';

const Header = () => {
  return (
    <header style={headerStyle}>
      <div style={logoStyle}>unfluke</div>
      <nav style={navStyle}>
        <a href="#">LeaderBoard</a>
        <a href="#">Historical Trading</a>
        <a href="#">Historical Chart</a>
        <a href="#">Scanners</a>
        <a href="#">Alerts</a>
        <a href="#">Basic Backtest</a>
        <a href="#">Advanced Backtest</a>
        <a href="#">Pricing</a>
        <a href="#">My Earnings</a>
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
