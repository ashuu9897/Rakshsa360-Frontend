import React from 'react';


const baseStyle = {
  padding: '10px 24px',
  background: 'linear-gradient(90deg, #1976d2 0%, #42a5f5 100%)',
  color: '#fff',
  border: 'none',
  borderRadius: '6px',
  fontWeight: 600,
  fontSize: '1rem',
  cursor: 'pointer',
  boxShadow: '0 2px 8px rgba(25, 118, 210, 0.08)',
  transition: 'background 0.2s, box-shadow 0.2s',
  outline: 'none',
  margin: '4px 0',
};

const hoverStyle = {
  background: 'linear-gradient(90deg, #1565c0 0%, #1e88e5 100%)',
  boxShadow: '0 4px 16px rgba(25, 118, 210, 0.15)',
};

const Button = ({ children, onClick, type = 'button', className = '', style = {}, ...props }) => {
  const [hover, setHover] = React.useState(false);
  return (
    <button
      type={type}
      onClick={onClick}
      className={`btn ${className}`}
      style={{ ...baseStyle, ...(hover ? hoverStyle : {}), ...style }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
