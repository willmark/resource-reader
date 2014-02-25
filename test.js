exports.test1 = function(a) {
    var ResourceReader = require("./index").ResourceReader;
    var root =  __dirname;

    a.expect(2);
    var filepath = 'resources/350x150.jpg';
    var rr = new ResourceReader(root /* root dir of resources */, filepath /* file location relative to root */);
    rr.on("noresource", function(err) {a.ok(false);/* handle file not exist information */});
    rr.on("ctype", function(ctype) {a.ok(ctype === 'image/jpeg');/* content-type identifier information suitable for piping to response header */});
    rr.on("error", function(err) {a.ok(false);/* handle stream error information */});
    rr.on("data", function(chunk) {a.ok(true);/* handle writing Buffer chunk data */});
    rr.on("end", function() {a.done();/* handle end of data stream */});
};

exports.test2 = function(a) {
    var ResourceReader = require("./index").ResourceReader;
    var root =  __dirname;

    a.expect(2);
    var filepath = 'resources/350x150.png';
    var rr = new ResourceReader(root /* root dir of resources */, filepath /* file location relative to root */);
    rr.on("noresource", function(err) {a.ok(false);/* handle file not exist information */});
    rr.on("ctype", function(ctype) {a.ok(ctype === 'image/png');/* content-type identifier information suitable for piping to response header */});
    rr.on("error", function(err) {a.ok(false);/* handle stream error information */});
    rr.on("data", function(chunk) {a.ok(true);/* handle writing Buffer chunk data */});
    rr.on("end", function() {a.done();/* handle end of data stream */});
};

exports.test3 = function(a) {
    var ResourceReader = require("./index").ResourceReader;
    var root =  __dirname;

    a.expect(2);
    var filepath = 'resources/350x150.gif';
    var rr = new ResourceReader(root /* root dir of resources */, filepath /* file location relative to root */);
    rr.on("noresource", function(err) {a.ok(false);/* handle file not exist information */});
    rr.on("ctype", function(ctype) {a.ok(ctype === 'image/gif');/* content-type identifier information suitable for piping to response header */});
    rr.on("error", function(err) {a.ok(false);/* handle stream error information */});
    rr.on("data", function(chunk) {a.ok(true);/* handle writing Buffer chunk data */});
    rr.on("end", function() {a.done();/* handle end of data stream */});
};

exports.test4 = function(a) {
    var ResourceReader = require("./index").ResourceReader;
    var root =  __dirname;

    a.expect(2);
    var filepath = 'resources/test.js';
    var rr = new ResourceReader(root /* root dir of resources */, filepath /* file location relative to root */);
    rr.on("noresource", function(err) {a.ok(false);/* handle file not exist information */});
    rr.on("ctype", function(ctype) {a.ok(ctype === 'application/x-javascript');/* content-type identifier information suitable for piping to response header */});
    rr.on("error", function(err) {a.ok(false);/* handle stream error information */});
    rr.on("data", function(chunk) {a.ok(true);/* handle writing Buffer chunk data */});
    rr.on("end", function() {a.done();/* handle end of data stream */});
};

exports.test5 = function(a) {
    var ResourceReader = require("./index").ResourceReader;
    var root =  __dirname;

    a.expect(2);
    var filepath = 'resources/test.css';
    var rr = new ResourceReader(root /* root dir of resources */, filepath /* file location relative to root */);
    rr.on("noresource", function(err) {a.ok(false);/* handle file not exist information */});
    rr.on("ctype", function(ctype) {a.ok(ctype === 'text/css');/* content-type identifier information suitable for piping to response header */});
    rr.on("error", function(err) {a.ok(false);/* handle stream error information */});
    rr.on("data", function(chunk) {a.ok(true);/* handle writing Buffer chunk data */});
    rr.on("end", function() {a.done();/* handle end of data stream */});
};

exports.test6 = function(a) {
    var ResourceReader = require("./index").ResourceReader;
    var root =  __dirname;

    a.expect(2);
    var filepath = 'resources/test.txt';
    var rr = new ResourceReader(root /* root dir of resources */, filepath /* file location relative to root */);
    rr.on("noresource", function(err) {a.ok(false);/* handle file not exist information */});
    rr.on("ctype", function(ctype) {a.ok(ctype === 'text/plain');/* content-type identifier information suitable for piping to response header */});
    rr.on("error", function(err) {a.ok(false);/* handle stream error information */});
    rr.on("data", function(chunk) {a.ok(true);/* handle writing Buffer chunk data */});
    rr.on("end", function() {a.done();/* handle end of data stream */});
};

exports.test7 = function(a) {
    var ResourceReader = require("./index").ResourceReader;
    var root =  __dirname;

    a.expect(1);
    var filepath = 'resources/notexists';
    var rr = new ResourceReader(root /* root dir of resources */, filepath /* file location relative to root */);
    rr.on("noresource", function(err) {a.ok(true);a.done();/* handle file not exist information */});
    rr.on("ctype", function(ctype) {a.ok(false);/* content-type identifier information suitable for piping to response header */});
    rr.on("error", function(err) {a.ok(false);/* handle stream error information */});
    rr.on("data", function(chunk) {a.ok(false);/* handle writing Buffer chunk data */});
    rr.on("end", function() {a.ok(false);/* handle end of data stream */});
};
