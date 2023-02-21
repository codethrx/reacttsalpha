import React from "react";
import Demo from "./props/Demo";
import Color from "./Color";
import { Provider } from "./libs/State";
function App() {
  //props
  const [name, setName] = React.useState("Mario");
  const list = [
    { color: "orange", name: "Charliezar" },
    { color: "yellow", name: "Pikachu" },
  ];
  const changeName = () =>
    setName((prevName) => (prevName === "Mario" ? "Luigi" : "Mario"));
  const propsDemo = (
    <Demo
      name={name}
      options={"A"}
      age={22}
      changeName={changeName}
      list={list}
      style={{ color: "#23d997" }}
    >
      <h1>Childrenzz</h1>
      <h1>1</h1>
    </Demo>
  );
  return (
    <Provider>
      {/* {propsDemo} */}
      <Color />
    </Provider>
  );
}

export default App;
