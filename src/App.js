import React from "react";
// import { Footer } from "./components/footer/Footer";
// import { Navbar } from "./components/Navbar/Navbar";
// import { InputField, Button, TextArea } from "./components/Form";
import { UploadCerita } from "./components/Pages/UploadCerita/UploadCerita";
import { Homepage } from "./components/Pages/Homepage/Homepage";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import "./styles/base.scss";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" render={(props)=><Homepage {...props}/>}/>
          <Route exact path="/UploadCerita" render={(props)=><UploadCerita {...props}/>}/>
        </Switch>
      </Router>
    );
  }
}

export default App;
