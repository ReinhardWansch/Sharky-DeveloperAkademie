class World {
    ctx;
    keyboard;
    level;
    character;
    cameraPos = 0;

    constructor(ctx) {
        this.ctx = ctx;
        // this.draw();
    }

    draw() {
        this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
        this.ctx.save();
        this.ctx.translate(this.cameraPos, 0);
        this.level.drawBgObjects(this.ctx);
        this.level.drawEnemies(this.ctx);
        this.character.draw(this.ctx);
        this.ctx.restore();
        this.moveCameraForNextFrame();
        window.requestAnimationFrame(() => this.draw());
    }

    /*##############*/
    /*## KEYBOARD ##*/
    /*##############*/

    moveCameraForNextFrame() {
        if (this.character.keyboard.ArrowRight)
            this.cameraPos -= this.character.speed;
        else if (this.character.keyboard.ArrowLeft)
            this.cameraPos += this.character.speed;
    }

    /*###########*/
    /*## LEVEL ##*/
    /*###########*/

    setLevel(level) {
        this.level = level;
    }

    /* drawCharacter() {
        this.character.draw(this.ctx); 
    } */

}
