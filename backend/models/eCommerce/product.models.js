import mongoose from "mongoose";

const productSchema= new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            unique: true,
            lowercase: true
        },
        description: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: true,
            min: [0, "Price must be a positive number"]
        },
        category: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Category",
            required: true
        },
        stock: {
            type: Number,
            required: true,
            min: [0, "Stock must be a positive number"]
        },
        productImage: {
            type: String,
            required: true,
        },
        owner: { // here owner of product means the user who created the product not the owner of the product in terms of who bought it
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        }
    },{timestamps: true}
);

export const Product = mongoose.model("Product",productSchema);