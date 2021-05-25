const API_LINK = 'https://api.tvmaze.com';

export async function apiGet(searchQuary) {
	const response = await fetch(`${API_LINK}${searchQuary}`).then(r => r.json());
	return response;
}
