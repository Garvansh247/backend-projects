import mongoose from "mongoose";

const hospitalSchema= new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            lowercase: true
        },
        addressLine1: {
            type: String,
            required: true
        },
        addressLine2: {
            type: String
        },
        city: {
            type: String,
            required: true
        },
        state: {
            type: String,
            required: true
        },
        pinCode: {
            type: String,
            required: true
        },
        contactNumbers: [
            {
                type: String,
                required: true
            }
        ],
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true
        },
        website: {
            type: String
        },
        specializedIn: {
            type: [
                {
                    type: String,
                    required: true
                }
            ]
        },
        numberOfBeds: {
            type: Number,
            required: true,
            min: [0, "Number of beds must be a positive number"]
        },
        numberOfDoctors: {
            type: Number,
            required: true,
            min: [0, "Number of doctors must be a positive number"]
        },
        rating: {
            type: Number,
            min: [0, "Rating must be a positive number"],
            max: [5, "Rating cannot be more than 5"]
        },
        likes: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "User"
            }
        ]
    },{timestamps: true}
);

export const Hospital= mongoose.model("Hospital",hospitalSchema);