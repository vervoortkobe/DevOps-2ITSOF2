const express = require('express');
const app = express();
const port = 3000;
let datastore = require('./postgres');
let circuitbreaker = false;

app.use(express.json());

app.get('/api/posts', (req, res) => {
    datastore.getPostOverview()
        .then(data => res.json(data))
        .catch(err => res.status(500).json(err))
});

app.get('/api/posts/:id', (req, res) => {
    datastore.getPost(parseInt(req.params.id))
        .then(data => res.json(data))
        .catch(err => res.status(500).json(err))
});

app.post('/api/posts', (req, res) => {
    datastore.createPost(req.body.title, req.body.content, req.body.date)
        .then(data => res.json(data))
        .catch(err => res.status(500).json(err))
});

app.put('/api/posts/:id', (req, res) => {
    datastore.updatePost(parseInt(req.params.id), req.body.title, req.body.content, req.body.date)
        .then(data => res.json(data))
        .catch(err => res.status(500).json(err))
});

app.get('/api/verify', async (req, res) => {
    let tables;
    let error;
    try {
        const postgres = require('./postgres');
        tables = await postgres.verifyConnection();
        
    } catch (err) {
        error = err;
    } 

    res.json({ circuitbreaker, tables, error });    
})

const server = app.listen(port, () => {
    console.log(`API listening at http://localhost:${port}`);
});

process.on('SIGTERM', async () => {
    console.log('sigterm received')
    await server.close();
    process.exit(0);
});

setTimeout(() => {
    datastore.verifyConnection().then((result) => {
        console.log('Connection to postgres successful');
        console.log('List of tables:', result);
        if (!result.find(x => x.table_name === 'posts')) {
            console.log('Table posts does not exist, creating it');
            datastore.createTable().then(() => console.log('Table posts created')).catch((err) => console.log('Unable to create table posts', err));
        }
    }).catch((err) => {
        console.log('Connection to postgres failed');
        circuitbreaker = true;
        datastore = require('./inmemory');
        console.log(err);
    })
}, 5000);

