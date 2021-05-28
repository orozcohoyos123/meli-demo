import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Layout from './Layout';
import Home from '../pages/Home';
import ItemsResult from '../pages/ItemsResult';

import "./styles/App.scss";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/items" component={ItemsResult} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
/* 

          <Route exact path="/" component={Home} />
          <Route exact path="/badges" component={Badges} />
          <Route exact path="/badges/new" component={BagdeNews} />
          <Route exact path="/badges/:badgeId/edit" component={BadgeEdit} />
          <Route exact path="/badges/:badgeId" component={BadgeDetails} />
          <Route component={NotFound} />

  );
}
*/
