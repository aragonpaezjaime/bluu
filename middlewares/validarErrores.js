import { validationResult } from "express-validator";
export const validarErrores = (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(400).json({ errores: errors.array() });
  }
};
