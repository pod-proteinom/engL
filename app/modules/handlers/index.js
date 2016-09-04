'use strict';
const conf = require('config');
const join = require('path').join;

const middlewares = [
    'middlewares/logRequest'
];

const api = [
	'api/home'
];

const handlers = middlewares.concat(api);

exports.importHandler = require('./lib/importHandler');

exports.handlers = handlers;