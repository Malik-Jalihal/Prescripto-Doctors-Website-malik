import mongoose from "mongoose";

const connectDB = async () => {
    try {
        mongoose.connection.on('connected', () => console.log("Database Connected"))
        mongoose.connection.on('error', (err) => console.error("Database connection error:", err))

        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })

    } catch (error) {
        console.error("Failed to connect to MongoDB:", error)
        process.exit(1)
    }

}

export default connectDB;

// Note: include the database name and options directly in MONGODB_URI.
// Example: mongodb+srv://user:pass@cluster0.xqmu5h4.mongodb.net/prescripto?retryWrites=true&w=majority