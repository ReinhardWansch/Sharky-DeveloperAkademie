class World {
    ctx;
    character= new Character();
    enemies= [];

    constructor(canvas) {
        this.ctx= canvas.getContext('2d');
    }

    draw() {
        this.character.draw(this.ctx);
        this.drawEnemies();
    }

    drawEnemies() {
        for (let enemyI of this.enemies) {
            enemyI.draw(this.ctx);
        }
    }

    addEnemy(xPos, yPos) {
        let newEnemy= new Enemy();
        newEnemy.xPos= xPos;
        newEnemy.yPos= yPos;
        this.enemies.push(newEnemy);
    }

    spawnEnemy() {
        let newEnemy= new Enemy();
        this.enemies.push(new Enemy());
        newEnemy.img.decode()
            .then(()=>newEnemy.draw(this.ctx));
    }
}