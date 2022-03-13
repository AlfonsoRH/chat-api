const Model = require('../../core/model');
const Channel = require('../channels/channel.model');
const Message = require('../messages/message.model');

class User extends Model {
    constructor() {
        super('users');
    }

    signup(data){
        return new Promise((resolve, reject) => {
            this.collection.insertOne({
                email: data.email,
                password: data.password
            }, (error, results) => {
                if(error){
                    reject(error)
                }else{
                    resolve(results);
                }
            })
        })
    }

    login(data){
        return new Promise((resolve, reject) =>{
            this.collection.findOne({
                email:data.email,
                password:data.password
            },(error,results)=>{
                if(error){
                    reject(error);
                }else{
                    resolve(results);
                }
            })
        })
    }

}


module.exports = User;