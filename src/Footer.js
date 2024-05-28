import React from 'react';

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <p>© 2024 Unfluke. All rights reserved.</p>
    </footer>
  );
}

const footerStyle = {
  textAlign: 'center',
  padding: '10px 0',
  background: '#f8f9fa',
  borderTop: '1px solid #e9ecef',
  marginTop: '20px'
};

export default Footer;
