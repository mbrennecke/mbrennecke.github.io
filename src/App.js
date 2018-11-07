import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact"
import Nav from "./components/Nav";

class App extends Component {
  render() {
    return (
	<Router>
      <div className="App">
		<Nav/>
		<Switch>
			<Route exact path="/" component={About} />
			<Route exact path="/about" component={About} />
			<Route exact path="/portfolio" component={Portfolio} />
			<Route exact path="/contact" component={Contact} />
		</Switch>
      </div>
	</Router>
    );
  }
}

export default App;
