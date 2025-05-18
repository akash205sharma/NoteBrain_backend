import express from 'express';
import { createServer } from 'http';
import { Server } from 'socket.io';
import runRoute from './routes/run.js';
import setupSocket from './socket.js';
import cors from 'cors';

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: { origin: '*' }
});

app.use(cors());
app.use(express.json());

app.use('/run', runRoute);
setupSocket(io);  // Socket.IO collaboration logic

const PORT = process.env.PORT || 4000;
httpServer.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
