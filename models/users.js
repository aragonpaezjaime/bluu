import mongoose from "mongoose";
import bcryptjs from "bcryptjs";
const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    lowercase: true,
    index: { unique: true },
  },
  password: {
    type: String,
    required: true,
  },
});
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  try {
    const salto = await bcryptjs.genSalt(10);
    this.password = await bcryptjs.hash(this.password, salto);
    next();
  } catch (error) {}
});
export const User = mongoose.model("User", userSchema);
