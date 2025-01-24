class World {
    ctx;
    bgLights = [];
    bgObjects = [];

    constructor(canvas) {
        this.ctx = canvas.getContext('2d');
        this.addMultipleBgLights('./img/3. Background/Layers/1. Light/COMPLETO.png', this.ctx.canvas.width*2, 3, -360);
        this.draw();
    }

    draw() {
        this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
        this.drawBgLights();
        window.requestAnimationFrame(() => this.draw());
    }

    /*###############*/
    /*## BG LIGHTS ##*/
    /*###############*/

    drawBgLights() {
        this.bgLights.forEach(bgObject => {
            bgObject.draw(this.ctx);
        });
    }

    addMultipleBgLights(imgPath, width, amount, yPos) {
        let xPos = 0;
        for (let i = 0; i < amount; i++) {
            xPos= i*width;
            this.addBgLight(imgPath, width, xPos, yPos);
        }
    }

    addBgLight(imgPath, width, xPos, yPos) {
        let bgLightNew = new MOb(imgPath, 1, xPos, yPos);
        bgLightNew.img.decode()
            .then(() => bgLightNew.scaleToWidthOnly(width));
        this.bgLights.push(bgLightNew);
    }

    /*################*/
    /*## BG OBJECTS ##*/
    /*################*/

    drawBgObjects() {
        this.bgObjects.forEach(bgObject => {
            bgObject.draw(this.ctx);
        });
    }

    addBgObject(imgPath, width) {
        let bgObjectNew = new MOb(imgPath);
        bgObjectNew.scaleToWidth(this.ctx.canvas.width * 2);
    }
}
