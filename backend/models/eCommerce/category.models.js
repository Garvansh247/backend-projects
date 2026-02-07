import mongoose from "mongoose";

const categorySchema= new mongoose.Schema(
    {
        name:{
            type: String,
            required: true,
            unique: true,
            lowercase: true
        },
        description:{
            type: String,
            required: true
        },
        // could have given image url as a field of type string but for now we will keep it simple
    },{timestaps: true}
);

export const Category = mongoose.model("Category",categorySchema);