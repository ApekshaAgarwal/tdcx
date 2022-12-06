
const mongoose = require("mongoose");
const uri = "mongodb+srv://apekshatdcx:Jape123@clusterudemy.6tyqr.mongodb.net/tdcx?retryWrites=true&w=majority";

exports.mongoConnection = (cb) =>{
    mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((clientDB)=>{
        const mongoDB = mongoose.connection;
        return cb({'success' : true, 'client' : mongoDB})
    }).catch((err)=>{
        console.log("Error in mongo", err);
        return cb({'success' : false, 'error' : err})
    })
}