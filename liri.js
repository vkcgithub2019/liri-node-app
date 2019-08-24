require("dotenv").config();
var keys = require('./keys.js');
var fs = require("fs");
var moment = require("moment");
var axios = require("axios");
var spotify = require("node-spotify-api");
var inquirer = require("inquirer");
var userCommand = process.argv[2];
var secondCommand = process.argv.slice(3);
var filename = './log.txt';
var log = require('simple-node-logger').createSimpleFileLogger(fileneme);
log.setLevel('all');

