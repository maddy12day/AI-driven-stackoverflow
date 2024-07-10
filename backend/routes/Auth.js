//importing the routes controller 
import { login, register, pinVerification, VerifyOTP, forgotPassword } from "../controller/Auth.js";
import { Router } from "express";

const router = Router();

router.post('/login', login);
router.post('/register', register);
router.post('/pinVerification',pinVerification)
router.post('/VerifyOTP',VerifyOTP)
router.patch('/forgotPassword',forgotPassword)

export default router;