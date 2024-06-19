


const posts = [];

posts.push({
    id: 1,
    title: 'De verbazingwekkende link tussen inspanning en schoolresultaten [In memory]',
    content: `
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
    date: '1 september 2023'
});

async function getPostOverview() {
    return posts.map((post) => ({
        id: post.id,
        title: post.title,
        date: post.date
    }));
}

async function getPost(id) {
    return posts.find((post) => post.id === id);
}

async function createPost(title, content, date) {
    posts.push({
        id: posts.reduce((max, post) => Math.max(max, post.id), 0) + 1,
        title,
        content,
        date
    });
}

async function updatePost(id, title, content, date) {
    const posts = posts.find((post) => post.id === id);
    posts.title = title;
    posts.content = content;
    posts.date = date;
}

async function deletePost(id) {
    const index = posts.findIndex((post) => post.id === id);
    posts.splice(index, 1);
}

module.exports = {
    getPostOverview,
    getPost,
    createPost,
    updatePost,
    deletePost,
    disconnect,
};
