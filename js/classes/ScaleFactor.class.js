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

}