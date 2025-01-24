class DrawableObject {
    img;
    scaleX;
    scaleY;
    xPos;
    yPos;

    constructor(imgPath, scale = 1, x = 0, y = 0) {
        this.loadImage(imgPath);
        this.xPos = x;
        this.yPos = y;
        this.scaleX = scale;
        this.scaleY = scale;
    }

    get width() {
        return this.img.width * this.scaleX;
    }

    get height() {
        return this.img.height * this.scaleY;
    }

    scale(scaleFactor) {
        this.scaleX *= scaleFactor;
        this.scaleY *= scaleFactor;
    }

    setScaleFactor(scaleFactor) {
        this.scaleX = scaleFactor;
        this.scaleY = scaleFactor;
    }

    loadImage(imgPath) {
        this.img = new Image();
        this.img.src = imgPath;
    }

    draw(ctx) {
        ctx.drawImage(
            this.img,
            this.xPos,
            this.yPos,
            this.width,
            this.height);
    }

    scaleToWidth(width) {
        this.setScaleFactor(width / this.img.width);
    }

    scaleToWidthOnly(width) {
        this.scaleX = width / this.img.width;
    }

    scaleToHeight(height) {
        this.scale = height / this.img.height;
    }
    scaleToHeightOnly(height) {
        this.scaleY = height / this.img.height;
    }

    get centerXpos() {
        return this.xPos + this.width / 2;
    }

    get centerYpos() {
        return this.yPos + this.height / 2;
    }
}