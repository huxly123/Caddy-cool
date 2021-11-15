const mongoose = require('mongoose');

const remainingSchema = new mongoose.Schema(
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

const Remaining = mongoose.model("remaining", remainingSchema);

module.exports=Remaining