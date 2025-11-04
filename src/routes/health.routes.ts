import express from "express";
import mongoose from "mongoose";

const router = express.Router();

router.get("/", async (_req, res) => {
  const dbStatus = mongoose.connection.readyState === 1 ? "up" : "down";

  res.status(200).json({
    status: "ok",
    uptime: process.uptime(),
    database: dbStatus,
    timestamp: new Date().toISOString(),
  });
});

export default router;
