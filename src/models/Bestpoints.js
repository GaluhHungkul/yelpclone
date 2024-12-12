import mongoose from "mongoose";

const bestpointSchema = mongoose.Schema({
    title : {
        type : String,
        required : true
    },
    price : {
        type : Number,
        required : true
    },
    description : {
        type : String,
        required : true
    },
    location : {
        type : String,
        required : true
    },
    image : {
        type : String,
        required : true
    },
})

const Bestpoint = mongoose.models.Bestpoint || mongoose.model('Bestpoint', bestpointSchema)

export default Bestpoint