import mongoose from "mongoose";

export default async function ConnectionToDatabase() {
    try {
        
        await mongoose.connect(process.env.MONGOURL)
        console.log('connected to mongoose')

    } catch (err) {
        console.log(err)
    }
}