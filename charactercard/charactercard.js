const characterCard = {
    name: 'Snortleblat',
    class: 'Swamp Beast Diplomat',
    level: 5,
    health: 100,
    image: 'images/image.png',

    attacked: function(){
        this.health -= 20;
        document.querySelector('.health').textContent = 'Health: ' + this.health;
        if (this.health <= 0) {
            alert('Your character died.');
        };
    },

    levelUp: function () {
        this.level++;
        document.querySelector('.level').textContent = 'Level: ' + this.level;
    }
};

document.querySelector('.image').setAttribute('src', characterCard.image);
document.querySelector('.image').setAttribute('alt', 'Image of a Swamp Beast Diplomat.');

document.querySelector('.name').textContent = characterCard.name;
document.querySelector('.class').textContent = 'Class: ' + characterCard.class;
document.querySelector('.level').textContent = 'Level: ' + characterCard.level;
document.querySelector('.health').textContent = 'Health: ' + characterCard.health;


document.querySelector('.attack').addEventListener("click", function () {
    characterCard.attacked();
});
document.querySelector('.levelUp').addEventListener("click", function () {
    characterCard.levelUp();
});