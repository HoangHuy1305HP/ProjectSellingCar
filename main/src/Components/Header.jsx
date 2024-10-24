import React from 'react';
import '../Css/Header.css';

function Header({ children }) {
  return (
    <div className="header">
      {children}
    </div>
  );
}

export default Header;