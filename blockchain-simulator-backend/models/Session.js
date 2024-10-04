import mongoose from "mongoose";
const { Schema } = mongoose;

const BlockSchema = new Schema({
  index: Number,
  data1: String,
  data2: String,
  previousHash: String,
  hash: String,
});

const SessionSchema = new Schema(
  {
    sessionId: String,
    blocks: [BlockSchema],
  },
  { timestamps: true }
);

export default mongoose.model("Session", SessionSchema);
