const { Router } = require("express");
const {
  home,
  adminPage,
  formPage,

  ContactUs,
} = require("../controllers/home.controller");
const isAuth = require("../middlewares/isAuth");

const router = Router();

router.get("/", home);
router.get("/admin", isAuth, adminPage);
router.get("/form", isAuth, formPage);

router.get("/contacts", ContactUs);

module.exports = router;
