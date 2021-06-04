import React from 'react';
import {useLocation} from 'react-router-dom'
import { NavList, LinkStyled } from './Navis.style';

const LINKS = [
	{ to: '/', text: 'Home' },
	{ to: '/starred', text: 'Starred' },
];

const Navis = () => {
	const {pathname} = useLocation();
	return (
	<div>
		<NavList>
			{LINKS.map((link, pos) => (
				<li key={pos}>
					<LinkStyled to={link.to} className={link.to === pathname ? 'active' : ''} >{link.text}</LinkStyled>
				</li>
			))}
		</NavList>
	</div>
)};

export default Navis;
