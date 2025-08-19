const express = require("express");
const app = express();
const path = require("path");
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/my-solar-system_all_adapted-from-phet.xhtml");
});

////////////////////////
// Socket Connection //
//////////////////////

io.sockets.on("connection", (socket) => {

});

//////////////////////////////////
//  Listen to the socket port  //
////////////////////////////////

server.listen(3000, () => {
  console.log("listening on *:3000");
});





