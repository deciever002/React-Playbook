import React from "react";

class Calculator extends React.Component {
  constructor() {
    super();
    this.state = {
      number: 0
    };
  }

  addNumber = () => {
    this.setState((prevState) => {
      return {
        number: prevState.number + 2
      };
    });
  };

  square = () => {
    this.setState((prevState) => {
      return {
        number: prevState.number * prevState.number
      };
    });
  };

  double = () => {
    this.setState((prevState) => {
      return {
        number: prevState.number * 2
      };
    });
  };

  divide = () => {
    this.setState((prevState) => {
      return {
        number: prevState.number / 2
      };
    });
  };

  subtract = () => {
    this.setState((prevState) => {
      return {
        number: prevState.number - 2
      };
    });
  };

  render() {
    const { number } = this.state;
    return (
      <div className="container">
        <h1 style={{ textAlign: "center" }}>{number}</h1>
        <div style={styles.operations}>
          <button style={styles.button} onClick={this.addNumber}>
            Add 2!
          </button>
          <button style={styles.button} onClick={this.square}>
            {" "}
            Square{" "}
          </button>
          <button style={styles.button} onClick={this.double}>
            {" "}
            Double{" "}
          </button>
          <button style={styles.button} onClick={this.divide}>
            {" "}
            Divide by 2!{" "}
          </button>
          <button style={styles.button} onClick={this.subtract}>
            {" "}
            Subtract 2{" "}
          </button>
        </div>
      </div>
    );
  }
}

const styles = {
  button: {
    margin: 4
  },
  operations: {
    display: "flex",
    justifyContent: "center"
  }
};

export default Calculator;
