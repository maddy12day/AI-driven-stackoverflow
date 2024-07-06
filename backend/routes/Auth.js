//importing the routes controller 
import { login, register } from "../controller/Auth";
import { Router } from "express";

const router = Router();

router.post('/login',login)
router.post('/register',register)