import React from "react";
import {
  Route,
  Switch,
  BrowserRouter as Router,
  Redirect,
} from "react-router-dom";
import Login from "../../components/login";
import Register from "../../components/register";
import ForgetPass from "../../components/forgetPass";
import SentEmail from "../../components/sendEmail";
import Dashboard from "../dashboard";
import EmptyDAshboard from "../emptyDashboard";
import Chanels from "../chanels";
import ChanelBoard from "../chanelBoard";
import ChanelPersonal from "../chanelPersonal";
import Welcome from "../welcome";
import QuestionHive from "../questionHive";
import Salary from "../salary";
import Statics from "../statics";
import DayliWallet from "../dayliWallet";
import Profile from "../profile";
import ProfileActive from "../profileActive";
import ProfilePayment from "../profilePayment";
import ProfileExam from "../profileQuestion";
import CionDetile from "../coinDiteil/coinDeteil";

function MyRoutes(props) {
  return (
    <Router>
      <Switch>
        <Route exact path="/login" component={() => <Login />} />
        <Route exact path="/register" component={() => <Register />} />
        <Route exact path="/forgetPass" component={() => <ForgetPass />} />
        <Route exact path="/sendEmail" component={() => <SentEmail />} />
        <Route exact path="/dashboard" component={() => <Dashboard />} />
        <Route exact path="/Empty" component={() => <EmptyDAshboard />} />
        <Route exact path="/chanels" component={() => <Chanels />} />
        <Route exact path="/chanelBoard" component={() => <ChanelBoard />} />
        <Route exact path="/chanels/:id" component={() => <Chanels />} />
        <Route
          exact
          path="/chanelPersonal"
          component={() => <ChanelPersonal />}
        />
        <Route exact path="/welcome" component={() => <Welcome />} />
        <Route exact path="/question" component={() => <QuestionHive />} />
        <Route exact path="/salary" component={() => <Salary />} />
        <Route exact path="/statics" component={() => <Statics />} />
        <Route exact path="/dayliWallet" component={() => <DayliWallet />} />
        <Route exact path="/profile" component={() => <Profile />} />
        <Route
          exact
          path="/profileActive"
          component={() => <ProfileActive />}
        />
        <Route
          exact
          path="/profilepayment"
          component={() => <ProfilePayment />}
        />
        <Route
          exact
          path="/profileQuestions"
          component={() => <ProfileExam />}
        />
        <Route
          exact
          path="/profileQuestions/:id"
          component={() => <ProfileExam />}
        />
        <Redirect from="/" exact to="/login" />
        <Route exact path="/coinDetile" component={() => <CionDetile />} />
      </Switch>
    </Router>
  );
}
export default MyRoutes;
