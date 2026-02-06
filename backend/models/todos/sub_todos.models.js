import mongoose from 'mongoose';

const subtodosSchema= new mongoose.Schema({
    content: {
        type: String,
        required: true,
        minLength: [1,"Content must be atleast 1 character long"]
    },
    complete: {
        type: Boolean,
        default: false    
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
},{timestamps: true});

export const Subtodos=mongoose.model("Subtodos",subtodosSchema);