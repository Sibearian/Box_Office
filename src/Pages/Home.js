import React, { useState } from 'react';
import MainPageLayout from '../Components/MainPageLayout';
import { apiGet } from '../Misc/Config';

const Home = () => {
	const [input, setInput] = useState('');
	const [results, setResults] = useState(null);

	const onInputChange = ev => {
		setInput(ev.target.value);
	};

	const onSearch = () => {
		apiGet(`/search/shows?q=${input}`).then(result => setResults(result));
	};

	const onEnterKeyDown = event => {
		if (event.keyCode === 13) {
			onSearch();
		}
	};

	const renderSearch = () => {
		if (results && results.length === 0) {
			return <div>Nosearch result</div>;
		}

		if (results && results.length >= 0) {
			return (
				<div>
					{results.map(item => {
						return <div key={item.show.id}> {item.show.name} </div>;
					})}
				</div>
			);
		}
		return null;
	};

	return (
		<MainPageLayout>
			<input
				type="text"
				onChange={onInputChange}
				onKeyDown={onEnterKeyDown}
				value={input}
			/>
			<button type="button" onClick={onSearch}>
				Search
			</button>

			{renderSearch()}
		</MainPageLayout>
	);
};

export default Home;
