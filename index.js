const express = require("express");
const db = require("./db");
const Image = require("./image/model");
const cors = require("cors");
const parser = require("body-parser");
const imageRouter = require("./image/router");
const authRouter = require("./auth/router");
const userRouter = require("./user/router");

const app = express();
const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Listening on port ${port}`));
const corsMiddleware = cors();
const parserMiddleware = parser.json();
app.use(corsMiddleware);
app.use(parserMiddleware);
app.use(imageRouter);
app.use(authRouter);
app.use(userRouter);
