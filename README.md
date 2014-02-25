resource-reader
============

> Stability - 2 Unstable

A simple resource Readable stream that includes content-type event identification

## Usage 

````
    var ResourceReader = require("resource-reader").ResourceReader;
    var rr = new ResourceReader(root /* root dir of resources */, filepath /* file location relative to root */);
    rr.on("noresource", function(err) {/* handle file not exist information */});
    rr.on("ctype", function(ctype) {/* content-type identifier information suitable for piping to response header */});
    rr.on("error", function(err) {/* handle stream error information */});
    rr.on("data", function(chunk) {/* handle writing Buffer chunk data */});
    rr.on("end", function() {/* handle end of data stream */});

````
