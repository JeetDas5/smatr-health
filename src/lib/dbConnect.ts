import mongoose from "mongoose";

export async function connect() {
  try {
    mongoose.connect(process.env.MONGO_URI!);
    const connection = mongoose.connection;

    connection.on("connected", () => {
      console.log("Connected to MongoDB");
    });

    connection.on("error", (err) => {
      console.log(
        "MongoDB connection error. Please make sure db is up and running",
        +err
      );
      process.exit();
    });
  } catch (error) {
    console.log("Something went wrong in connecting to db");
    console.log(error);
  }
}
