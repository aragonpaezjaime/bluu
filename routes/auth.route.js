import express from "express";
import { body } from "express-validator";
import { login, register } from "../controllers/auth.controller.js";
import { validarErrores } from "../middlewares/validarErrores.js";
const router = express.Router();

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
  validarErrores,
  register
);
router.post(
  "/login",
  [body("email", "Email invalido").trim().isEmail().normalizeEmail()],
  login
);

export default router;
