import axios from 'axios';

const instance = axios.create({
	baseURL: 'https://jsonplaceholder.typicode.com',

	// fake rest api with json-server
	// install: `npm i -g json-server`
	// run: `json-server --watch server/db.json`
	// baseURL: 'http://localhost:3000',
	headers: {
		'Content-Type': 'application/json'
	}
});
export default instance;
