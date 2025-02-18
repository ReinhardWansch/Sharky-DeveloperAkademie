class World {
    ctx;
    keyboard;
    level;
    character;
    // cameraOffset= 0;

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

    /*###############*/
    /*## CHARACTER ##*/
    /*###############*/
    
    //TODO Das gehört wo anders hin
    setCharacter() {
        // let newCharacter= new Character('./img/1.Sharkie/1.IDLE/1.png', 0.25, 10, 50);
        let newCharacter= new Character('./img/1.Sharkie/1.IDLE/1-mod-redBorder.png', 0.25, 10, 50);
        newCharacter.position.x = 10;
        newCharacter.position.y = 50;
        newCharacter.scaleFactor.scaleTo(0.25);
        newCharacter.speed= 5;
        newCharacter.setKeyboard(new Keyboard());
        newCharacter.keyboard.addKeyListenersTo(document);
        this.character = newCharacter;
    }

    /* drawCharacter() {
        this.character.draw(this.ctx); 
    } */
    
}
