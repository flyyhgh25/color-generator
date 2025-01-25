import React, { useState } from "react";

const Form = ({addColor}) => {
  const [color, setColor] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault()
    addColor(color)
    console.log(`The color code : ${color}`)
  };
  return (
    <section className="container" id="form-picker">
      <h2>Form Color generator</h2>
      <form onSubmit={handleSubmit} className="color-form">
        <input 
        type="color" 
        value={color} 
        onChange={(e) => setColor(e.target.value)} />
        <input
          type="text"
          value={color}
          onChange={(e) => {
            setColor(e.target.value);
          }}
          placeholder="#f15025"
        />
        <button className="btn" type="submit" style={{background: color}}>
          Submit
        </button>
      </form>
    </section>
  );
};

export default Form;
