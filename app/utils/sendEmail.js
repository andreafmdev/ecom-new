import sgMail from "@sendgrid/mail";

const API_KEY = process.env.SENDGRID_EMAIL_API_KEY

sgMail.setApiKey(API_KEY);

export const sendWelcomeEmail = async (firstName, lastName, email) => {
  try {
    const emailToSend = {
      to: email,
      from: {
        name: "Ecomm",
        email: "freddi.dev@gmail.com",
      },
      subject: "Welcome to our website",
      text: `Welcome ${
        lastName + " " + firstName
      }, To our very first email from sendgrid`,
      html: `<h3>Welcome ${
        lastName + " " + firstName
      }, To our very first email from sendgrid</h3>`,
    };

    const mail = await sgMail.send(emailToSend);
    console.log(mail)

  } catch (error) {
      console.log(error)
    return;
  }
};
