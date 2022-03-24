import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Router , Redirect,HashRouter } from "react-router-dom";
import { Provider } from "react-redux";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "assets/css/demo.css";
import storedashboard from "./store";
import AuthLayout from "layouts/Auth.js";
import AdminLayout from "layouts/Admin.js";
import "assets/scss/light-bootstrap-dashboard-pro-react.scss?v=2.0.0";
import { createBrowserHistory } from "history";
const store = storedashboard();
const hist = createBrowserHistory();

/*ReactDOM.render(

  <BrowserRouter>
    <Switch>
      <Route path="/auth" render={(props) => <AuthLayout {...props} />} />
      <Route path="/admin" render={(props) => <AdminLayout {...props} />} />
      <Redirect from="/" to="/admin/dashboard" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);*/

ReactDOM.render(
  <Provider store={store}>
    <Router history={hist}>
      <Route path="/" component={AuthLayout} />
    </Router>
  </Provider>,

  document.getElementById("root")
);

