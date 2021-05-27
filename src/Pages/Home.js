import React, { useState } from 'react';
import ActorGrid from '../Components/Actor/ActorGrid';
import MainPageLayout from '../Components/MainPageLayout';
import ShowGrid from '../Components/Show/ShowGrid';
import { apiGet } from '../Misc/Config';

const Home = () => {
	const [input, setInput] = useState('');
	const [searchOption, setSearchOption] = useState('shows');
	const [results, setResults] = useState(null);

	const isShowChecked = searchOption === 'shows';

	const onInputChange = ev => {
		setInput(ev.target.value);
	};

	const onSearch = () => {
		apiGet(`/search/${searchOption}?q=${input}`).then(result =>
			setResults(result)
		);
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
			return results[0].show ? (
				<ShowGrid data={results} />
			) : (
				<ActorGrid data={results} />
			);
		}
		return null;
	};

	const onRadioChange = event => {
		setSearchOption(event.target.value);
	};

	return (
		<MainPageLayout>
			<input
				type="text"
				placeholder="Search for something"
				onChange={onInputChange}
				onKeyDown={onEnterKeyDown}
				value={input}
			/>
			<div>
				<label htmlFor="shows-search">
					shows
					<input
						type="radio"
						id="shows-search"
						value="shows"
						onChange={onRadioChange}
						checked={isShowChecked}
					/>
				</label>
				<label htmlFor="actors-search">
					Actors
					<input
						type="radio"
						id="actors-search"
						value="people"
						onChange={onRadioChange}
						checked={!isShowChecked}
					/>
				</label>
			</div>
			<button type="button" onClick={onSearch}>
				Search
			</button>

			{renderSearch()}
		</MainPageLayout>
	);
};

export default Home;
