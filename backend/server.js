const app = require("./app");
const { connectDB } = require("./src/config/database");

connectDB()
  .then(() => {
    app.listen(process.env.PORT, (err) => {
      if (err) console.log("error while starting the server....");
      console.log("server running.....");
    });
  })
  .catch((err) => {
    console.log("error occurred while connecting to database");
    console.log(err);
    process.exit(1); // if any error occurs, then exit the application
  });
//! default command ==> npm command_name
//! user defined command ==> npm run command_name

//! render ==>
//? 1) select web services to deploy backend
//? 2) select the github repo which you want to deploy
//? 3) select the branch which you want to deploy
//? 4) select the root dir
//? 5) build command ==> npm i
//? 6) start command ==> npm start
//? 7) add .env variables
//? 8) before deploying make sure you are connected to atlas, and in network access set allow access from anywhere
//? 9) deploy

//! https://www.youtube.com/watch?v=_4CPp670fK4 ==> eCommerce project
