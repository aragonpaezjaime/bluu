import { validationResult } from "express-validator";
export const register = (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(400).json({ errores: errors.array() });
  }
  console.log(req.body);
  res.json({ ok: register });
};

export const login = (req, res) => {
  res.json({ ok: true });
};
