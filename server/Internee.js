const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const nodemailer = require("nodemailer");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
mongoose.set("strictQuery", true);

mongoose.connect(
  "mongodb://127.0.0.1:27017/addInternee",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("DB connected");
    }
  }
);

const userSchema = new mongoose.Schema({
  interneeNo: String,
  name: String,
  email: String,
  duration: String,
  joinDate: String,
  technology: String,
  attendance: String,
  project: String,
  status: String,
});

const User = new mongoose.model("Internee", userSchema);
// updatedata in database
app.put("/students", (req, res) => {
  const { _id, ...updateData } = req.body;
  User.updateOne({ _id }, { $set: updateData }, (err, result) => {
    if (err) return console.error(err);
    res.json({ message: "Data updated" });
  });
});
// delete data from database
app.delete("/students/:id", (req, res) => {
  User.findByIdAndDelete({ _id: req.params.id }, (err, user) => {
    if (err) {
      res.send(err);
    } else {
      res.send({ message: "Successfully Deleted." });
    }
  });
});
// get data from database
app.get("/students", (req, res) => {
  User.find((error, data) => {
    if (error) {
      res.send(error);
    } else {
      res.send(data);
    }
  });
});

//Post data to database
app.post("/students", (req, res) => {
  const { interneeNo } = req.body;
  const { name } = req.body;
  const { email } = req.body;
  const { duration } = req.body;
  const { joinDate } = req.body;
  const { technology } = req.body;
  const { attendance } = req.body;
  const { project } = req.body;
  const { status } = req.body;
  const user = new User({
    interneeNo,
    name,
    email,
    duration,
    joinDate,
    technology,
    attendance,
    project,
    status,
  });
  user.save((err) => {
    if (err) {
      res.send(err);
    } else {
      res.send({ message: "Successfully saved data." });
    }
  });

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL,
      to: email,
      subject: "Invoice from EZILine",
      html: `
          <h1>Invoice to ${name}</h1> 
          
          <h5 style={color:"yellow"}>Name : ${name}</h5>
          <h5>Email : ${email}</h5>
          <h5>Duration : ${duration}</h5>
          <h5>Technology : ${technology}</h5>
          <h5>Status : ${status}</h5>
          
          `,
      // attachments: [
      //   {
      //     // use a buffer to send the file as an attachment
      //     filename: "invoice.pdf",
      //     content: Buffer.from(fs.readFileSync("invoice.pdf"), "binary"),
      //   },
      // ],
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log("Error" + error);
      } else {
        console.log("Email sent:" + info.response);
        res.status(201).json({ status: 201, info });
      }
    });
  } catch (error) {
    // console.log("Error" + error);
    res.status(201).json({ status: 401, error });
  }
});

app.listen(8002, () => {
  console.log(`BE started at port 8002`);
});
