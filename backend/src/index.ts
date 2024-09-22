import express, { Application, Request, Response, Router } from "express";
import "dotenv/config";
import { Server } from "socket.io";
import { createServer } from "http";
import cors from "cors";
const app: Application = express();
const PORT = process.env.PORT || 7000;
import router from "./routes/index.js";
import { setupSocket } from "./socket.js";
import { createAdapter } from "@socket.io/redis-streams-adapter";
import redis from "./config/redis.config.js";


const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*",
  },
  // adapter:createAdapter(redis)
});


setupSocket(io);
export { io };

// * Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req: Request, res: Response) => {
  return res.send("It's working 🙌");
});

app.use("/api",router);

server.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));
