import React from 'react';
import ReactDOM from 'react-dom';

class Todo extends React.Component{
    constructor(){
        super();
        this.state={
            notes:"",
            count:0,
            notesList:[]
        }
    }
    userValue=(e)=>{
        let v=e.target.value;
        this.setState({notes:v});
    }
    addItem=(e)=>{
        e.preventDefault();
        if(this.state.notes.trim()){
            const{notesList,notes,count}=this.state;
            this.setState({
                notesList:[...notesList,notes],
                notes:"",
                count:count+1,
            });
        }
    }
    deleteItem=(index)=>{
        const{notesList,notes,count}=this.state;
        notesList.splice(index,1)
        this.setState({
            notesList:[...notesList],
            count:count-1,
        });
    }
    render(){
        return(
            <div>
                <form onSubmit={this.addItem}>
                    <h1>Enter the Notes:</h1>
                    <input type="text" name="notes" value={this.state.notes} onChange={this.userValue}/>
                    <br/><br/>
                    <input type="submit" value="Add"/>
                    <br/>
                </form>
                {this.state.notesList.map((note,index)=>(
                    <div key={index} style={ { border:'1px solid black', margin:'10px 0', padding:'10px'}}>
                        <p>{note}</p>
                        <button onClick={()=>{this.deleteItem(index)}}> Delete</button>
                     </div>
                ))}
                </div>
            )
        }
    }
ReactDOM.render(<Todo/>,document.getElementById('root'));