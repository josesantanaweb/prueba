import axios from 'axios';

const api = axios.create({
	baseURL: 'https://apify.epayco.co//billcollect',
	headers: {
		'Authorization': `Bearer ${process.env.REACT_APP_TOKEN}`
	},
});


export default api;
