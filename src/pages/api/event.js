import nodemailer from "nodemailer";

export default async function handler(req, res) {
  const { firstName, lastName, email, message, event } = req.body;
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: "navwebdev2@gmail.com",
        pass: "gzlduanoellhlssa",
      },
    });

    var mailOptions = {
      from: "navwebdev2@gmail.com",
      // to: "navwebdev2@gmail.com ",
      to: "navwebdev2@gmail.com ",
      subject: `New Event Inquiry by ${firstName}`,
      text: ` 
        Name:${firstName} ${lastName}
        Email:${email}
        Event:${event}
        Message:${message}
         `,
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
        res.status(400).json({
          err: error,
          message: "Message Not Sent ",
          data: null,
        });
      } else {
        console.log("Email sent: " + info.response);

        res.status(200).json({
          err: null,
          message: "Message Sent Successfully",
          data: null,
        });
      }
      res.status(200).json({
        savedJoin,
        err: null,
        message: "Message Sent Successfully",
        data: null,
      });
    });
  } catch (err) {
    res.status(400).json({
      err: err.message,
      message: "Something Went Wrong",
      data: null,
    });
  }
}
