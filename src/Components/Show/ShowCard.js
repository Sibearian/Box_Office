import React from 'react';
import { Link } from 'react-router-dom';
import { StyledShowCard } from './ShowCard.styled';
import { Star } from '../Styled';

const ShowCard = ({ id, image, name, summary, onClick, isActive }) => {
	const summaryAsText = summary
		? `${summary.split(' ').slice(0, 10).join(' ').replace(/<.+?>/g, '')}...`
		: 'No description';

	return (
		<StyledShowCard>
			<div>
				<img className="img-wrapper" src={image} alt="show" />
			</div>

			<h1>{name}</h1>

			<p>{summaryAsText}</p>

			<div className="btns">
				<Link to={`/show/${id}`}>Read more</Link>
				<button type="button" onClick={onClick}>
					<Star isActive={isActive} />
				</button>
			</div>
		</StyledShowCard>
	);
};

export default ShowCard;
