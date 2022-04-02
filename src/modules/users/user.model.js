const Model = require("../../core/model");
const Channel = require("../channels/channel.model");
const Message = require("../messages/message.model");
const jwt = require("jsonwebtoken");
require("dotenv").config();

class User extends Model {
  constructor() {
    super("users");
  }

  signup(data) {
    return new Promise((resolve, reject) => {
      this.collection.insertOne(
        {
          email: data.email,
          password: data.password,
        },
        (error, results) => {
          if (error) {
            reject(error);
          } else {
            resolve(results);
          }
        }
      );
    });
  }

  async login(data) {
    let user = await this.collection.findOne({
      email: data.email,
      password: data.password,
    });

    if (user) {
      let token = jwt.sign({ id: user._id }, process.env.TOKEN_SECRET, {
        expiresIn: "1h",
      });
      return { token };
    } else {
      return null;
    }
  }
}

module.exports = User;