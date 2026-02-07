import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
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
            lowercase: true
        },
        password: {
            type: String,
            required: [true, "Password is required"],
            minlength: [6, "Password must be at least 6 characters long"]
        },
        role: {
            type: String,
            enum: ["admin", "doctor", "patient"],
            default: "patient"
        },
        profilePicture: {
            type: String
        },
        contactNumber: {
            type: String,
            required: true
        },
        // hospital: {
        //     type: mongoose.Schema.Types.ObjectId,
        //     ref: "Hospital",
        //     required: function() {
        //         return this.role === "doctor";
        //     }
        // }
        // address: {
        //     type: String,
        //     required: function() {
        //         return this.role === "patient";
        //     }
        // },
        // specialization: {
        //     type: String,
        //     required: function() {
        //         return this.role === "doctor";
        //     }
        // },
        
    }, {timestamps: true}
);

export const User= mongoose.model("User",userSchema);