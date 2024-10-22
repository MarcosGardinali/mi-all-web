import React from 'react';

const Input = ({ type, placeholder, value, onChange }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="w-full p-3 m-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-customGreen"
    />
  );
};

export default Input;
