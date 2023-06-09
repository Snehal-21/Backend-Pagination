import mongoose from "mongoose";
import {Schema} from "mongoose";

const product=new Schema({
    name:String,
    price:Number,
    category:String,
    color:String,
    brand:String,
    size:String
});

export default mongoose.model("Products",product);