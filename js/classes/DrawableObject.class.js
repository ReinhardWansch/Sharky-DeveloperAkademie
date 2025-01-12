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

    set scale(scale) {
        this.scaleX = scale;
        this.scaleY = scale;
    }

    get width() {
        return this.img.width * this.scaleX;
    }

    get height() {
        return this.img.height * this.scaleY;
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
            this.img.width * this.scaleX,
            this.img.height * this.scaleY);
    }

    scaleToWidth(width) {
        this.scale = width / this.img.width;
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
}