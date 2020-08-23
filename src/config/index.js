const URL_LOCAL  = 'http://localhost:8080';
const URL_HEROKU = 'https://orionflix.herokuapp.com';
const URL = window.location.hostname.includes('localhost') ? URL_LOCAL : URL_HEROKU;

export default { URL, };