process.env.UV_THREADPOOL_SIZE = 5;

const https = require("https");
const crypto = require("crypto");
const fs = require("fs");

const start = Date.now();

function doRequests() {
  https
    .request("https://www.google.com", (res) => {
      res.on("data", () => {});
      res.on("end", () => {
        console.log("req: ", Date.now() - start);
      });
    })
    .end();
}

function doHash() {
  crypto.pbkdf2("a", "b", 100000, 512, "sha512", () => {
    console.log("Hash:", Date.now() - start);
  });
}

doRequests();

fs.readFile("multitask.js", () => {
  console.log("file:", Date.now() - start);
});

doHash();
doHash();
doHash();
doHash();
