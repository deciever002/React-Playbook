import React from "react";
import Calculator from "./Calculator";
import "./styles.css";

class App extends React.Component {
  render() {
    return (
      <div className="calculator">
        <Calculator />
      </div>
    );
  }
}

export default App;
