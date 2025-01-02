class World {
    ctx;
    character= new Character();
    enemies= [
        new Enemy(),
        new Enemy(),
        new Enemy()
    ];
    barriers= [new Barrier()];

    constructor(canvas) {
        this.ctx= canvas.getContext('2d');
        this.draw();
    }

    draw() {
        console.log('World: draw()'); ///DEBUG
        this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
        //draw barriers
        this.barriers.forEach(barrier=> {
            this.ctx.drawImage(barrier.img, barrier.xPos, barrier.yPos, barrier.width, barrier.height);
        });
        //draw character
        this.ctx.drawImage(this.character.img, this.character.xPos, this.character.yPos, this.character.width, this.character.height);
        //draw enemies
        this.enemies.forEach(enemy=> {
            this.ctx.drawImage(enemy.img, enemy.xPos, enemy.yPos, enemy.width, enemy.height);
        });

        requestAnimationFrame(()=>this.draw());
    }

}