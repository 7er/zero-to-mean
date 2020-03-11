import React from 'react';
import './App.css';
import {Route, Switch} from "react-router-dom";
import HomePage from "./HomePage";

function App() {
  return (
    <div>
      <header>
      </header>
      <section>
        <Switch>
          <Route path="/" component={HomePage}/>
        </Switch>
      </section>
      <footer>

      </footer>
    </div>
  );
}

export default App;
