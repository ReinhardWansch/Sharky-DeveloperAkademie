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
        console.log('World: draw()'); ///DEBUG
        this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);

        this.ctx.drawImage(this.character.img, this.character.xPos, this.character.yPos, this.character.width, this.character.height);
        this.enemies.forEach(enemy=> {
            this.ctx.drawImage(enemy.img, enemy.xPos, enemy.yPos, enemy.width, enemy.height);
        });

        requestAnimationFrame(()=>this.draw());
    }

}