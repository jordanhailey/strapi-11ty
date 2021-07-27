const { default: axios } = require('axios');

const API_ENDPOINT = 'http://localhost:1337';
const HTTP_REQ_T = ['get','post'];

const httpReq = async function(type,url=API_ENDPOINT,options={}) {
	if (!HTTP_REQ_T.includes(type)) throw new Error('Must be of type: '+HTTP_REQ_T)
	try {
		const res = await axios[type](url,options);
		return res.data;
	} catch (error) {
		console.error(error);
	}
}

const buildEndpoint = (endpoint="") => {
	if (new RegExp(API_ENDPOINT).test(endpoint)) throw new Error(`must be absolute path from base endpoint: ${API_ENDPOINT}{/:endpoint/path}`)
	return API_ENDPOINT+endpoint
}

const getAPI = async function(endpoint,options) {
	endpoint = buildEndpoint(endpoint);
	return httpReq('get',endpoint,options);
}

module.exports = {
	getAPI
};
