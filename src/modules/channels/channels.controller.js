const Channel = require("./channel.model");
const User = require("../users/user.model");


const ChannelsController = {
    getAll: (req, res) => {
        const channel = new Channel();
        channel.getAll().then(results => {
            res.send(results);
        });
    },
    getOne: (req, res) => {
        const channel = new Channel();
        channel.getOne(req.params.id).then(result => {
            if(result) {
                res.send(result);
            } else {
                res.sendStatus(404);
            }
        });
    },
    create: (req, res) => {
        const channel = new Channel();
        channel.create(req.body).then(result =>{
            if(result){
                res.send(result);
            }else{
                res.sendStatus(404);
            }
        })
    },

    link:(req,res )=> {
        const channel = new Channel();
        channel.link(req.body).then(result =>{
            if(result){
                res.send(result);
            }
        }).catch(error=>{
            res.sendStatus(404);
        })
    },

    join:(req,res)=>{
        const channel = new Channel();
        channel.join(req.params).then(result =>{
            if(result){
                res.send(result);
            }
        }).catch(error => {
            res.sendStatus(404);
        })

    }

}

module.exports = ChannelsController;