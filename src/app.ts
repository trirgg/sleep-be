import express from "express";
import cors from "cors";
import { AppDataSource } from "./data-source";
import { User } from "./entity/User";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Initialize TypeORM connection
AppDataSource.initialize()
  .then(() => console.log("Database connected"))
  .catch((err) => console.error("Database connection error:", err));

// Routes
app.get("/", (req, res) => {
  res.send("Welcome to the Sleep Scheduler API!");
});

app.post("/users", async (req, res) => {
  const { username, email, password } = req.body;
  const user = new User();
  user.username = username;
  user.email = email;
  user.password = password;
  await AppDataSource.manager.save(user);
  res.status(201).send(user);
});

// Start server
app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
