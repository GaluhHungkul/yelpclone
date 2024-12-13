import mongoose from "mongoose";
import { stringifyUseCacheCacheStore } from "next/dist/server/resume-data-cache/cache-store";

const komentarSchema = mongoose.Schema({
    user : {
        type : String,
        required : true
    },
    message : {
        type : String,
        required : true
    },
    date : {
        type : Date,
        default : Date.now
    },
    formattedDate : {
        type : String
    }
})

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
    komentar : {
        type : [komentarSchema],
        default : []
    }
})

const Bestpoint = mongoose.models.Bestpoint || mongoose.model('Bestpoint', bestpointSchema)

export default Bestpoint