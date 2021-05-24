import React from 'react';
import { Switch, Route } from 'react-router-dom';

function App() {
	return (
		<Switch>
			<Route exact path="/">
				This Is Home Page
			</Route>
			<Route exact path="/start">
				This Is Start
			</Route>
			<Route>
				<h2>404</h2>
			</Route>
		</Switch>
	);
}

export default App;
