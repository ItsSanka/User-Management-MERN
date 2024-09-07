import React from 'react';

function Footer() {
  const footerStyle = {
    backgroundColor: '#343a40',
    color: 'white',
    padding: '10px 0',
    textAlign: 'center',
    width: '100%',
  };

  return (
    <footer style={footerStyle}>
      <p>&copy; 2024 USCS Project. All Rights Reserved.</p>
      <p>
        <a href="/#" style={{ color: 'lightgray', textDecoration: 'none' }}>Privacy Policy</a> | 
        <a href="/#" style={{ color: 'lightgray', textDecoration: 'none' }}> Terms of Service</a>
      </p>
    </footer>
  );
}

export default Footer;
