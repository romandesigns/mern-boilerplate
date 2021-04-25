// Dependencies
import mongoose from "mongoose";

const HomeSchema = new mongoose.Schema(
  {
    title: {
      type: String,
    },
  },
  { timestamps: true }
);

const Home = mongoose.model("Hose", HomeSchema);
export default Home;
