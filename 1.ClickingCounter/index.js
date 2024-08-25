import React from 'react';
import ReactDOM from 'react-dom';

class Header extends React.Component{
    constructor(){
        super();
        this.state={count:0};
    }
    render(){
        return <>
            <button onClick={this.Counter}>Clicked {this.state.count} times </button>
            </>
    }
    Counter=()=>{
        let c=this.state.count;
        this.setState({count:c+1})
    }
}
ReactDOM.render(<Header/>,document.getElementById('root'));