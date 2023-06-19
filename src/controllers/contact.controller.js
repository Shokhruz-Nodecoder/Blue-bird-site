const {v4:uuid} = require("uuid")
const Io = require("../utils/io")
const Contacts = new Io("./database/contacts.json")
const Contact = require("../models/Contact")
const path = require("path")

const create = async (req,res)=>{
    const contacts = await  Contacts.read()
    
    const {name, number,email, message } = req.body
    
    const newContact = new Contact(name, number, email, message)
    
    const data = contacts.length ? [...contacts, newContact] : [newContact];
    await Contacts.write(data)

    res.redirect("/contactUs")   
}


module.exports = {
    create,
}