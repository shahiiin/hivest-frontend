import React from "react";
import "./App.css";
import Routes from "./routes";
import ReactNotification from "react-notifications-component";
import "react-notifications-component/dist/scss/notification.scss";

function App() {
    return (
        <>
            <ReactNotification />
            <div className="App">
                <Routes/>
            </div>
        </>
    );
}

export default App;
