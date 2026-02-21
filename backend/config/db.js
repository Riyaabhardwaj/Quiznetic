import mongoose from "mongoose";

export const connectDB=async()=>{
    await mongoose.connect('mongodb+srv://riyubhardwaj11_db_user:quizapp14@cluster0.g9pflxs.mongodb.net/QuizApp').then(()=>{console.log('DB CONNECTED')})
}