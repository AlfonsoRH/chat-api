const { status } = require('express/lib/response');
const { ObjectId } = require('mongodb');
const Model = require('../../core/model');
const User = require('../users/user.model');

class Channel extends Model {
    constructor() {
        super('channels');
    }

    create(data) {
        return new Promise((resolve, reject) => {

            this.collection.insertOne({
                dueño: data.email,
                canal: data.canal,
                miembros: [data.email],
                mensajes: [{}]
            }, (error, result) => {
                if (error) {
                    reject(error)
                } else {
                    resolve(result)
                }
            })
        })
    }


    link(data) {
        return new Promise((resolve, reject) => {

            this.collection.findOne({ _id: ObjectId(data.channelId) }, { dueño: data.email }).then(result => {
                    if (result) {

                        resolve("Link de invitación: http://localhost:3001/api/channels/join/" + data.channelId + "/<UserId>");
                    } else {
                        reject("Not found");
                    }
            })

        })
    }

    join(data){

        let channel;
        return new Promise((resolve,reject)=>{
            console.log(data,"data");
            this.collection.findOne({_id:ObjectId(data.id)}).then(result =>{
               console.log(result);

            channel = result;
            channel.miembros.push(data.userId);
            console.log(channel,"Chanel con push");

            this.collection.updateOne({_id:ObjectId(data.id)},{$set:{miembros:channel.miembros}}).then(result =>{
                console.log(result);
                if(result){
                    resolve(channel);
                }else{
                    reject();
                }
            })


           });
      
        })
    }

    





}

module.exports = Channel;