import express from "express";
import router from "./router.js";

const app = express();

const port = 800;

app.listen(port, (error) => {
  error
    ? console.log(error)
    : console.log(`your server is running at http://localhost:` + port);
});
