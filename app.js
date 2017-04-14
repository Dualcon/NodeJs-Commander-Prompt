#!/usr/bin/env node

Totorial: https://developer.atlassian.com/blog/2015/11/scripting-with-node/
	var program = require('commander');
var co = require('co');
var prompt = require('co-prompt');

program.arguments('<file>')
.version('1.0.0')	
.option('-u, --username <username>', 'The user to authenticate as')
.option('-p, --password <password>', 'The user\'s password')
.action(function(file) {
	co(function *() {
		var username = yield prompt('username: ');
		var password = yield prompt.password('password: ');
		console.log('user: %s pass: %s file: %s', username, password, file);
	});

}).parse(process.argv);
