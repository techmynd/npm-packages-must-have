// create a config folder and have a default.json file to store variables

// config/default.json
// config/production.json // for production env

const config = require('config');

// anywhere in application if you need vars from config, use
// config.get('varname') // varname that is in default.json or production.json file in config folder

const apiKey = config.get('apiKey');
const jwt = config.get('jwtSecret');

console.log(apiKey);
console.log(jwt);
