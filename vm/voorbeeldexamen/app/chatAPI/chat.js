const DateTime = require('luxon').DateTime;
const { MongoClient } = require("mongodb");

const uri = `mongodb://${process.env.MONGO_USER}:${process.env.MONGO_PWD}@${process.env.MONGO_URL}:27017/?maxPoolSize=20&w=majority`;
const client = new MongoClient(uri);

async function send(req, res) {
    try {    
        await client.connect();
        const database = client.db("chat");
        const chats = database.collection("chats");

        const {author, message } = req.body;
        console.log('received message', author, message)
        
        const now = DateTime.local();
        await chats.insertOne({
            date: now.toISO(),
            author,
            message
        });
        return res.json('ok');
    } finally {
        await client.close();
    }
}

async function receive(req, res) {
    try {
        await client.connect();
        const database = client.db("chat");
        const movies = database.collection("chats");
        
        const chats = await movies.find().toArray();
        return res.json(chats);
    } finally {
        await client.close();
    }
}

module.exports =  {
    send,
    receive
}