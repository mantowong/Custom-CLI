#!/usr/bin/env node

/**
 * Custom-CLI
 * Test
 *
 * @author Man-To Wong <https://github.com/mantowong>
 */

const init = require('./utils/init');
const cli = require('./utils/cli');
const log = require('./utils/log');
const child = require('child_process').execFile;
const axios = require('axios');
const input = cli.input;
const flags = cli.flags;
//const { clear, debug } = flags;

var lol = "C:\\Riot Games\\League of Legends\\leagueclient.exe";
var dc = "C:\\Users\\man-t\\AppData\\Local\\Discord\\app-1.0.9006\\discord.exe";
var word = "C:\\Program Files\\Microsoft Office\\root\\Office16\\winword.exe";
var pp = "C:C:\\Program Files\\Microsoft Office\\root\\Office16\\powerpnt.exe";
var exl = "C:\\Program Files\\Microsoft Office\\root\\Office16\\excel.exe";
var mail = "C:\\Program Files\\Microsoft Office\\root\\Office16\\outlook.exe";
var teams = "C:\\Users\\man-t\\AppData\\Local\\Microsoft\\Teams\\current\\teams.exe";
var music = "C:\\Program Files\\WindowsApps\\SpotifyAB.SpotifyMusic_1.191.824.0_x86__zpdnekdrzrea0\\Spotify.exe";
var code = "C:\\Program Files\\Microsoft VS Code\\code.exe";
var ff = "C:\\Program Files\\Mozilla Firefox\\firefox.exe";
var abap = "C:\\Users\\man-t\\Documents\\eclipse-java-2022-06-R-win32-x86_64\\eclipse\\eclipse.exe";
var note = "C:\\Windows\\System32\\note.exe"; 



(async () => {
	/*
	init({ clear });
	input.includes(`help`) && cli.showHelp(0);
	debug && log(flags);
	*/

if(input.includes('joke')) {
	const res = await axios.get('https://api.chucknorris.io/jokes/random');
	console.log(res.data.value)
 ;
}

if(input.includes('aff')) {
	const res = await axios.get('https://www.affirmations.dev/');
	console.log(res.data.affirmation)
}

if(input.includes('lol')) {
child(lol, function(err, data) {
    if(err){
       console.error(err);
       return;
    }
    console.log(data.toString());
});
}

if(input.includes('dc')) {
	child(dc, function(err, data) {
		if(err){
		   console.error(err);
		   return;
		}
		console.log(data.toString());
	});
	}

if(input.includes('word')) {
	child(word, function(err, data) {
		if(err){
		   console.error(err);
		   return;
		}
		console.log(data.toString());
	});
	}

if(input.includes('pp')) {
		child(pp, function(err, data) {
			if(err){
			   console.error(err);
			   return;
			}
			console.log(data.toString());
		});
	}

if(input.includes('exl')) {
		child(exl, function(err, data) {
			if(err){
			   console.error(err);
			   return;
			}
			console.log(data.toString());
		});
	}

if(input.includes('mail')) {
		child(mail, function(err, data) {
			if(err){
			   console.error(err);
			   return;
			}
			console.log(data.toString());
		});
	}

if(input.includes('teams')) {
		child(teams, function(err, data) {
			if(err){
			   console.error(err);
			   return;
			}
			console.log(data.toString());
		});
	}
if(input.includes('music')) {
		child(music, function(err, data) {
			if(err){
			   console.error(err);
			   return;
			}
			console.log(data.toString());
		});
	}

if(input.includes('code')) {
		child(code, function(err, data) {
			if(err){
			   console.error(err);
			   return;
			}
			console.log(data.toString());
		});
	}

if(input.includes('ff')) {
		child(ff, function(err, data) {
			if(err){
			   console.error(err);
			   return;
			}
			console.log(data.toString());
		});
	}

if(input.includes('abap')) {
		child(abap, function(err, data) {
			if(err){
			   console.error(err);
			   return;
			}
			console.log(data.toString());
		});
	}

if(input.includes('note')) {
		child(note, function(err, data) {
			if(err){
			   console.error(err);
			   return;
			}
			console.log(data.toString());
		});
	}
})();


