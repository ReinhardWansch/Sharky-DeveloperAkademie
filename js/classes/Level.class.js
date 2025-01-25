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
            newBgObject.scaleFactor.scaleToWdithOnly(this.ctx.canvas.width);
        });
        this.bgObjects.push(newBgObject);
    }


}