const hexToRGB = (hex) => {
  const hexNums = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex).slice(1);
  const [r, g, b] = hexNums.map((hexNum) => parseInt(hexNum, 16));

  return `rgb(${r}, ${g}, ${b})`;
};

export default hexToRGB;
