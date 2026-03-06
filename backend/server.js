import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/mongodb.js";
import connectCloudinary from "./config/cloudinary.js";
import userRouter from "./routes/userRoute.js";
import doctorRouter from "./routes/doctorRoute.js";
import adminRouter from "./routes/adminRoute.js";

// app config
const app = express();
const port = process.env.PORT || 4000;

// connect services
connectDB();
connectCloudinary();

// middlewares
app.use(express.json());

// allowed origins
const allowedOrigins = [
  "http://localhost:5173",
  "http://localhost:5174",
  "https://prescripto-doctors-website-malik-gl.vercel.app",
  "https://prescripto-doctors-website-malik.onrender.com",
  "https://prescripto-doctors-website-malik.vercel.app"
];

// CORS configuration
app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
    allowedHeaders: ["Content-Type", "Authorization", "token", "atoken"]
  })
);

// handle preflight requests
app.options("*", cors());

// API routes
app.use("/api/user", userRouter);
app.use("/api/admin", adminRouter);
app.use("/api/doctor", doctorRouter);

// test route
app.get("/", (req, res) => {
  res.send("API Working");
});

// start server
app.listen(port, () => {
  console.log(`Server started on PORT: ${port}`);
});
