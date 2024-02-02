import nodemailer from "nodemailer";

export default async function handler(req, res) {
  const {
    firstName,
    lastName,
    email,
    phone,
    departureCity,
    arrivalCity,
    departureDate,
    numberOfPassengers,
    customMessage,
  } = req.body;
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
      subject: `New Booking by ${firstName}`,
      text: ` 
        Name:${firstName} ${lastName}
        Email:${email}
        Phone:${phone}
        Departure City:${departureCity}
        Arrival City:${arrivalCity}
        Departure Date:${departureDate}
        Number of Passengers:${numberOfPassengers}
        Custom Message:${customMessage}
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
