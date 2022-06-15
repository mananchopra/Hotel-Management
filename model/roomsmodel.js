const mongoose = require("mongoose");

const roomSchema = new mongoose.Schema(
    {
      room_name: {
        type: String,
        required: true,
      },
      total_occupants: {
        type: Number,
        required: true,
      },
      hotel_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "hotel",
        required: true,
      },
      price: {
        type: Number,
        required: true,
      },
      status: {
        type: String,
        enum: ["available", "reserved", "occupied"],
        default: "available",
        required: true,
      },
    },
    { timestamps: true }
);