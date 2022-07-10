import { responseSend } from "../helpers/responseSend.js";
const options = {
    errors: {
      wrap: {
        label: "",
      },
    },
  };
export const reqValidator = (schema) => {
  return async function (req, res, next) {
    try {
      if (req.method === "GET" || req.method === "DELETE") {
        const validated = await schema.validateAsync(req.query, options);
        req.query = validated;
        next();
      } else if (["POST", "PUT", "PATCH"].includes(req.method)) {
        const validated = await schema.validateAsync(req.body, options);
        req.body = validated; 
        next();
      }
    } catch (error) {
        console.log(error);
      responseSend(res, 400, false, error.message);
    }
  };
};
