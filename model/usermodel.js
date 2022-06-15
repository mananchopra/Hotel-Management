const mongoose = required("mongoose");

const user = mongoose.Schema(
    {
        name: {
            type: String,
            require: true,
        },
        email:{
            type: String,
            require: true,
        },
        password:{
            type: String,
            require: true,
        },
        date_of_birth: {
            type: Date,
            require: true,
        },
        contact: {
            type: String,
            require: true,
        },
        
    }
)

