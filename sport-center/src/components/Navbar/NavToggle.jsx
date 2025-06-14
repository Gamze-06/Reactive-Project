import React from 'react';

function NavToggle({ onClick }) {
  return (
    <div className="menu-toggle" onClick={onClick}>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
}

export default NavToggle;
