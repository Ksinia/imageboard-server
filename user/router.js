const { Router } = require("express");
const User = require("./model");
const bcrypt = require("bcrypt");

module.exports = router = new Router();
router.post("/user", (req, res, next) => {
  const user = {
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 10)
  };
  User.findOne({ where: { email: req.body.email } }).then(data => {
    if (data) {
      res.status(400).send({
        message: "This email is already in use"
      });
    } else {
      User.create(user)
        .then(user => res.send({ email: user.email }))
        .catch(error => next(error));
    }
  });
});
