import React from 'react';
import {Route, IndexRoute} from 'react-router';

import App from './containers/App';
import Home from './containers/Home';
import Dashboard from './containers/Dashboard';
import Settings from './containers/Settings';
import Images from './components/images/Images';

export default (
  <Route path="/">
    <IndexRoute component={Home} />
    <Route path="dashboard" component={Dashboard}>
      <IndexRoute component={Images} />
      <Route path="images" component={Images} />
    </Route>
    <Route path="pipe" component={Dashboard}>
      <Route path="github" component={Images} />
      <Route path="bitbucket" component={Images} />
      <Route path="gitlab" component={Images} />
    </Route>
    <Route path="settings" component={Dashboard}>
      <IndexRoute component={Images} />
    </Route>
  </Route>
);
