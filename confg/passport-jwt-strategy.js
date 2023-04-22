const passport = require('passport');
const JWTStrategy = require('passport-jwt').Strategy;
const ExtractJWT = require('passport-jwt').ExtractJwt;

const User = require('../models/user');

let opts = {
    jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey: 'tasks'
}

passport.use(new JWTStrategy(opts, async function (jwt_payload, done) {
    let user = await User.findById(jwt_payload._id);
    if (user) {
        return done(null, user);
    } else {
        return done(null, false);
        // or you could create a new account
    }
}));
