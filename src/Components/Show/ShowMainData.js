import React from 'react';
import { Star } from '../Styled';

import IMAGE_NOT_FOUND from '../../Images/not-found.png';
import { Headline, MainDataWrapper, TagList } from './ShowMainData.styled';

const ShowMainData = ({ name, rating, summary, tags, image }) => {
	return (
		<MainDataWrapper>
			<img src={image ? image.original : IMAGE_NOT_FOUND} alt="show-cover" />
			<div className="text-side">
				<Headline>
					<h1>{name}</h1>
					<div>
						<Star isActive />
						<span>{rating.average || 'N/A'}</span>
					</div>
				</Headline>
				<div
					className="summary"
					dangerouslySetInnerHTML={{ __html: summary }}
				/>

				<div>
					Tags: {' '}
					<TagList>
						{tags.map((tag, i) => (
							<span key={i}>{tag}</span>
						))}
					</TagList>
				</div>
			</div>
		</MainDataWrapper>
	);
};

export default ShowMainData;
