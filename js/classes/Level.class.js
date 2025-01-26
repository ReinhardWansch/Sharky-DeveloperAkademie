class Level {
    ctx;
    bgObjects = [];
    // bgLights = [];

    constructor(ctx) {
        this.ctx = ctx;
    }

    addBgObject(imgPath, repeatAmount = 1) {
        let newBgObject = new BgObject(imgPath, repeatAmount);
        this.bgObjects.push(newBgObject);
    }

    drawBgObjects(ctx) {
        this.bgObjects.forEach(bgObjectI => {
            bgObjectI.draw(ctx);
        });
    }

    /*
    drawBgLights(ctx) {
        this.bgLights.forEach(bgLight => {
            bgLight.draw(ctx);
        });
    }
    */

}