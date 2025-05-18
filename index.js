import express from "express";
import dotenv from "dotenv";
import connectDB from "./database/db.js";
import userRoutes from "./routes/userRoute.js";
import mediaRoute from "./routes/mediaRoute.js";
import courseRoute from "./routes/courseRoute.js";
import purchasecourseRoute from "./routes/purchaseCourseRoute.js";
import courseProgressRoute from "./routes/courseProgressRoute.js";
import cookieParser from 'cookie-parser';
import cors from 'cors';



dotenv.config({});

connectDB();
const app = express();

const PORT = process.env.PORT || 3000;

// default middleware
app.use(express.json());
app.use(cookieParser());

app.use(cors({
    origin:"http://localhost:5174",
    credentials:true
}));

// api
app.use("/api/v1/user", userRoutes);
app.use("/api/v1/media", mediaRoute);
app.use("/api/v1/course", courseRoute);
app.use("/api/v1/purchase", purchasecourseRoute);
app.use("/api/v1/progress", courseProgressRoute);

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
})

