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

    scaleToWdith(width) {
        let scaleFactor = width / this.img.width;
        this.scaleBy(scaleFactor);
    }

    scaleToWdithOnly(width) {
        this.factorX = width / this.img.width;
    }

    scaleToHeight(height) {
        let scaleFactor = height / this.img.height;
        this.scaleBy(scaleFactor);
    }

    scaleToHeightOnly(height) {
        this.factorY = height / this.img.height;
    }

}