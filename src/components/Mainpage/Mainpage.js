/** Hash Router Version.
 * @author Prakash S
 * @copyright 2017 ServiceMax from GE Digital.
 *Created by prakash on 3/7/18.
 */
import React from 'react';
import {
  HashRouter,
  Route,
  Switch,
} from 'react-router-dom';
import HomePage from '../../components/HomePage';
import CovidAppLayout from '../../components/CovidAppLayout';
import Registration from "../../components/Registration";
import Login from "../../components/Login";
import App from "../../components/App";
const Mainpage = (designerProps) => (
  <HashRouter>
  <App>
  <Switch>
    <Route
      exact
      path="/"
      component={HomePage} />
      }
    />
    <Route
      exact
      path="/"
      component={CovidAppLayout} />
      }
    />
    <Route
      exact
      path="/Registration"
      component={Registration} />
      }
    />
    <Route
      exact
      path="/Login"
      component={Login} />
      }
    />
  </Switch>
  </App>
  </HashRouter>
);

export default Mainpage;
