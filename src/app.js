require("dotenv/config");
const express = require("express");
const router = require("./routes");
const http = require('http');
const socketIO = require('socket.io');
const cookie = require("cookie-parser");
const fileUpload = require("express-fileupload");
const app = express();
// const PORT = process.env.PORT || 7000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookie());
app.use(fileUpload());

app.use(express.static(process.cwd() + "/src/public"));
app.use(express.static(process.cwd() + "/src/admin.templates"));
app.use(express.static(process.cwd() + "/uploads"));

app.set("view engine", "ejs");
app.set("views", "src/views");

app.use(router);

// const app = express();
const server = http.createServer(app);
const io = socketIO(server);

// Serve static files
// app.use(express.static(__dirname + '/public'));

// Handle Socket.IO events
io.on('connection', (socket) => {
  console.log('A user connected');

  // Handle the "contactFormSubmitted" event
  socket.on('contactFormSubmitted', (formData) => {
    console.log(formData)
    console.log(formData.name)
    console.log(formData.phoneNumber)
    console.log(formData.email)
    console.log(formData.message)
    // Broadcast the form data to all connected clients
    io.emit('newContactForm', formData);
  });

  socket.on('disconnect', () => {
    console.log('A user disconnected');
  });
});

// Start the server
const port = 3000;
server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

// app.listen(PORT, () => {
//   console.log(`Server is listening on port ${PORT}`);
// });
