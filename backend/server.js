import express from "express";
import { chats } from "./data/data.js";
// import cors from "cors";
// app.use(cors());
import dotenv from "dotenv";
dotenv.config();
const PORT = process.env.PORT || 5000;
const app = express();

app.get('/', (req, res)=>{
    res.send("Api is running")
});

app.get("/api/chat", (req, res)=>{
    res.send(chats);
});

app.get("/api/chat/:id", (req, res)=>{
    console.log(req);
    const singleChat = chats.find((c) => c._id === req.params.id);
    res.send(singleChat);
});

app.listen(PORT, console.log(`App is listening at port ${PORT}`));