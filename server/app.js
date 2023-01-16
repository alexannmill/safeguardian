const express = require("express");
const app = express();
const port = 3011;
const logger = require("morgan");

// ---- Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(logger("dev"));

// ---- Routes
const sheltersRouter = require("./routes/shelters");
const foodbanksRouter = require("./routes/foodbanks");
const safeinjectionsRouter = require("./routes/safeinjections");


// ---- Redirection
app.use("/shelters", sheltersRouter);
app.use("/foodbanks", foodbanksRouter);
app.use("/safeinjections", safeinjectionsRouter);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));


module.exports = app; 