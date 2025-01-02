class World {
    ctx;
    character= new Character();
    enemies= [
        new Enemy(),
        new Enemy(),
        new Enemy()
    ];

    constructor(canvas) {
        this.ctx= canvas.getContext('2d');
        this.draw();
    }

    draw() {
        this.ctx.drawImage(this.character.img, this.character.xPos, this.character.yPos, this.character.width, this.character.height);
    }

}