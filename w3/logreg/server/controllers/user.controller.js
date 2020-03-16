const User = require("../models/user.model");

// export an object that is full of methods
module.exports = {
  getAll(req, res) {
    User.find()
      .then(users => res.json(users))
      .catch(err => res.json(err));
  },
  register(req, res) {
    // create user from the info in form
    const user = new User(req.body);

    user.save().then(() => {
      res.json({ msg: "success!", user: user }).catch(err => res.json(err));
    });
  },
  login(req, res) {
    User.findOne({ email: req.body.email })
      .then(user => {
        if (user === null) {
          res.json({ msg: "invalid login attempt" });
        }
        // user found from db
        else {
          bcrypt
            .compare(req.body.password, user.password)
            .then(isPasswordValid => {
              if (isPasswordValid) {
                res
                  .cookie(
                    "usertoken",
                    jwt.sign({ _id: user._id }, process.env.JWT_SECRET),
                    {
                      httpOnly: true
                    }
                  )
                  .json({ msg: "success!" });
              } else {
                res.json({ msg: "invalid login attempt " });
              }
            })
            .catch(err => res.json({ msg: "invalid login attempt" }));
        }
      })
      .catch(err => res.json({ msg: "invalid login attempt" }));
  },
  logout(req, res) {
    res.clearCookie("usertoken");
    res.json({ msg: "usertoken cookie cleared" });
  }
  // getOne(req, res) {
  //   User.findOne({ _id: req.params.id })
  //     .then(user => res.json(user))
  //     .catch(err => res.json(err));
  // },
};
