import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home.jsx';
import Articles from './Articles.jsx';
import Article from './Article.jsx';
import Purchase1 from './purchase/step1.jsx';
import Refinance1 from './refinance/step1.jsx';

const Main = () => (
  <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/articles" component={Articles}/>
      <Route exact path="/articles/:id" component={Article}/>
      <Route exact path="/purchase/step1" component={Purchase1}/>
      <Route exact path="/refinance/step1" component={Refinance1}/>
  </Switch>
);

export default Main;
