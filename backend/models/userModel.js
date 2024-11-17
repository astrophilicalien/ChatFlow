import mongoose from "mongoose";

const userModel = mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true
    },
    pic : {
        type : String,
        default : "https://www.freepik.com/icons/user"
    }
}, {timestamps : true});

export const User = mongoose.model("User", userModel);