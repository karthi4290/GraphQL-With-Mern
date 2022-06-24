const mongoose = require("mongoose");

const connectDB = async () => {
  const conn = await mongoose.connect(
    "mongodb+srv://karthi429:karthi429@nodeexpressprojects.5t6mc.mongodb.net/?retryWrites=true&w=majority"
  );

  console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline.bold);
};

module.exports = connectDB;
