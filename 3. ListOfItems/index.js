import React from 'react';
import ReactDOM from 'react-dom';



function Header(props){
    const newlist=props.mylist;
    const r1=newlist.map((each)=>{return <li>{each}</li>});
    return <ul>{r1}</ul>
}
const newlist=[1,2,3,4,5,6,"HI",'A',"Vignesha"];
ReactDOM.render(<Header mylist={newlist}/>,document.getElementById('root'));

