//importing the routes controller 
import { login, register } from "../controller/Auth.js";
import { Router } from "express";

const router = Router();

router.post('/login', login);
router.post('/register', register);

export default router;