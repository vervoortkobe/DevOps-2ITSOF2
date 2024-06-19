const postgres = require('pg');


const pool = new postgres.Pool({
    user: process.env.POSTGRES_USER || 'user',
    host: process.env.POSTGRES_HOST || 'localhost',
    database: process.env.POSTGRES_DB || 'postgres',
    password: process.env.POSTGRES_PASSWORD || 'password',
});

async function getPostOverview() {
    const result = await pool.query('SELECT id, title, date from posts');
    return result.rows;
}

async function getPost(id) {
    const result = await pool.query('SELECT * from posts where id = $1', [id]);
    return result.rows[0];
}

async function createPost(title, content, date) {
    const result = await pool.query('INSERT INTO posts (title, content, date) VALUES ($1, $2, $3) RETURNING *', [title, content, date]);
    return result.rows[0];
}

async function updatePost(id, title, content, date) {
    const result = await pool.query('UPDATE posts SET title = $1, content = $2, date = $3 WHERE id = $4 RETURNING *', [title, content, date, id]);
    return result.rows[0];
}

async function deletePost(id) {
    const result = await pool.query('DELETE FROM posts WHERE id = $1 RETURNING *', [id]);
    return result.rows[0];
}

async function verifyConnection() {
    const result = await pool.query(`SELECT table_name
        FROM information_schema.tables
       WHERE table_schema='public'
         AND table_type='BASE TABLE';`);
    return result.rows;
}

async function createTable() {
    await pool.query(`CREATE table posts (
        id serial primary key,
        title varchar(255) not null,
        content text not null,
        date varchar(255) not null
    );`);
    await createPost(
        'De verbazingwekkende link tussen inspanning en schoolresultaten [Postgres]',
        `
        <p>
        Er was eens een jonge student die heel hard werkte om goede resultaten te behalen op school. Hij was bezig met zijn eindexamenjaar en wilde graag naar de universiteit gaan om verder te studeren. Maar hoe harder hij werkte, hoe slechter zijn resultaten werden. Hij begon zich af te vragen of er misschien een link was tussen zijn inspanningen en zijn uiteindelijke schoolresultaten.
        </p>
        <p>
        Hij besloot om zijn leraar te vragen om advies. De leraar lachte en zei dat de student zich geen zorgen hoefde te maken, want er was geen enkele link tussen hoe hard iemand werkte en hoe goed zijn of haar resultaten waren. "Het enige wat telt, is hoeveel geluk je hebt", zei de leraar grinnikend.
        </p>
        <p>
        De student was verbijsterd. Hij had altijd gedacht dat hard werken beloond werd, maar blijkbaar was dat niet het geval. Hij besloot om een experiment uit te voeren om de link tussen inspanning en resultaat te onderzoeken. Hij nam een stapel boeken mee naar huis en begon erin te lezen. Maar na een paar uur was hij zo moe dat hij in slaap viel.
        </p>
        <p>
        Toen hij de volgende ochtend wakker werd, had hij een geweldig idee. Hij zou zich helemaal niet inspannen voor zijn examens! Hij zou gewoon afwachten wat er zou gebeuren. En tot zijn verbazing werden zijn resultaten beter dan ooit! Hij had zelfs een aanbieding gekregen van een topuniversiteit.
        </p>
        <p>
        De student besefte toen dat de leraar gelijk had gehad. Er was inderdaad geen link tussen inspanning en resultaat. Het enige wat telt, is hoeveel geluk je hebt. En gelukkig had hij op het juiste moment de juiste beslissing genomen.
        </p>
        `,
        '1 september 2023'
        );
}

module.exports = {
    getPostOverview,
    getPost,
    createPost,
    updatePost,
    deletePost,
    verifyConnection,
    createTable,
};