const mongoose = require("mongoose");

const homestaySchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },

        location: {
            type: String,
            required: true,
        },

        price: {
            type: Number,
            required: true,
        },

        image: {
            type: String,
           
        },

        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

const Homestay = mongoose.model("Homestay", homestaySchema);

module.exports = Homestay;