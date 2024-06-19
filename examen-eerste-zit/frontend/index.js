const express = require('express');

const apiHost = process.env.API_HOST || 'localhost';
const apiPort = process.env.API_PORT || 3000;

console.log('API host:', apiHost);

const app = express();
app.set('view engine', 'ejs');
app.use(express.static('public'));


app.get('/', async (req, res) => {

    try {
        const result = await fetch(`http://${apiHost}:${apiPort}/api/posts`);
        const posts = await result.json();
        console.log('posts', posts);

        res.render('pages/index', { posts });
    } catch (err) {
        console.log(err);
        res.render('pages/error', { error: err });
    }
});

app.get('/post-:id', async (req, res) => {
    try {
        const result = await fetch(`http://${apiHost}:${apiPort}/api/posts/${req.params.id}`);
        const post = await result.json();

        res.render('pages/post', { post });
    } catch (err) {
        console.log(err);
        res.render('pages/error', { error: err });
    }
});


const port = 3000;
const server = app.listen(port, () => {
    console.log(`Frontend listening at http://localhost:${port}`);
});


process.on('SIGTERM', async () => {
    console.log('sigterm received')
    await server.close();
    process.exit(0);
});
