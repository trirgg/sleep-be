import { Router } from "express";
import { AppDataSource } from "../data-source";
import { User } from "../entity/User";

const userRoute = Router()

// Get all users
userRoute.get("/", async (req, res) => {
  const users = await AppDataSource.getRepository(User).find();
  res.json(users);
});

// Create a new user
userRoute.post("/", async (req, res) => {
  const { username, email, password } = req.body;
  
  const user = new User();
  user.username = username;
  user.email = email;
  user.password = password;
  await AppDataSource.manager.save(user);
  res.status(201).json(user);
});

export default userRoute;
