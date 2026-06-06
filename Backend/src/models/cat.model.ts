import mongoose, { mongo } from "mongoose";
import type { ICat } from "../types/cats.types.ts";

const catSchema = new mongoose.Schema<ICat>({
    name:{
        type: String,
        required: true
    },
    breed:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    lifeSpan:{
        type: Number,
        default: 1
    },
    energyLevel:{
        type: String,
        required: true
    },
    kidsFriendly: {
        type: Boolean,
        default: true
    },
    appartmentFriendly: {
        type: Boolean,
        default: true
    },
    image: String,
    color: String,
},{
    timestamps: true
});

const catModel = mongoose.model("cat", catSchema);

export default catModel;