import express from "express";
import mongoose from "mongoose";
import morgan from "morgan";
import router from "./routes/productRoutes.js";

const app=express();

app.use(morgan('dev'));
app.use(express.json());
app.use('/api/v1',router);

mongoose.connect('mongodb+srv://Snehal:Snehal1234@mern-todo.va7rcii.mongodb.net/Products?retryWrites=true&w=majority')
.then(() => console.log("DB connected"))
.catch((err)=> console.log("Db error=>",err))

app.listen(8000,()=>console.log("working on port 8000"));