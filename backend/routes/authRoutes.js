import express from 'express';
import UserModel from "./models/userModel.js";

const userRouter = express.Router();

//register
app.post("/register", async (req, res) => {
    console.log(req.body);
    try {
      await UserModel.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
      });
      res.json({ status: "ok" });
    } catch (err) {
      res.json({ status: "error", error: "Duplicate email" });
    }
  });
  
  //login
  app.post("/login", async (req, res) => {
    const user = await UserModel.findOne({
      email: req.body.email,
      password: req.body.password,
    });
    if (user) {
      const token = jwt.sign(
        {
          name: user.name,
          email: user.email
        },
        'secret123'
      )
      return res.json({ status: "ok", user: token });
    } else {
      return res.json({ status: "error", user: false });
    }
  });

export default userRouter;
