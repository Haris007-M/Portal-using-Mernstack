const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
mongoose.set("strictQuery", true);
mongoose.connect(
  "mongodb://127.0.0.1:27017/addTransaction",
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
  date: String,
  payOperation: String,
  description: String,
  amount: String,
});

const User = new mongoose.model("Transaction", userSchema);

app.get('/accounts', (req, res) => {
  User.find((error, data) => {
    if (error) {
      res.send(error);
    } else {
      res.send(data);
    }
  });
});




//Post data to database
app.post("/accounts", (req, res) => {
  const { date } = req.body;
  const { description } = req.body;
  const { payOperation } = req.body;
  const { amount } = req.body;
  const user = new User({
    date,
    payOperation,
    description,
    amount,
  });
  user.save((err) => {
    if (err) {
      res.send(err);
    } else {
      res.send({ message: "Successfully saved data." });
    }
  });
});

app.listen(8003, () => {
  console.log(`BE started at port 8003`);
});
