import mongoose from "mongoose";

const patientSchema= new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            lowercase: true
        },
        age: {
            type: Number,
            required: true,
            min: [0, "Age must be a positive number"]
        },
        gender: {
            type: String,
            enum: ["M", "F", "O"]
        },
        bloodGroup: {
            type: String,
            enum: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"]
        },
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        },
        emergencyContact: {
            name: {
                type: String,
                required: true
            },
            contactNumber: {
                type: String,
                required: true
            }
        },
        admittedIn: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Hospital",
                required: true
            }
        ],
        medicalHistory: {
            type: String
        },
        currentMedications: [
            {
                type: String
            }
        ],
        allergies: [
            {
                type: String
            }
        ],
        assignedDoctors: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Doctor"
            }
        ]
    },{timestamps: true}
);

export const Patient= mongoose.model("Patient",patientSchema);