import React, { useEffect, useReducer } from 'react';
import { useParams } from 'react-router';
import { apiGet } from '../Misc/Config';

const initialState = {
	show: null,
	isLoading: true,
	error: null,
};

const reducer = (prevState, action) => {
	switch (action.type) {
		case 'FETCH_SUCCESS':
			return { show: action.show, isLoading: false, error: null };

		case 'FETCH_FAILED':
			return { ...prevState, isLoading: false, error: action.error };

		default:
			return prevState;
	}
};

const Show = () => {
	const { id } = useParams();

	const [{ show, isLoading, error: errors }, dispatch] = useReducer(
		reducer,
		initialState
	);

	// const [isLoading, setIsLoading] = useState(true);
	// const [show, setShow] = useState(null);
	// const [errors, setErrors] = useState(null);

	useEffect(() => {
		let isMounted = true;
		apiGet(`/shows/${id}?embed[]=seasons&embed[]=cast`)
			.then(r => {
				if (isMounted) {
					dispatch({ type: 'FETCH_SUCCESS', show: r });
				}
			})
			.catch(err => {
				if (isMounted) {
					dispatch({ type: 'FETCH_FAILED', error: err.message });
				}
			});

		return () => {
			isMounted = false;
		};
	}, [id]);

	if (isLoading) {
		return <div>Please wait, page is loading</div>;
	}

	if (errors !== null) {
		return <div>{errors}</div>;
	}

	console.log({ show, isLoading, errors });

	return <div>show</div>;
};

export default Show;
