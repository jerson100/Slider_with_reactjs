import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Slider from "./components/Slider/Slider";

const initialState = [
  {
    title: "Ejercicios...",
    description: "♥♥",
    image: "img/yop2.jpg",
    date: new Date(),
  },
  {
    title: "In my house",
    description: "Antes de comenzar a estudiar",
    image: "img/yop3.jpg",
    date: new Date(),
  },
  {
    title: "Souma",
    description: "JOJOJO...",
    image: "img/yop4.jpg",
    date: new Date(),
  },
  {
    title: ":)",
    description: ":)",
    image: "img/yop5.jpg",
    date: new Date(),
  },
  {
    title: "♥_♥",
    description: "♥",
    image: "img/yop6.jpg",
    date: new Date(),
  },
  {
    title: "Claudio",
    description: "Aquí con mi sobrino :) ♥",
    image: "img/yop20.jpg",
    date: new Date(),
  },
];

function App() {
  //   const [state, setstate] = useState(initialState);
  return (
    <div className="app">
      <div className="app__content">
        <h1 className="app__title">Slider with reactjs</h1>
        <Slider list={initialState} />
      </div>
      <img src={logo} className="app__logo" alt="logo" />
    </div>
  );
}

export default App;
