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

const allowedOrigins = process.env.ALLOWED_ORIGINS ? process.env.ALLOWED_ORIGINS.split(',').map(o => o.trim()) : ["http://localhost:5173", "https://prescripto-doctors-website-malik.onrender.com","http://localhost:5174"]

app.use(cors({
  origin: allowedOrigins,
  credentials: true
}));

// create a server

const server = express();

// configure CORS - allow all origins in development/deployment
// server.use(cors());
// app.use(cors({
//   origin: true, // Allow all origins
//   methods: ['GET','POST','PUT','DELETE','PATCH','OPTIONS'],
//   allowedHeaders: ['Content-Type','Authorization','atoken','token'],
//   credentials: true,
// }));

// explicitly handle pre‑flight for all routes
// app.options('*', cors());
 server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', '*');
  res.header('Access-Control-Allow-Headers', '*');
  // return ok preflight request.
  if (req.method === 'OPTIONS') {
    return res.sendStatus(200);
  }
  next();
}
  )

  
  


// api endpoints
app.use("/api/user", userRouter)
app.use("/api/admin", adminRouter)
app.use("/api/doctor", doctorRouter)

app.get("/", (req, res) => {
  res.send("API Working")
});

app.listen(port, () => console.log(`Server started on PORT:${port}`))
