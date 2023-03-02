const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
const router = express.Router();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors({ origin: "*", methods: "GET, POST, PUT, DELETE, OPTIONS" }));

mongoose.set("strictQuery", true);
mongoose.connect(
  "mongodb://127.0.0.1:27017/stdProject",
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
  name: String,
  title: String,
  startDate: String,
  duration: String,
  day: String,
  status: String,
});

const User = new mongoose.model("StdProject", userSchema);
// updatedata in database
app.put("/stuProjects", (req, res) => {
  const { _id, ...updateData } = req.body;
  User.updateOne({ _id }, { $set: updateData }, (err, result) => {
    if (err) return console.error(err);
    res.json({ message: "Data updated" });
  });
});
// delete data from database
app.delete("/stuProjects/:id", (req, res) => {
  // Delete the project with the specified ID
  User.findByIdAndDelete({ _id: req.params.id }, (err, user) => {
    if (err) {
      res.send(err);
    } else {
      res.send({ message: "Successfully Deleted." });
    }
  });
});
// get data from database
app.get("/stuProjects", (req, res) => {
  User.find((error, data) => {
    if (error) {
      res.send(error);
    } else {
      res.send(data);
    }
  });
});

//Post data to database
app.post("/stuProjects", (req, res) => {
  const { name } = req.body;
  const { title } = req.body;
  const { startDate } = req.body;
  const { duration } = req.body;
  const { day } = req.body;
  const { status } = req.body;
  const user = new User({
    name,
    title,
    startDate,
    duration,
    day,
    status,
  });
  user.save((err) => {
    if (err) {
      res.send(err);
    } else {
      res.send({ message: "Successfully saved data." });
    }
  });
});

app.listen(8001, () => {
  console.log(`BE started at port 8001`);
});
