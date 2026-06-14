const characterCard = {
    name: 'Snortleblat',
    class: 'Swamp Beast Diplomat',
    level: 5,
    health: 100,
    image: 'images/image.png',

    attacked: function(){
        this.health -= 20;
        if (this.health <= 0) {
            alert('Your character died.');
        };
    },

    levelUp: function () {
        this.level++;
    }
};

