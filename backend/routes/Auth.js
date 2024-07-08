//importing the routes controller 
import { login, register, pinVerification, VerifyOTP } from "../controller/Auth.js";
import { Router } from "express";

const router = Router();

router.post('/login', login);
router.post('/register', register);
router.post('/pinVerification',pinVerification)
router.post('/VerifyOTP',VerifyOTP)

export default router;