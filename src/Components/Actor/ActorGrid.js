import React from 'react';


import IMAGE_NOT_FOUND from '../../Images/not-found.png';
import { FlexGrid } from '../Styled';
import ActorCard from './ActorCard';

const ActorGrid = ({ data }) => {
	return (
		<FlexGrid>
			{data.map(({ person }) => (
				<ActorCard
					key={person.id}
					image={person.image ? person.image.medium : IMAGE_NOT_FOUND}
					gender={person.gender}
					birthday={person.birthday}
					deathday={person.deathday}
					name={person.name.replace(/\./gi, '')}
				/>
			))}
		</FlexGrid>
	);
};

export default ActorGrid;
