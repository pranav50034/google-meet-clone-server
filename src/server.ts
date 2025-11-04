import mongoose from "mongoose";
import config from "./config";
import app from "./app";

const startServer = async () => {
  try {
    await mongoose.connect(config.mongoUri);
    console.log("✅ MongoDB connected");

    app.listen(config.port, () => {
      console.log(`🚀 Server running on port ${config.port}`);
    });
  } catch (error) {
    console.error("❌ Error connecting to MongoDB:", error);
    process.exit(1);
  }
};

startServer();
