import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import ListKey from './complexrun';
import Simple from './simplerun';
import Home from './home';
import logo from '../home.svg';

const Header=()=>{

return(<div>
<div className="container-fluid">
<Router>
<nav className="navbar navbar bg-dark text-white">
<img src={logo} width={80}/>
<ul className="nav w-auto px-1">
<li className="nav-item px-2  border-right"><Link className="text-white" to="/">Home</Link></li>
<li className="nav-item px-2 border-right"><Link className="text-white" to="/complex">Keyword + List of proxies</Link></li>
<li className="nav-item px-2  border-right"><Link className="text-white" to="/simple">Simple post</Link></li>
</ul>
</nav>
<br/><br/>
<Switch>
<Route exact path="/" component={Home}/>
<Route path="/complex" component={ListKey} />
<Route path="/simple" component={Simple} />
</Switch>
</Router>
</div>
  </div>)

}

export default Header;