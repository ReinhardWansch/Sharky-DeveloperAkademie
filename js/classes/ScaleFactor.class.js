class ScaleFactor {
    factorX;
    factorY;

    constructor(factorX= 1, factorY= 1) {
        this.factorX = factorX;
        this.factorY = factorY;
    }

    scaleBy(factor) {
        this.factorX *= factor;
        this.factorY *= factor;
    }

    scaleTo(factor) {
        this.factorX = factor;
        this.factorY = factor;
    }

    /*
    scaleToWdith(width) {
        this.factorX = width / this.img.width;
        this.factorY = this.factorX;
    }

    scaleToWdithOnly(width) {
        this.factorX = width / this.img.width;
    }

    scaleToHeight(height) {
        let ratio = (this.factorX / this.factorY);
        this.scaleBy(scaleFactor);
    }

    scaleToHeightOnly(height) {
        this.factorY = height / this.img.height;
    }
    */

}