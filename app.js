import express from 'express';
import { PORT } from './config/env.js';
const app = express();

app.get("/", (req, res) => {
    res.send("Hello World!")
})

app.listen(PORT || 5500, () => {
    console.log(`Subscription Tracker Server On. PORT http://localhost:${PORT || 5500}`);
})