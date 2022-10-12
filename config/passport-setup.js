const passport = require("passport");
const db = require("../models");
const User = db.user;
const user = require('../models/user.model')
// const colors = require("colors");

const GoogleStrategy = require("passport-google-oauth20").Strategy;

passport.serializeUser((user, done) => {
  done(null, user.id);
});

// Deserialize the user , just like decode a jwt token
passport.deserializeUser((id, done) => {
  const user = User.findByPk(id);
  done(null, user);
});

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "/auth/google/redirect/",
    },
    async (accessToken, refreshToken, profile, done) => {
      // console.log(
      //   { googleid: profile.id },
      //   { profileName: profile.displayName },
      //   { picture: profile._json.picture }
      // );

      const currentUser = await User.findOne({ where:{googleId: profile.id} });

      if (currentUser) {
      return done(null, currentUser);
        // console.log("Current user is ", currentUser);
        // done(null, currentUser);
      }
const newUser = await User.create({
  googleId: profile.id,
  username: profile.displayName,
  picture: profile._json.picture,
});
      console.log(`new user created ${newUser}`);
      done(null, newUser);
    }
  )
);
