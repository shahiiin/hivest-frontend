import React from "react";
import {
    Route,
    Switch,
    Redirect,
} from "react-router-dom";
import Login from "./../components/login";
import Register from "./../components/register";
import ForgetPass from "./../components/forgetPass";
import SentEmail from "./../components/sendEmail";
import Dashboard from "./../container/dashboard";
import EmptyDAshboard from "./../container/emptyDashboard";
import Chanels from "./../container/chanels";
import ChanelBoard from "./../container/chanelBoard";
import ChanelPersonal from "./../container/chanelPersonal";
import Welcome from "./../container/welcome";
import QuestionHive from "./../container/questionHive";
import Salary from "./../container/salary";
import Statics from "./../container/statics";
import DayliWallet from "./../container/dayliWallet";
import Profile from "./../container/profile";
import ProfileActive from "./../container/profileActive";
import ProfilePayment from "./../container/profilePayment";
import ProfileExam from "./../container/profileQuestion";
import CionDetile from "./../container/coinDiteil/coinDeteil";

function Routes(props) {
    return (<Switch>
            <Route exact path="/login" component={() => <Login/>}/>
            <Route exact path="/register" component={() => <Register/>}/>
            <Route exact path="/forgetPass" component={() => <ForgetPass/>}/>
            <Route exact path="/sendEmail" component={() => <SentEmail/>}/>
            <Route exact path="/dashboard" component={() => <Dashboard/>}/>
            <Route exact path="/Empty" component={() => <EmptyDAshboard/>}/>
            <Route exact path="/chanels" component={() => <Chanels/>}/>
            <Route exact path="/chanelBoard" component={() => <ChanelBoard/>}/>
            <Route exact path="/chanels/:id" component={() => <Chanels/>}/>
            <Route
                exact
                path="/chanelPersonal"
                component={() => <ChanelPersonal/>}
            />
            <Route exact path="/welcome" component={() => <Welcome/>}/>
            <Route exact path="/question" component={() => <QuestionHive/>}/>
            <Route exact path="/salary" component={() => <Salary/>}/>
            <Route exact path="/statics" component={() => <Statics/>}/>
            <Route exact path="/dayliWallet" component={() => <DayliWallet/>}/>
            <Route exact path="/profile" component={() => <Profile/>}/>
            <Route
                exact
                path="/profileActive"
                component={() => <ProfileActive/>}
            />
            <Route
                exact
                path="/profilepayment"
                component={() => <ProfilePayment/>}
            />
            <Route
                exact
                path="/profileQuestions"
                component={() => <ProfileExam/>}
            />
            <Route
                exact
                path="/profileQuestions/:id"
                component={() => <ProfileExam/>}
            />
            <Redirect from="/" exact to="/login"/>
            <Route exact path="/coinDetile" component={() => <CionDetile/>}/>
        </Switch>
    );
}

export default Routes;
