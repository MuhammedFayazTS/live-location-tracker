import express from "express";
import http from "http";
import { Server } from "socket.io";
import path, { dirname } from "path";
import { fileURLToPath } from "url";

const app = express();

const server = http.createServer(app);

const io = new Server(server);

app.set("view engine", "ejs");
const __dirname = path.dirname(fileURLToPath(import.meta.url));
app.use(express.static(path.join(__dirname, "public")));

io.on("connection", (socket) => {
  socket.on("send-location", (data) => {
    io.emit("recieve-location", { id: socket.id, ...data });
  });

  socket.on("disconnect", () => {
    io.emit("user-disconnected", socket._id);
  });

  console.log("connected");
});

app.get("/", (req, res) => {
  res.render("index");
});

export { server };
