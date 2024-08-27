import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Link,NavLink, Routes} from 'react-router-dom';

import Home from './home';
import About from './about';
import Contact from './contact';
import Notfounds from './notFound';

class Routing extends React.Component{
    render(){
        return(<>
            <Router> <h1>React Router</h1>
                    <ul> <li> <NavLink to ="/h" exact activeStyle={{color:"red"}}>Home</NavLink></li>
                        <li> <NavLink to ="/a" exact activeStyle={{color:"red"}}>About</NavLink></li>
                        <li> <NavLink to ="/c" exact activeStyle={{color:"red"}}>Contact</NavLink></li>
                    </ul>
                    <Routes>
                        <Route exact path="/h" element={<Home />}/>
                        <Route exact path="/a" element={<About />}/>
                        <Route exact path="/c" element={<Contact />}/>
                        <Route path="*" element={<Notfounds/>}/>
                    </Routes>
            </Router>
        </>);
    }
}
ReactDOM.render(<Routing/>,document.getElementById('root'));

