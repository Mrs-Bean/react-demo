// import React, { Component } from 'react';
// import {BrowserRouter as Router,Route,Link} from 'react-router-dom'

// function Index() {
//   return <h2>XLP</h2>
// }
// function List() {
//   return <h2>list-page</h2>
// }

// function AppRouter() {
//   return (
//     <Router>
//       <ul>
//           <li> <Link to="/">首页</Link> </li>
//           <li><Link to="/list/">列表</Link> </li>
//       </ul>
//       <Route path="/" exact component={Index} />
//       <Route path="/list/" component={List} />
//     </Router>
//   )
// }

// export default AppRouter;

import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Index from './Pages/Index'
import List from './Pages/List'
import Home from './Pages/Home'

function AppRouter() {
  return (
    <Router>
        <ul>
            <li> <Link to="/">首页</Link> </li>
            <li><Link to="/list/123">列表</Link> </li>
        </ul>
        {/* exact 精确匹配 */}
        <Route path="/" exact component={Index} /> 
        <Route path="/list/:id" component={List} />
        <Route path="/home/" component={Home} />
    </Router>
  );
}

export default AppRouter;