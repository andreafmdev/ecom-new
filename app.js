import express from "express";
import "./app/config/mongoose.config.js"
import { responseSend } from "./app/helpers/responseSend.js";
import rootRoute from "./app/routes/index.js";

const app = express();
app.use(express.json())

const port = process.env.PORT;

app.listen(port, () => {
  console.log(" == Connected To server ==");
});

app.use(["/health", "/ready"], (req, res) => {
  res.send({ ok: true });
});

app.use("/api", rootRoute);
app.use((error,req,res,next)=>{
  if (!error) { 
    return next();
  }
  responseSend(res, 400, false, error.message);

})
console.log("== Node Env ==", process.env.NODE_ENV);
