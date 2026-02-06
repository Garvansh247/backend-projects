import mongoose from 'mongoose';

const userSchema= new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: [true, "Password is required"],
        minLength: [6, "Password must be atleast 6 characters long"]
    }

}
,{timestamps: true})

export const User= mongoose.model("User",userSchema); // User written here in the strings will be used while giving ref in the model