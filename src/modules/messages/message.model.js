const Model = require('../../core/model');

class Message extends Model {
    constructor() {
        super('messages');
    }

    create(data){

        let date = new Date();
        date.toISOString();

        return new Promise((resolve,reject)=>{
            this.collection.insertOne({
                mensaje:data.mensaje,
                channelId:data.channelId,
                creador:data.creador,
                fecha:date
            },(error,result)=>{
                if(result){
                    resolve(result)
                }else{
                    reject(error);
                }
            })

        })
    }    
}

module.exports = Message;