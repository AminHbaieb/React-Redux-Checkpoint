import "./App.css";
import React from "react";
import AddTask from "./Components/AddTask/AddTask";
import ListTask from "./Components/ListTask/ListTask";
// import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
    return (
        <div className="App">
            <AddTask />
            {/* <Router> */}
            {/* <Route path="/todos"
            render={({match})=>}> */}
            <ListTask />
            {/* </Route> */}
            {/* </Router> */}
        </div>
    );
}

export default App;
