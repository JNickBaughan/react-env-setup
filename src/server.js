let express = require("express");

let PORT = 3000;

let server = express();

server.get("/", function (req, res) {
  res.send("hello world");
});

server.listen(PORT, function () {
  console.log(`server listening on port : ${PORT}`);
});
