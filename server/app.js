const express = require("express");
const app = express();
const port = 5001;
const logger = require("morgan");

// ---- Routes
const sheltersRouter = require("./routes/shelters");
const foodbanksRouter = require("./routes/foodbanks");
const safeinjectionsRouter = require("./routes/safeinjections");
const morgan = require("morgan");

// ---- Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(logger("dev"));

// ---- Redirection
app.use("/shelters", sheltersRouter);
app.use("/foodbanks", foodbanksRouter);
app.use("/safeinjections", safeinjectionsRouter);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
