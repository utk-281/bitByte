const express = require("express");
const cors = require("cors");

const cookieParser = require("cookie-parser");
require("dotenv").config();

const userRoutes = require("./src/routers/user.routes");
const foodRoutes = require("./src/routers/food.routes");
const cartRoutes = require("./src/routers/cart.routes");
const orderRoutes = require("./src/routers/order.routes");
const error = require("./src/middlewares/error.middleware");
const { authenticate } = require("./src/middlewares/authenticate.middleware");

const app = express();

// let data = app.use(express.static("src/uploads/temp"));
// static() --> it is used to server static files(html, css, images, js, etc...)
//! middleware section
// app.use(express.static("src/uploads/temp"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
    // methods: ["GET", "POST"],
  })
);

app.use("/users/v1", userRoutes);
app.use("/foods/v1", authenticate, foodRoutes);
app.use("/cart/v1", authenticate, cartRoutes);
app.use("/orders/v1", authenticate, orderRoutes);

//! error middleware ==> use it at last
app.use(error);

module.exports = app;
