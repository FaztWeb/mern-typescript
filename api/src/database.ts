import mongoose, { ConnectionOptions } from "mongoose";
import config from "./config";

(async () => {
  try {
    const mongooseOptions: ConnectionOptions = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      authSource: "admin",
      user: config.MONGO_USER,
      pass: config.MONGO_PASSWORD,
    };

    const db = await mongoose.connect(
      `mongodb://${config.MONGO_HOST}/${config.MONGO_DATABASE}`,
      mongooseOptions
    );

    console.log("Databse is connected to: ", db.connection.name);
  } catch (error) {
    console.error(error);
  }
})();
