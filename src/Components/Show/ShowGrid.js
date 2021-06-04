import React, { useCallback } from 'react';
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

				// eslint-disable-next-line react-hooks/rules-of-hooks
				const onStarred = useCallback(() => {
					if (isStarred) {
						dispatchStarred({ type: 'REMOVE', showId: show.id });
					} else {
						dispatchStarred({ type: 'ADD', showId: show.id });
					}
				}, [isStarred, show.id]);

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
