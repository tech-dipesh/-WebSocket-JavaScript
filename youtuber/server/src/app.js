"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const http_1 = require("http");
const app = (0, express_1.default)();
const server = (0, http_1.createServer)(app);
app.use((0, cors_1.default)({
    origin: "https://localhost:5173",
    methods: ["GET", "POST"],
    credentials: true
}));
// const io=new Server(server, {
//   cors:
// })
const port = 9000;
app.get("/", (req, res) => {
    console.log("hello port is running like usain bolt.");
    res.send("hello world");
});
io.on('connection', (socket) => {
    console.log("user is connected successfully");
    console.log("id", socket.id);
});
server.listen(port, (req, res) => {
    console.log("App is lisening to the", port);
});
