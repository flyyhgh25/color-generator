import { useState } from "react";
import "./App.css";
import Form from "./Form";
import Header from "./Header";
import ColorList from "./ColorList";
import Values from "values.js"; // insall values.js via npm
import { ToastContainer, toast } from "react-toastify";

function App() {
  const [colors, setColors] = useState(new Values("#f15025").all(10));
  console.log(new Values("#f15025").all(10));
  const addColor = (color) => {
    try {
      const newColors = new Values(color).all(10);
      setColors(newColors);
    } catch (error) {
      console.log(error);
      toast.error(error.message)
    }
  };
  return (
    <div className="main">
      <Header />
      <main>
        <Form addColor={addColor}/>
        <ColorList colors={colors} />
        <ToastContainer />
      </main>
    </div>
  );
}

export default App;
