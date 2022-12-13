const express = require("express");
const app = express();
const port = 5001;

const sheltersRouter = require("./routes/shelter");
const foodbanksRouter = require("./routes/foodbank");

app.use("/shelters", sheltersRouter);
app.use("/foodbanks", foodbanksRouter);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
