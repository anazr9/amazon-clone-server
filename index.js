const express = require("express");
const mongoose = require("mongoose");
const adminRouter = require("./routes/admin");
//Imports from other files
const authRouter = require("./routes/auth");
const productRouter = require("./routes/product");
const userRouter = require("./routes/user");
//Init
const app = express();
const PORT = process.env.port || 3000;
const DB = "";
//middleware
app.use(express.json());
app.use(authRouter);
app.use(adminRouter);
app.use(productRouter);
app.use(userRouter);
//connections
mongoose
  .connect(DB)
  .then(() => {
    console.log("Connection Successfully with database");
  })
  .catch((e) => {
    console.log(e);
  });
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Connected at port ${PORT}`);
});
// pVCdMjTEXG82yCgk
