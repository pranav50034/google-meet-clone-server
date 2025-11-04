import { Router } from "express";
import { loginSchema, registerSchema } from "../validators/auth.validator";
import { validate } from "../middlewares/validation.middleware";
import { login, register } from "../controllers/auth.controller";

const router = Router();

router.post("/login", validate(loginSchema), login);
router.post("/register", validate(registerSchema), register);

export default router;
