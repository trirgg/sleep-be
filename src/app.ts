import express from "express";
import cors from "cors";
import morgan from 'morgan'
import { AppDataSource } from "./data-source";
import userRoute from "./routes/userRoute";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(morgan("dev"))

// Initialize TypeORM connection
AppDataSource.initialize()
  .then(() => console.log("Database connected"))
  .catch((err) => console.error("Database connection error:", err));

// Routes
app.get("/", (req, res) => {
  res.send("Welcome to the Sleep Scheduler API!");
});

app.use("/users", userRoute)

// Start server
app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
