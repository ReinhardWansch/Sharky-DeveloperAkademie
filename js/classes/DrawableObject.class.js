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