const { Router } = require("express");
const Image = require("./model");
const auth = require("../auth/middleware");

const router = new Router();
router.get("/image", (req, res, next) => {
  Image.findAll()
    .then(data => res.send(data))
    .catch(error => next(error));
});
router.post("/image", auth, (req, res, next) => {
  Image.create(req.body)
    .then(data => res.send(data))
    .catch(error => next(error));
});
module.exports = router;
