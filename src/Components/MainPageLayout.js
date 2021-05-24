import React from 'react';

// Importing Components
import Navis from './Navis';
import Title from './Title';

const MainPageLayout = ({ children }) => {
	return (
		<div>
			<Title
				title="Box Office"
				subtitle="Are you looking for a movie or an actor?"
			/>
			<Navis />

			{children}
		</div>
	);
};

export default MainPageLayout;
