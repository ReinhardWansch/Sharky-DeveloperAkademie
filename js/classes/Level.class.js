class Level {
    ctx;
    bgObjects = [];
    bgLights = [];

    constructor(ctx) {
        this.ctx = ctx;
    }

    addBgObjectsRepeating(imgPath, amount) {
        let xPos = 0;
        for (let i = 0; i < amount; i++) {
            xPos = i * width;
            this.addBgObject(imgPath);
        }
    }

    addBgObject(imgPath) {
        let newBgObject = new MOb(imgPath);
        newBgObject.img.decode().then(() => {
            newBgObject.scaleFactor.scaleToWdithOnly(this.ctx.canvas.width*2);
        });
        this.bgObjects.push(newBgObject);
    }

    drawBgObjects(ctx) {
        this.bgObjects.forEach(bgObject => {
            bgObject.draw(ctx);
        });
    }

    drawBgLights(ctx) {
        this.bgLights.forEach(bgLight => {
            bgLight.draw(ctx);
        });
    }

}