import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

// Importing pages
import Home from './Pages/Home';
import Show from './Pages/Show';
import Starred from './Pages/Starred';

const theme = {
	mainColors: {
		blue: '#2400ff',
		gray: '#c6c6c6',
		dark: '#353535',
	},
};

const App = () => (
	<ThemeProvider theme={theme}>
		<Switch>
			<Route exact path="/">
				<Home />
			</Route>
			<Route exact path="/starred">
				<Starred />
			</Route>
			<Route exact path="/show/:id">
				<Show />
			</Route>
			<Route>
				<div>Not Found 404</div>
			</Route>
		</Switch>{' '}
	</ThemeProvider>
);

export default App;
