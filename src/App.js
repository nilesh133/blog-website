import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from 'react-redux';
import HomeMain from "./components/HomeMain";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import "./main.scss";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import Store from './store';
import PrivateRoute from './private/PrivateRoute';
import RouteLinks from './private/RouteLinks';
import NotFound from "./components/NotFound";
import Create from "./components/Create";
import Edit from "./components/Edit";
import EditImage from "./components/EditImage";
import UpdateName from "./components/UpdateName";
import ChangePassword from "./components/ChangePassword";
import About from "./components/About";
import EditAbout from "./components/EditAbout";
import Details from "./components/Details";
import UpdateEmail from "./components/UpdateEmail";
import UpdateUsername from "./components/UpdateUsername";
import UpdateProfession from "./components/UpdateProfession";
import UpdatePhone from "./components/UpdatePhone";
import UpdateAge from "./components/UpdateAge";
import Loader from './components/Loader';
function App() {
  return (
    <Provider store={Store}>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={HomeMain} />
          <Route path="/home" exact component={HomeMain} />
          <Route path="/home/:page" exact component={HomeMain} />
          <Route path="/postview/:id" exact component={Details} />
          <Route path="/homeTesting" exact component={HomeMain} />
          <RouteLinks path="/register" exact component={Register} />
          <RouteLinks path="/login" exact component={Login} />
          <PrivateRoute path="/dashboard/:page?" exact component={Dashboard} />
          <PrivateRoute path="/createpost" exact component={Create} />
          <PrivateRoute path="/editpost/:id" exact component={Edit} />
          <PrivateRoute path="/updateimage/:id" exact component={EditImage} />
          <PrivateRoute path="/updatename" exact component={UpdateName} />
          <PrivateRoute path="/updatepassword" exact component={ChangePassword} />
          <PrivateRoute path="/about" exact component={About} />
          <PrivateRoute path="/updateabout" exact component={EditAbout} />
          <PrivateRoute path="/updateemail" exact component={UpdateEmail} />
          <PrivateRoute path="/updateusername" exact component={UpdateUsername} />
          <PrivateRoute path="/updateprofession" exact component={UpdateProfession} />
          <PrivateRoute path="/updatephone" exact component={UpdatePhone} />
          <PrivateRoute path="/updateage" exact component={UpdateAge} />
          <PrivateRoute path="/loader" exact component={Loader} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
