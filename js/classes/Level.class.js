class Level {
    bgObjects = [];
    // bgLights = [];

    addBgObject(imgPath, repeatAmount = 1) {
        let newBgObject = new BgObject(imgPath, repeatAmount);
        this.bgObjects.push(newBgObject);
    }

    drawBgObjects(ctx) {
        this.bgObjects.forEach(bgObjectI => {
            bgObjectI.draw(ctx);
        });
    }

    scaleBGObjectsToHeight(height) {
        console.log(`Level.scaleBGObjectsToHeight(${height})`); ///DEBUG
        this.bgObjects.forEach(bgObjectI => {
            bgObjectI.scaleToHeight(height);
        });
    }
}