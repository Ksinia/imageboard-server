const { Router } = require("express");
const { toJWT, toData } = require("./jwt");

const router = new Router();

router.post("/login", (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;
  (!email || !password) &&
    res.status(400).send({
      message: "Please supply a valid email and password"
    });
  email &&
  password && // normally we would check the password and find the correct user in the database
    res.send({
      jwt: toJWT({ userId: 1 })
    });
});

module.exports = router;
