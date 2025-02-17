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
        this.bgObjects.forEach(bgObjectI => {
            bgObjectI.scaleToHeight(height);
        });
    }

    async decodeAllBgImages() {
        let promises = [];
        this.bgObjects.forEach(bgObjectI => {
            promises.push(bgObjectI.img.decode());
        });
        return Promise.all(promises);
    }
}