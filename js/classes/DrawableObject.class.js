class DrawableObject {
    img;
    scale;
    xPos;
    yPos;

    constructor(imgPath, scale = 1, x = 0, y = 0) {
        this.loadImage(imgPath);
        this.xPos = x;
        this.yPos = y;
        this.scale = scale;
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
            this.img.width * this.scale,
            this.img.height * this.scale);
    }
}