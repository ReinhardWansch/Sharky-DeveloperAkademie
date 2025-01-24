class World {
    ctx;
    bgLights = [];
    bgObjects = [];

    constructor(canvas) {
        this.ctx = canvas.getContext('2d');
        //water
        this.addMultipleBgObjects('./img/3. Background/Layers/5. Water/D.png', this.ctx.canvas.width * 2, 10, 0, -3);
        //lights
        this.addMultipleBgObjects('./img/3. Background/Layers/1. Light/COMPLETO.png', this.ctx.canvas.width * 2, 3, -360, -0.5);
        this.draw();
    }

    draw() {
        this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
        this.drawBgObjects();
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

    addMultipleBgObjects(imgPath, width, amount, yPos, speedX) {
        let xPos = 0;
        for (let i = 0; i < amount; i++) {
            xPos = i * width;
            this.addBgObject(imgPath, width, xPos, yPos, speedX);
        }
    }

    addBgObject(imgPath, width, xPos, yPos, speedX) {
        let bgLightNew = new MOb(imgPath, 1, xPos, yPos);
        bgLightNew.speedX = speedX;
        bgLightNew.isMoving = true;
        bgLightNew.img.decode()
            .then(() => bgLightNew.scaleToWidthOnly(width));
        this.bgObjects.push(bgLightNew);
    }
}
