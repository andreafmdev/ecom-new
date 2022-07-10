import Joi from "joi";

export const emailSignUp_validate = Joi.object({
  email: Joi.string().email().required(),
  first_name: Joi.string().required(),
  last_name: Joi.string().required(),
  password: Joi.string().min(6).required(),
});



export const emailLogin_validate = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
});

