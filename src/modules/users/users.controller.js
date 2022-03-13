const User = require("./user.model");

const UsersController = {
    getAll: (req, res) => {
        const user = new User();
        user.getAll().then(results => {
            res.send(results);
        });
    },
    getOne: (req, res) => {
        const user = new User();
        user.getOne(req.params.id).then(result => {
            if(result) {
                res.send(result);
            } else {
                res.sendStatus(404);
            }
        });
    },
    signup: (req, res) => {
        const user = new User();
        user.signup(req.body).then((result) =>{
            if(result){
                res.send(result);
            }else{
                res.sendStatus(404);
            }
        })
     
    },
    login:(req,res) => {
        const user = new User();
        console.log(req.body,"REQ.BODY")
        user.login(req.body).then(result=>{
            if(result){
                res.send(result);
            }else{
                res.sendStatus(404);
            }
        })
    }
}

module.exports = UsersController;