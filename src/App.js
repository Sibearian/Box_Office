import React from 'react';
import { Switch, Route } from 'react-router-dom';

// Importing Components
import Navis from './Components/Navis';

// Importing pages
import Home from './Pages/Home';
import Starred from './Pages/Starred';

const App = () => (
	<div>
		<Navis />
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
	</div>
);

export default App;
