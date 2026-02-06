import mongoose from 'mongoose';

const todosSchema= new mongoose.Schema({
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

export const Todos=mongoose.model("Todos",todosSchema);