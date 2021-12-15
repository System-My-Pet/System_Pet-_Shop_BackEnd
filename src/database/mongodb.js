const mongose = require('mongoose')


class MongoDB {

    static  connect(){
         mongose.connect(`mongodb+srv://Admin:40028922@cluster0.lau6q.mongodb.net/system-petshop?retryWrites=true&w=majority`,  { 
            useUnifiedTopology: true, 
            useNewUrlParser: true 
        }).then(() =>{
            console.log("MongoDB conectado...");
        }).catch(() =>{
            console.log("Erro ao se conectar com MongoDB!");
        });
    }
   
}

module.exports = MongoDB
