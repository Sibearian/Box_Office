import React, { useState, useCallback } from 'react';
import ActorGrid from '../Components/Actor/ActorGrid';
import CustomRadio from '../Components/CustomRadio';
import MainPageLayout from '../Components/MainPageLayout';
import ShowGrid from '../Components/Show/ShowGrid';
import { apiGet } from '../Misc/Config';
import { useLastQuery } from '../Misc/costom-hooks';
import {
	RadioInputsWrapper,
	SearchButtonWrapper,
	SearchInput,
} from './Home.styled';

const renderSearch = results => {
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

const Home = () => {
	const [input, setInput] = useLastQuery();
	const [searchOption, setSearchOption] = useState('shows');
	const [results, setResults] = useState(null);

	const isShowChecked = searchOption === 'shows';

	const onInputChange = useCallback(
		ev => {
			setInput(ev.target.value);
		},
		[setInput]
	);

	const onSearch = () => {
		apiGet(`/search/${searchOption}?q=${input}`).then(result =>
			setResults(result)
		);
	};

	const onKeyDown = event => {
		if (event.keyCode === 13) {
			onSearch();
		}
	};

	const onRadioChange = useCallback(event => {
		setSearchOption(event.target.value);
	}, []);

	return (
		<MainPageLayout>
			<SearchInput
				type="text"
				placeholder="Search for something"
				onChange={onInputChange}
				onKeyDown={onKeyDown}
				value={input}
			/>
			<RadioInputsWrapper>
				<div>
					<CustomRadio
						lable="Shows"
						id="shows-search"
						value="shows"
						onChange={onRadioChange}
						checked={isShowChecked}
					/>
				</div>
				<div>
					<CustomRadio
						lable="Actors"
						id="actors-search"
						value="people"
						onChange={onRadioChange}
						checked={!isShowChecked}
					/>
				</div>
			</RadioInputsWrapper>
			<SearchButtonWrapper>
				<button type="button" onClick={onSearch}>
					Search
				</button>
			</SearchButtonWrapper>

			{renderSearch(results)}
		</MainPageLayout>
	);
};

export default Home;
