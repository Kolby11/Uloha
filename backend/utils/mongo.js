const { MongoClient } = require('mongodb')

async function mongoDBClient(){
    return await MongoClient.connect(mongoURI, {useNewUrlParser: true, useUnifiedTopology: true})
} 

module.exports = { mongoDBClient }