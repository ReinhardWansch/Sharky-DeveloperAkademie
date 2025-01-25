class World {
    ctx;
    bgLights = [];
    bgObjects = level01.bgObjects;
    character = level01.character;

    constructor(canvas) {
        this.ctx = canvas.getContext('2d');
        this.draw();
    }

    draw() {
        this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
        this.drawBgObjects();
        this.drawCharacter();
        window.requestAnimationFrame(() => this.draw());
    }

    /*################*/
    /*## BG OBJECTS ##*/
    /*################*/

    drawBgObjects() {
        this.bgObjects.forEach(bgObject => {
            bgObject.draw(this.ctx);
        });
    }

    /*###############*/
    /*## CHARACTER ##*/
    /*###############*/

    drawCharacter() {
        this.character.draw(this.ctx);
    }
    
}
