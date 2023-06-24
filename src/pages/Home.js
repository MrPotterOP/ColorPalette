import React, { useState } from "react";

const Home = () => {
  const [selectedColor, setSelectedColor] = useState({});

  const colors = [
    {
      color: "Blushing Peach",
      hex: "#FFC4B3",
      rgb: "(255, 196, 179)",
    },
    {
      color: "Minty Dream",
      hex: "#A4FFC6",
      rgb: "(164, 255, 198)",
    },
    {
      color: "Sunny Sorbet",
      hex: "#FFEA6A",
      rgb: "(255, 234, 106)",
    },
    {
      color: "Cotton Candy",
      hex: "#FF9BCD",
      rgb: "(255, 155, 205)",
    },
    {
      color: "Aqua Splash",
      hex: "#50E3C2",
      rgb: "(80, 227, 194)",
    },
    {
      color: "Berry Burst",
      hex: "#FF52A8",
      rgb: "(255, 82, 168)",
    },
    {
      color: "Lavender Fields",
      hex: "#CDB2FF",
      rgb: "(205, 178, 255)",
    },
    {
      color: "Buttercream Delight",
      hex: "#FFEC9C",
      rgb: "(255, 236, 156)",
    },
  ];

  const handleColorClick = (e) => {
    const index = e.currentTarget.dataset.index;
    const clickedColor = colors[index];

    if (selectedColor.color === clickedColor.color) {
      setSelectedColor({});
    } else {
      setSelectedColor(clickedColor);
    }
  };

  const Color = ({ name, hex, rgb, index }) => {
    return (
      <div className="color" data-index={index} onClick={handleColorClick}>
        <div className="color-box" style={{ backgroundColor: hex }}></div>
        <h2>{name}</h2>
        <p>HEX: {hex}</p>
        <p>RGB: {rgb}</p>
      </div>
    );
  };

  return (
    <section id="home">
      <h1>ColorPalette</h1>
      <p className="sub-heading">
        {selectedColor.color ? `${selectedColor.color} Color Selected` : "No Color Selected"}
      </p>

      <div className="colors" style={{ backgroundColor: selectedColor.hex }}>
        {colors.map((color, index) => (
          <Color key={index} {...color} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Home;


