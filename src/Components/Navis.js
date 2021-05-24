import React from 'react';
import { Link } from 'react-router-dom';

const LINKS = [
	{ to: '/', text: 'Home' },
	{ to: '/starred', text: 'Starred' },
];

const Navis = () => (
	<div>
		<ul>
      {
        LINKS.map((link, pos) => (
          <li key={pos}><Link to={link.to} >{link.text}</Link></li>
        ))
      }
		</ul>
	</div>
);

export default Navis;
