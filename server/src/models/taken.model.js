const mongoose = require("mongoose");

const takenSchema = new mongoose.Schema(
  {
    id: { type: Number, required: true },
    pill_name: { type: String, required: true },
    date: { type: String, required: true },
    time: { type: Number, required: true },
    when: { type: String, required: true },
    
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Taken = mongoose.model("taken", takenSchema);

module.exports = Taken;
