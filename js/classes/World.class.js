class World {
    ctx;
    level;
    character;

    constructor(ctx, level) {
        this.ctx = ctx;
        this.level = level;
        this.setCharacter();
        this.draw();
    }

    draw() {
        this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
        this.level.drawBgObjects(this.ctx);
        this.character.draw(this.ctx);
        window.requestAnimationFrame(() => this.draw());
    }

    /*###############*/
    /*## CHARACTER ##*/
    /*###############*/
    
    //TODO Das gehört wo anders hin
    setCharacter() {
        let newCharacter= new IdleMOb('./img/1.Sharkie/1.IDLE/1.png', 0.25, 10, 50);
        newCharacter.position.x = 10;
        newCharacter.position.y = 50;
        newCharacter.scaleFactor.scaleTo(0.25);
        this.character = newCharacter;
    }
    
    drawCharacter() {
        this.character.draw(this.ctx);
    }

    
    
}
