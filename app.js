const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const port = process.env.PORT || 8000;
require('dotenv').config();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "public")));

app.set("views", path.join(__dirname, "./server/views"));
app.set("view engine", "ejs");

console.time('start')
mongoose.connect(
 "mongodb://127.0.0.1:27017/altTrack", {
   connectTimeoutMS: 1000 * 60 * 5,
   poolSize: 10,
   family: 4
 },
 function(err, connection) {
  console.timeEnd('start');
  if (err) throw err;
  else console.log("connected to mongodb");
 }
)

if (process.env.NODE_ENV === "development") {
 var webpack = require("webpack");
 var webpackConfig = require("./webpack.config");
 var compiler = webpack(webpackConfig);

 app.use(
  require("webpack-dev-middleware")(compiler, {
   noInfo: true,
   publicPath: webpackConfig.output.publicPath,
  })
 );

 app.use(require("webpack-hot-middleware")(compiler));
}


app.use("/api/v1", require("./server/routes/api"));
// TODO: Refactor this and move it to api.
app.use("/users", require("./server/routes/user"));

app.use(require('./server/routes/index'));

app.listen(port, () => {
 console.log(`server is running on http://localhost:${port}`);
});
