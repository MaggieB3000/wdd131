const btn = document.querySelector('.menu-btn');
const menu = document.querySelector('nav');

btn.addEventListener('click', toggleMenu);

function toggleMenu() {
    menu.classList.toggle('hide');
    btn.classList.toggle('change');
}




const posts = [
    {
        imgSrc: "images/post-1.jpg",
        imgAlt: "An image of a crochet unicorn.",
        title: "Mack the Unicorn",
        description: "This chubby unicorn plushie was meant as a birthday gift for a friend, though it ended up being absurdly late. While coming up with potential design ideas, said friend pulled up a photo of a cave painting depicting some very fat horses with the most comically stubby legs. It was too good to not recreate!"
    },

    {
        imgSrc: "images/post-2.jpg",
        imgAlt: "An image of a crochet blanket with some extra yarn.",
        title: "Ciddy's Blanket",
        description: "I made this baby blanket as a gift for a friend some time ago and finally decided to digitize it. This blanket is made using the linen stitch (also known as the woven stitch), making it a touch lighter than other crochet stitches."
    }
]

const postList = document.querySelector("#feed-container");

posts.forEach(post => {
    const article = document.createElement('article');
    article.className = 'post';
    let html = `
                <img src=${post.imgSrc}
                    alt=${post.imgAlt}>
                <h2>${post.title}</h2>
                <p>${post.description}</p>`;

    article.innerHTML = html;
    postList.appendChild(article);
});