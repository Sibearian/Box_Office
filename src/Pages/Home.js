import React, { useState } from 'react';
import MainPageLayout from '../Components/MainPageLayout';
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
			return results[0].show
				? results.map(item => <div key={item.show.id}> {item.show.name} </div>)
				: results.map(item => (
						<div key={item.person.id}> {item.person.name} </div>
				  ));

			// results.map(item => {
			// 	return <div key={item[0].id}> {item[0].name} </div>;
			// })
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
				<lable htmlFor="shows-search">
					shows
					<input
						type="radio"
						id="shows-search"
						value="shows"
						onChange={onRadioChange}
						checked={isShowChecked}
					/>
				</lable>
				<lable htmlFor="actors-search">
					Actors
					<input
						type="radio"
						id="actors-search"
						value="people"
						onChange={onRadioChange}
						checked={!isShowChecked}
					/>
				</lable>
			</div>
			<button type="button" onClick={onSearch}>
				Search
			</button>

			{renderSearch()}
		</MainPageLayout>
	);
};

export default Home;
