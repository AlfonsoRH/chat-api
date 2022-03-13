const Message = require("./message.model");
const User = require("../users/user.model");
const Channel = require("../channels/channel.model");

const MessagesController = {
    getAll: (req, res) => {
        const message = new Message();
        message.getAll().then(results => {
            res.send(results);
        });
    },
    getOne: (req, res) => {
        const message = new Message();
        message.getOne(req.params.id).then(result => {
            if(result) {
                res.send(result);
            } else {
                res.sendStatus(404);
            }
        });
    },
    create: (req, res) => {
        const message = new Message();
        console.log(req.body);
        message.create(req.body).then(result =>{
            if(result){
                res.send(result);
            }
        }).catch(err =>{
            res.sendStatus(404);
        })
    }
}

module.exports = MessagesController;