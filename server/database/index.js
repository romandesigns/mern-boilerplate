// Dependencies
import mongoose from "mongoose";

const appDb = () => {
  mongoose
    .connect(process.env.DB_HOST, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: true })
    .then(() => console.log("Connected to DB"))
    .catch((error) => console.log(error));
};

export default appDb;
