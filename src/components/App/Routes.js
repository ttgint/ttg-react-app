import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Dashboard from './Dashboard';
import MainStateProvider from './MainStateProvider';
class Routes extends React.PureComponent {
  render = () => (
    <MainStateProvider>
      <Router>
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/dashboard" component={Dashboard} />                    
        </Switch>
      </Router>
    </MainStateProvider> 
  );
}
export default Routes;
