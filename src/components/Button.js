import React from 'react';

const Button = ({ onClick, text }) => {
  return (
    <button
      onClick={onClick}
      className="w-full p-3 m-3 text-white bg-customGreen rounded-lg hover:bg-[#95b477] transition-colors"
    >
      {text}
    </button>
  );
};

export default Button;
