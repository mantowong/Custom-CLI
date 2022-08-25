#!/usr/bin/env node

/**
 * Custom-CLI
 * Das ist mein Revier
 *
 * @author Man-To Wong <https://github.com/mantowong>
 */

const init = require('./utils/init');
const cli = require('./utils/cli');
const log = require('./utils/log');
const axios = require('axios');
const input = cli.input;
const flags = cli.flags;
const { clear, debug } = flags;


(async () => {
	init({ clear });
	input.includes(`help`) && cli.showHelp(0);
	debug && log(flags);

if(input.includes('joke')) {
	const res = await axios.get('https://api.chucknorris.io/jokes/random');
	console.log(res.data.value)
 ;
}

if(input.includes('affirmation')) {
	const res = await axios.get('https://www.affirmations.dev/');
	console.log(res.data.affirmation)
}
})();


