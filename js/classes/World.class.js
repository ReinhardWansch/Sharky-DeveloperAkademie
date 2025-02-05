class World {
    ctx;
    level;
    character;

    constructor(ctx) {
        this.ctx = ctx;
        this.setCharacter();
        // this.draw();
    }

    draw() {
        // console.log('World: draw()'); ///DEBUG
        this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
        this.level.drawBgObjects(this.ctx);
        this.character.draw(this.ctx);
        window.requestAnimationFrame(() => this.draw());
    }

    setLevel(level) {
        this.level = level;
    }

    /*###############*/
    /*## CHARACTER ##*/
    /*###############*/
    
    //TODO Das gehört wo anders hin
    setCharacter() {
        let newCharacter= new Character('./img/1.Sharkie/1.IDLE/1.png', 0.25, 10, 50);
        newCharacter.position.x = 10;
        newCharacter.position.y = 50;
        newCharacter.scaleFactor.scaleTo(0.25);
        newCharacter.setKeyboard(new Keyboard());
        newCharacter.keyboard.addKeyListeners(document);
        this.character = newCharacter;
    }
    
    drawCharacter() {
        this.character.draw(this.ctx); 
    }
    
}
