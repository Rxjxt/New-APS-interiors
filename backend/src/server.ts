import "dotenv/config";

import app from "./app";
import connectDB from "./config/database";

const PORT = process.env.PORT || 5000;

const startServer = async () => {
  try {
    await connectDB();

    app.listen(PORT, () => {
      console.log(`🚀 Server running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("Server Startup Error:", error);
    process.exit(1);
  }
};

startServer();