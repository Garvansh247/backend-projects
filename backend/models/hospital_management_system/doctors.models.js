import mongoose from "mongoose";

const hospitalAndWorkingHoursSchema= new mongoose.Schema(
    {
        hospitalId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Hospital",
            required: true
        },
        workingHours: {
            type: String,
            required: true
        }
    },{timestamps: true}
);

const doctorSchema= new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            lowercase: true
        },
        specialization: [
            {
                type: String,
                required: true
            }
        ],
        workAt: [hospitalAndWorkingHoursSchema],
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        },
        yearsOfExperience: {
            type: Number,
            required: true,
            min: [0, "Years of experience must be a positive number"]
        },
        ratings: {
            type: Number,
            min: [0, "Rating must be a positive number"],
            max: [5, "Rating cannot be more than 5"]
        },
        patientsTreated: {
            type: Number,
            min: [0, "Patients treated must be a positive number"]
        }
    },{timestamps: true}

);

export const Doctor= mongoose.model("Doctor",doctorSchema);