const Io = require("../utils/io");

const Contacts  = new Io("./database/contacts.json");

const home = async (req, res) => {

  res.render("index", {
  
  });
};


const adminPage = async (req, res) => {
  res.render("admin");
};
const formPage = async (req, res) => {
  res.render("form");
};






const ContactUs = async (req,res)=>{
  const contacts = await  Contacts.read()

  res.render("contactPage", {
    contacts
  } )
}


module.exports = {
  home,
  formPage,
  adminPage,

  ContactUs
};
