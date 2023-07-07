import { User } from "../models/users.js";
export const register = async (req, res) => {
  const { email, password } = req.body;
  try {
    const usuario = new User({ email, password });
    await usuario.save();
    return res.status(201).json({ ok: true });
  } catch (error) {
    if (error.code === 11000)
      return res.status(400).json({ msg: "error: email en uso" });
  }
  res.status(500).json({ mensaje: "Error de servidor" });
};

export const login = async (req, res) => {
  res.json({ ok: "Login" });
};
