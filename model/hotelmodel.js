const mongoose = require("mongoose");

const Hotel = new mongoose.Schema(
    {
        
        name: {
            type: String,
            required: true,
        },
        city: {
            type: String,
            required: true,
        },
        address : {
            type: String,
            require: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        
        contact: {
            type: unique,
            required: true,
            unique: true,
        },
        
       

    },
    {timestamps: true}
);