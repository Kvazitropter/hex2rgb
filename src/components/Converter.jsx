import React, { useState } from 'react';
import hexToRGB from '../helpers/hexToRGB.js';

const Converter = () => {
  const [inputValue, setInputValue] = useState('');
  const [backgroundColor, setBackgroundColor] = useState('#ffffff');
  const [outputValue, setOutputValue] = useState('rgb(255, 255, 255)');

  const handleChange = ({ target }) => {
    const { value } = target;
    setInputValue(value);

    if (value.length === 7) {
      if (value.match(/^#([a-f]|\d){6}$/i)) {
        setOutputValue(hexToRGB(value));
        setBackgroundColor(value);
      } else {
        setOutputValue('Error');
        setBackgroundColor('red');
      }
    }
  };

  return (
    <div className="container" style={{ backgroundColor }}>
      <div className="converter">
        <form>
          <input id="hex" value={inputValue} onChange={handleChange} placeholder="#ffffff" />
        </form>
        <div className="rgb">{outputValue}</div>
      </div>
    </div>
  );
};

export default Converter;
