import express from "express";
import { deleteUser, getAllUsers, getUserById, create } from "../controller/userController.js";

//Crear router
const route = express.Router();

route.post("/user", create);
route.get("/users", getAllUsers);
route.get("/users/:id", getUserById);
route.delete("/delete/user/id", deleteUser);

export default route;

