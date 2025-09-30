const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/parken-platzfinder', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Beispiel Route
app.get('/api/parkplaetze', (req, res) => {
  res.send([{ id: 1, name: 'Parkplatz A', vorrat: true }]);
});

io.on('connection', (socket) => {
  console.log('Ein Benutzer verbunden');
  // Hier können Sie Echtzeitdaten senden
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`Server läuft auf Port ${PORT}`);
});
