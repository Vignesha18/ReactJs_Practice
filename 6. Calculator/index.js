import React from 'react';
import ReactDOM from 'react-dom';

class Calculator extends React.Component {
  constructor() {
    super();
    this.state = {
      input: ''
    };
  }

  // Update input field
  handleClick = (value) => {
    this.setState({ input: this.state.input + value });
  };

  // Compute the result
  handleEqual = () => {
    try {
      this.setState({ input: eval(this.state.input).toString() });
    } catch (err) {
      this.setState({ input: 'Error' });
    }
  };

     handleBackspace = () => {
        this.setState({ input: this.state.input.slice(0, -1) });
      };

  // Clear the input field
  handleClear = () => {
    this.setState({ input: '' });
  };

  render() {
    return (
      <div className="calculator">
        <div className="display">{this.state.input || '0'}</div>
        <div className="buttons">
          <button onClick={() => this.handleClick('1')}>1</button>
          <button onClick={() => this.handleClick('2')}>2</button>
          <button onClick={() => this.handleClick('3')}>3</button>
          <button onClick={() => this.handleClick('+')}>+</button><br/>
          <button onClick={() => this.handleClick('4')}>4</button>
          <button onClick={() => this.handleClick('5')}>5</button>
          <button onClick={() => this.handleClick('6')}>6</button>
          <button onClick={() => this.handleClick('-')}>-</button><br/>
          <button onClick={() => this.handleClick('7')}>7</button>
          <button onClick={() => this.handleClick('8')}>8</button>
          <button onClick={() => this.handleClick('9')}>9</button>
          <button onClick={() => this.handleClick('*')}>*</button><br/>
          <button onClick={() => this.handleClick('0')}>0</button>
          <button onClick={this.handleClear}>C</button>
          <button onClick={this.handleEqual}>=</button>
          <button onClick={() => this.handleClick('/')}>/</button>
          <button onClick={this.handleBackspace}>←</button>
        </div>
      </div>
    );
  }
}
ReactDOM.render(<Calculator/>,document.getElementById('root'));
