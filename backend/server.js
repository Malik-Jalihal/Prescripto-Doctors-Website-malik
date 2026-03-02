import express from "express"
import cors from 'cors'
import 'dotenv/config'
import connectDB from "./config/mongodb.js"
import connectCloudinary from "./config/cloudinary.js"
import userRouter from "./routes/userRoute.js"
import doctorRouter from "./routes/doctorRoute.js"
import adminRouter from "./routes/adminRoute.js"

// app config
const app = express()
const port = process.env.PORT || 4000
connectDB()
connectCloudinary()

// middlewares
app.use(express.json())

// configure CORS - allow requests from known frontends or from env
const rawAllowed = process.env.ALLOWED_ORIGINS || '';

// Always allow localhost for local testing (even in production deployment)
const localhostOrigins = [
  'http://localhost:5174', // admin front‑end in development
  'http://localhost:5173', // frontend in development
  'http://localhost:4000', // backend in development (if needed)
  'http://localhost:3000', // alternative frontend port
];

// Combine env origins with localhost origins
const envOrigins = rawAllowed
  ? rawAllowed.split(',').map(s => s.trim()).filter(Boolean)
  : [];

const allowedOrigins = [...new Set([...localhostOrigins, ...envOrigins])];

app.use(cors({
  origin: (origin, callback) => {
    // allow requests with no origin (Postman, mobile apps, same-site requests)
    if (!origin) return callback(null, true);

    // check if origin is in allowed list or wildcard is set
    if (allowedOrigins.includes('*') || allowedOrigins.includes(origin)) {
      return callback(null, true);
    }

    // If not in allowed list, block the request
    callback(new Error('CORS policy block - Origin not allowed'));
  },
  methods: ['GET','POST','PUT','DELETE','PATCH','OPTIONS'],
  allowedHeaders: ['Content-Type','Authorization','atoken','token'],
  credentials: true,
}));

// explicitly handle pre‑flight for all routes
app.options('*', cors());

// api endpoints
app.use("/api/user", userRouter)
app.use("/api/admin", adminRouter)
app.use("/api/doctor", doctorRouter)

app.get("/", (req, res) => {
  res.send("API Working")
});

app.listen(port, () => console.log(`Server started on PORT:${port}`))
