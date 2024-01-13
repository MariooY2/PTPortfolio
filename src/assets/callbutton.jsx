import React from 'react';


const CallButton = () => {
  const handleClick = () => {
    window.location.href = 'tel:+41 78 309 83 73'; // Replace with your phone number
  };

  return (
    <button onClick={handleClick} style={callButtonStyle}>
      <img src="Gallery/phonecall.png" alt="Call us" style={iconStyle} />
    </button>
  );
};

const callButtonStyle = {
  position: 'fixed',
  bottom: '20px',
  right: '20px',
  zIndex: 1000,
  width: '60px',
  height: '60px',
  borderRadius: '50%',
  backgroundColor: 'red',
  border: 'none',
  boxShadow: '2px 2px 5px rgba(0,0,0,0.3)',
  cursor: 'pointer',
};

const iconStyle = {
  width: '100%',
  height: 'auto',
};

export default CallButton;
