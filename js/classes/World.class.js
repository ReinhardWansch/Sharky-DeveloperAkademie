class World {
    ctx;
    level= new Level(this.ctx);
    character;

    constructor(canvas) {
        this.ctx = canvas.getContext('2d');
        this.setCharacter();
        this.draw();
    }

    draw() {
        this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
        this.drawBgObjects();
        this.drawCharacter();
        window.requestAnimationFrame(() => this.draw());
    }

    /*###############*/
    /*## CHARACTER ##*/
    /*###############*/
    
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
