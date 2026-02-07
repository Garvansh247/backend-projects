import mongoose from "mongoose";

const orderItemsSchema = new mongoose.Schema(
    {
        product: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Product",
            required: true
        },
        quantity: {
            type: Number,
            required: true,
            min: [1, "Quantity must be at least 1"]
        },
        price: {
            type: Number,
            required: true,
            min: [0, "Price must be a positive number"]
        }
    }
);

const orderSchema= new mongoose.Schema(
    {
        customer: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        },
        products: {
            type: [orderItemsSchema],
            required: true,
            validate: [arrayLimit, "Order must have at least one product"] // here arrayLimit is a custom validator function that checks if the products array has at least one item
        },
        totalAmount: {
            type: Number,
            required: true,
            min: [0, "Total amount must be a positive number"]
        },
        status: {
            type: String,
            enum: ["pending", "shipped", "delivered", "cancelled"],
            default: "pending"
        },
        shippingAddress: {
            type: String,
            required: true
        },
        paymentMethod: {
            type: String,
            enum: ["credit_card", "paypal", "cash_on_delivery"],
            required: true
        },
        paymentStatus: {
            type: String,
            enum: ["pending", "paid", "failed"],
            default: "pending"
        },
        deliveredAt: {
            type: Date,
            default: null
        },
        cancelledAt: {
            type: Date,
            default: null
        }
    },{timestamps: true}
);

export const Order = mongoose.model("Order",orderSchema);