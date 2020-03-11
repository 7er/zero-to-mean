import React from 'react';
import './App.css';
import {Route, Switch} from "react-router-dom";
import HomePage from "./HomePage";
import {CssBaseline} from "@material-ui/core";
import Container from "@material-ui/core/Container";

function App() {
  return (
    <div>
      <CssBaseline/>
      <header>
      </header>
      <section>
        <Container maxWidth="lg">
        <Switch>
          <Route path="/" component={HomePage}/>
        </Switch>
        </Container>
      </section>
      <footer>

      </footer>
    </div>
  );
}

export default App;
