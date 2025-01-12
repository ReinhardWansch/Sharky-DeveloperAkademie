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
}