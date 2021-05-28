import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { apiGet } from '../Misc/Config';

const Show = () => {
	const { id } = useParams();
	const [isLoading, setIsLoading] = useState(true);
	const [show, setShow] = useState(null);
	const [errors, setErrors] = useState(null);

	useEffect(() => {
		let isMounted = true;
		apiGet(`/shows/${id}?embed[]=seasons&embed[]=cast`)
			.then(r => {
				if (isMounted) {
					setShow(r);
					setIsLoading(false);
				}
			})
			.catch(err => {
				if (isMounted) {
					setErrors(err.message);
					setIsLoading(false);
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

	console.log(show);

	return <div>show</div>;
};

export default Show;
