import React from 'react';
import ShowCard from './ShowCard';
import { FlexGrid } from '../Styled';

import { useShows } from '../../Misc/costom-hooks';
import IMAGE_NOT_FOUND from '../../Images/not-found.png';

const ShowGrid = ({ data }) => {
	const [starredShows, dispatchStarred] = useShows();

	return (
		<FlexGrid>
			{data.map(({ show }) => {
				const isStarred = starredShows.includes(show.id);

				const onStarred = () => {
					if (isStarred) {
						dispatchStarred({ type: 'REMOVE', showId: show.id });
					} else {
						dispatchStarred({ type: 'ADD', showId: show.id });
					}
				};

				return (
					<ShowCard
						key={show.id}
						id={show.id}
						name={show.name}
						image={show.image ? show.image.medium : IMAGE_NOT_FOUND}
						summary={show.summary}
						onClick={onStarred}
						isActive={isStarred}
					/>
				);
			})}
		</FlexGrid>
	);
};

export default ShowGrid;
