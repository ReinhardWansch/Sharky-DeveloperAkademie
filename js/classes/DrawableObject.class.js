class DrawableObject {
    img;
    position;
    scaleFactor;

    constructor(imgPath) {
        this.loadImage(imgPath);
        this.position = new Point(0, 0);
        this.scaleFactor = new ScaleFactor();
    }

    loadImage(imgPath) {
        this.img = new Image();
        this.img.src = imgPath;
    }

    draw(ctx) {
        ctx.drawImage(
            this.img,
            this.position.x,
            this.position.y,
            this.width,
            this.height);
    }

    /*#############*/
    /*## SCALING ##*/
    /*#############*/

    scaleToHeightOnly(height) {
        this.scaleFactor.factorY = height / this.img.height;
    }

    scaleToHeight(height) {
        this.scaleToHeightOnly(height);
        this.scaleFactor.factorX = this.scaleFactor.factorY;
    }

    scaleToWidthOnly(width) {
        this.scaleFactor.factorX = width / this.img.width;
    }

    scaleToWidh(width) {
        this.scaleToWidthOnly(width);
        this.scaleFactor.factorY = this.scaleFactor.factorX;
    }

    /*############*/
    /*## GETTER ##*/
    /*############*/

    get width() {
        return this.img.width * this.scaleFactor.factorX;
    }

    get height() {
        return this.img.height * this.scaleFactor.factorY;
    }

    get centerPoint() {
        return new Point(
            this.position.x + this.width / 2,
            this.position.y + this.height / 2
        );
    }
}