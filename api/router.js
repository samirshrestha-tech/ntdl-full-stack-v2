import express from "express";

export const router = express.Router();
// creating a get method to get and respond to the app for
router.get("/", (req, res) => {
  res.json({
    task: "coding",
    status: "success",
  });
});
