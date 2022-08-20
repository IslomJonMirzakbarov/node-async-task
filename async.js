const https = require("https");

const start = Date.now();

function doRequests() {
  https
    .request("https://www.google.com", (res) => {
      res.on("data", () => {});
      res.on("end", () => {
        console.log(Date.now() - start);
      });
    })
    .end();
};

doRequests();
doRequests();
doRequests();
doRequests();
doRequests();
doRequests();
