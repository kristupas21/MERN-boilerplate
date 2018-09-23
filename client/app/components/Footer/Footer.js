import React from 'react';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="app-footer">
      <p>All rights reserved. &copy; Company name, {year}.</p>
    </footer>
  );
}

export default Footer;
