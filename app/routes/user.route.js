import { Router } from "express";
import { emailSignUp, emailLogin } from "../controllers/user.controller.js";
import { reqValidator } from "../middlewares/req.validator.js";
import {
  emailSignUp_validate,
  emailLogin_validate,
} from "../validators/user.validator.js";
const router = Router();

router.post(
  "/email/signup",
  reqValidator(emailSignUp_validate),
  (req, res, next) => {
    emailSignUp(req, res, next);
  }
);

router.post("/email/login", reqValidator(emailLogin_validate), (req, res, next) => {
  emailLogin(req, res, next);
});
export default router;
