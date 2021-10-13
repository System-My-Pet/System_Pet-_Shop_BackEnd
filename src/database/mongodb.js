const mongose = require('mongoose')


class MongoDB {

    static  connect(){
        console.log(process.env.DB_MONGO_USER)
         mongose.connect(`mongodb+srv://${process.env.DB_MONGO_USER}:${process.env.DB_MONGO_PASSWORD}@cluster0.lau6q.mongodb.net/${process.env.DATABASE}?retryWrites=true&w=majority`,  { 
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
