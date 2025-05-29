import express from 'express';
const app = express();

app.get("/", (req, res) => {
    res.send("Hello World!")
})

app.listen(3000, () => {
    console.log(`Subscription Tracker Server On. PORT https://localhost:3000`);
})
