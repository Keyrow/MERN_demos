const User = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// export an object that is full of methods
module.exports = {
  getAll(req, res) {
    User.find()
      .then(users => res.json(users))
      .catch(err => res.json(err));
  },

  register(req, res) {
    const user = new User(req.body);

    user
      .save()
      .then(() => {
        res.json({ msg: "success!", user: user });
      })
      .catch(err => res.status(400).json(err));
  },

  login(req, res) {
    User.findOne({ email: req.body.email })
      .then(user => {
        if (user === null) {
          res
            .status(400)
            .json({ msg: "invalid login attempt - user not found" });
        } else {
          bcrypt
            .compare(req.body.password, user.password)
            .then(passwordIsValid => {
              if (passwordIsValid) {
                console.log("password valid");

                res
                  .cookie(
                    "usertoken",
                    jwt.sign({ _id: user._id }, process.env.JWT_SECRET),
                    {
                      httpOnly: true
                    }
                  )
                  .json({ msg: "success!", _id: user._id });
              } else {
                res
                  .status(400)
                  .json({ msg: "invalid login attempt - pw invalid" });
              }
            })
            .catch(err =>
              res
                .status(400)
                .json({ msg: "invalid login attempt - bcrypt .catch" })
            );
        }
      })
      .catch(err => res.json(err));
  },

  // invalidate the token with a maxAge of 0
  logout(req, res) {
    res
      .cookie("usertoken", jwt.sign({ _id: "" }, process.env.JWT_SECRET), {
        httpOnly: true,
        maxAge: 0
      })
      .json({ msg: "ok", _id: "" });
  },

  // delete the cookie, this does not invalidate the token though
  // if the user saved the token, could be a problem
  logout2(req, res) {
    res.clearCookie("usertoken");
    res.json({ msg: "usertoken cookie cleared" });
  }
  // getOne(req, res) {
  //   User.findOne({ _id: req.params.id })
  //     .then(user => res.json(user))
  //     .catch(err => res.json(err));
  // },
};
