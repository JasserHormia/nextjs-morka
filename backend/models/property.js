import mongoose from "mongoose";

const productSchema = new mongoose.Schema ({
   name: {
    type: "string",
    required: [true , 'please enter property name']
   } ,
   description: {
    type: "string",
    required: [true , 'please enter property description']
   } ,
   price: {
    type: "number",
    required: [true , 'please enter property price']
   } ,
   areasize: {
    type: "string",
    required: [true , 'please enter property areasize SqFt']
   } ,


})