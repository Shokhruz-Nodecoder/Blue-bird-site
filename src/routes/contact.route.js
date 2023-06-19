const {Router} = require("express")
const router = Router()
const {create} = require("../controllers/contact.controller")



router.post("/sendContacts", create)

module.exports = router