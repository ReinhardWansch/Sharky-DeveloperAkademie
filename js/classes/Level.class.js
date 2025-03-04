class Level {
    bgObjects = [];
    enemies = [];

    /*#############*/
    /*## ENEMIES ##*/
    /*#############*/

    drawEnemies(ctx) {
        this.enemies.forEach(enemyI => {
            enemyI.draw(ctx);
        });
    }

    decodeAllEnemyImages() {
        let promises = [];
        this.enemies.forEach(enemyI => {
            promises.push(enemyI.img.decode());
        });
        return Promise.all(promises);
    }
    
    /*################*/
    /*## BG OBJECTS ##*/
    /*################*/

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

    decodeAllBgImages() {
        let promises = [];
        this.bgObjects.forEach(bgObjectI => {
            promises.push(bgObjectI.img.decode());
        });
        return Promise.all(promises);
    }

    /* isAllBgImagesComplete() {
        let allComplete= true;
        this.bgObjects.forEach(bgObjectI => {
            allComplete = allComplete && bgObjectI.img.complete;
        });
        return allComplete;
    } */
}