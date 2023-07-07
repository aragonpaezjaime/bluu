import { Router } from "express";
import { body } from "express-validator";
import { login, register } from "../controllers/auth.controller.js";
import { checarError } from "../middlewares/checarError.js";
const router = Router();

router.post(
  "/register",
  [body("email", "Email invalido").trim().isEmail().normalizeEmail()],
  [
    body("password", "passwors debe tener minimo 6 caracteres")
      .trim()
      .isLength({
        min: 6,
      }),
    body("repassword").trim(),
    body("password").custom((value, { req }) => {
      if (value !== req.body.repassword) {
        throw new Error("No coinciden las contraseñas");
      }
      return value;
    }),
  ],
  checarError,
  register
);
router.post(
  "/login",
  [body("email", "Email invalido").trim().isEmail().normalizeEmail()],
  checarError,
  login
);
export default router;
