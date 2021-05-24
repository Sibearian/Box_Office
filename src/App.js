import React from 'react';
import { Switch, Route } from 'react-router-dom';

// Importing pages
import Home from './Pages/Home';
import Starred from './Pages/Starred';

const App = () => (
	<Switch>
		<Route exact path="/">
			<Home />
		</Route>
		<Route exact path="/starred">
			<Starred />
		</Route>
		<Route>
			<div>Not Found 404</div>
		</Route>
	</Switch>
);

export default App;
