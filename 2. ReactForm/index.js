import React from 'react';
import ReactDOM from 'react-dom';

class Header extends React.Component{
    constructor(){
        super();
        this.state={name:"",age:null,err_msg:""};
    }
    userValue=(event)=>{
        let n=event.target.name;
        let v=event.target.value;
        let err="";
        if(n==="age"){
            if(v!=="" && !Number(v)){
                err=<strong>Invalid Value</strong>
            }
        }
        this.setState({err_msg:err});
        this.setState({[n]:v})
    }
    formSubmit=(event)=>{
        event.preventDefault();
        alert("Hi "+this.state.name);
    }
    render(){
        return(
            <form onSubmit={this.formSubmit}>
                <h1>Hi {this.state.name}</h1>
                <h1>Your Age is {this.state.age}</h1>
                Enter Your Name: <input type="text" name="name" onChange={this.userValue}/><br/><br/>
                Enter Your Age: <input type="text" name="age" onChange={this.userValue}/><br/><br/>
                {this.state.err_msg}<br/><br/>
                <input type="submit"/>
            </form>
        );
    }
}
ReactDOM.render(<Header/>,document.getElementById('root'));

