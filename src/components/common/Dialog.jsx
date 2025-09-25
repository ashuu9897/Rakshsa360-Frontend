import React from 'react';

const Dialog = ({ open, onClose, title, children, actions }) => {
  if (!open) return null;
  return (
    <div className="dialog-backdrop">
      <div className="dialog">
        {title && <div className="dialog-title">{title}</div>}
        <div className="dialog-content">{children}</div>
        {actions && <div className="dialog-actions">{actions}</div>}
        <button className="dialog-close" onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default Dialog;
