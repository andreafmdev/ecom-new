export const responseSend = (res, status, success, message, data) => {
    return res.status(status).send({
      success,
      message,
      data,
    });
  };
  