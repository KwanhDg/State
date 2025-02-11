import React, { useState } from 'react';
import './App.css'; // Import the CSS file

function App() {
  const [bgColor, setBgColor] = useState('white');

  const handleColorChange = (color) => {
    setBgColor(color);
  };

  return (
    <div className="container" style={{ backgroundColor: bgColor }}>
      <button className="color-button green" onClick={() => handleColorChange('green')}>GREEN</button>
      <button className="color-button blue" onClick={() => handleColorChange('blue')}>BLUE</button>
      <button className="color-button brown" onClick={() => handleColorChange('brown')}>BROWN</button>
      <button className="color-button yellow" onClick={() => handleColorChange('yellow')}>YELLOW</button>
      <button className="color-button red" onClick={() => handleColorChange('red')}>RED</button>
      <button className="color-button black" onClick={() => handleColorChange('black')}>BLACK</button>
    </div>
  );
}

export default App;
