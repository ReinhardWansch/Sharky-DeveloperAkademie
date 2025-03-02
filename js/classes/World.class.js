class World {
    ctx;
    keyboard;
    level;
    character;
    // cameraOffset= 0;

    constructor(ctx) {
        this.ctx = ctx;
        // this.draw();
    }

    draw() {
        // console.log('World: draw()'); ///DEBUG
        this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
        this.level.drawBgObjects(this.ctx);
        this.level.drawEnemies(this.ctx);
        this.character.draw(this.ctx);
        this.moveCameraForNextFrame();
        window.requestAnimationFrame(() => this.draw());
    }

    /*##############*/
    /*## KEYBOARD ##*/
    /*##############*/

    moveCameraForNextFrame() {
        if (this.character.keyboard.ArrowRight) {
            this.level.bgObjects.forEach((bgObjectI) => bgObjectI.velocity.velocityX = -bgObjectI.speed);
            // console.log(this.level.bgObjects[0]); ///DEBUG
        }
        else if (this.character.keyboard.ArrowLeft) 
            this.level.bgObjects.forEach((bgObjectI) => bgObjectI.velocity.velocityX = bgObjectI.speed);
        else {
            this.level.bgObjects.forEach((bgObjectI) => bgObjectI.stopMoving());
        }
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
