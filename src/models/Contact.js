const { v4: uuid } = require("uuid");

class Contact {
  constructor(name, number, email, message) {
    this.id = uuid();
    this.name = name;
    this.number = number;
    this.email = email;
    this.message = message;
  }
}

module.exports = Contact;
