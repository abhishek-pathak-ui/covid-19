import React from 'react';
import {
  HashRouter,
  Route,
  Switch,
} from 'react-router-dom';
import HomePage from '../../components/HomePage';
import Registration from "../../components/Registration";
import Login from "../../components/Login";
import App from "../../components/App";
import ModernMedicne from "../../components/ModernMedicne";
import AyurvedicMedicine from "../../components/AyurvedicMedicine";
import StructureInteraction from "../../components/StructureInteraction";
import GeneInteraction from "../../components/GeneInteraction";

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
    <Route
          exact
          path="/ModernMedicne"
          component={ModernMedicne} />
        }
      />
        <Route
          exact
          path="/AyurvedicMedicine"
          component={AyurvedicMedicine} />
        }
      />
        <Route
          exact
          path="/StructureInteraction"
          component={StructureInteraction} />
        }
      />
        <Route
          exact
          path="/GeneInteraction"
          component={GeneInteraction} />
        }
      />
  </Switch>
  </App>
  </HashRouter>
);

export default Mainpage;
