//importing the routes controller 
import { login, register, pinVerification } from "../controller/Auth.js";
import { Router } from "express";

const router = Router();

router.post('/login', login);
router.post('/register', register);
router.post('/pinVerification',pinVerification)

export default router;