const mongoose = require("mongoose");

const booking = mongoose.Schema(
    {
        customer_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "user",
            required: true,
          },
          
          room_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "room",
            required: true,
          },
        chek_in_date:{
            type: Date,
            required: true,
        },
        chekout_date:{
            type: Date,
            required: true,
        },
    
    },
    {timestamps : true}
)