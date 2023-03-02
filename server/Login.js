require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const app = express();
const passport = require('passport');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cors());
// Configure session and cookie parser
app.use(cookieParser());
app.use(session({
  secret: 'process.env.SESSION_SECRET',
  resave: true,
  saveUninitialized: true
}));

mongoose.set("strictQuery", false);
mongoose.connect(
  "mongodb://127.0.0.1:27017/eziLineLogin",
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
  firstname: String,
  lastname: String,
  email: String,
  password: String,
  changepassword: String,
  role: {
    type: String,
    enum: ["user", "admin"],
  },
  name: String,
  googleId: String,
});

const User = new mongoose.model("User", userSchema);
// for sign up and login with google
// Configure passport for Google authentication
passport.use(new GoogleStrategy({
  clientID: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
  callbackURL: process.env.CLIENT_URL,
},
function(accessToken, refreshToken, profile, cb) {
  // Save the user's profile to the database
  User.findOneAndUpdate(
    { googleId: profile.id },
    { $set: { name: profile.displayName, email: profile.emails[0].value } },
    { upsert: true, new: true },
    function(err, user) {
      return cb(err, user);
    }
  );
}
));
passport.serializeUser(function(user, done) {
  done(null, user._id);
});

passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
    done(err, user);
  });
});
// Configure routes
app.get('/api/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));
app.get('/api/auth/google/callback', passport.authenticate('google', { failureRedirect: '/login' }), (req, res) => {
  res.redirect('http://localhost:9003/auth/google/callback');
});

//Login
app.post("/login", async (req, res) => {
  try {
    const { email } = req.body;
    const { password } = req.body;
    const user = await User.findOne({ email: email });
    if (!user) throw new Error("User not registered");
    if (password !== user.password) throw new Error("Password didn't match");
    const SECRET_KEY = process.env.SECRET_KEY;
    const payload = { email, role: user.role };
    const role = user.role;
    console.log(role);
    const options = {
      expiresIn: "1h",
    };
    const api_token = jwt.sign(payload, SECRET_KEY, options);
    res.send({ api_token, message: "Login Successfull" });
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
});

// For verifying token
app.get("/verify_token", (req, res) => {
  const api_token = req.headers["authorization"];
  const SECRET_KEY = process.env.SECRET_KEY;
  if (api_token) {
    jwt.verify(api_token, SECRET_KEY, async (err, decodedToken) => {
      if (err) {
        res.json({ status: false });
      } else {
        const user = await User.findOne({ email: decodedToken.email });
        if (user) res.json({ status: true, role: user.role });
        else res.json({ status: false });
      }
    });
  } else {
    res.json({ status: false });
  }
});

// Register
app.post("/register", (req, res) => {
  const { firstname, lastname, email, password, changepassword, role } =
    req.body;
  User.findOne({ email: email }, (err, user) => {
    if (user) {
      res.send({ message: "User already registered" });
    } else {
      const user = new User({
        firstname,
        lastname,
        email,
        password,
        changepassword,
        role,
      });
      user.save((err) => {
        if (err) {
          res.send(err);
        } else {
          res.send({ message: "Successfully Registered, Please login now." });
        }
      });
    }
  });
});

app.listen(9003, () => {
  console.log(`BE started at port 9003`);
});
