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

    scale(scaleValue) {
        this.scaleX = scaleValue;
        this.scaleY = scaleValue;
    }

    loadImage(imgPath) {
        this.img = new Image();
        this.img.src = imgPath;
    }

    draw(ctx) {
        this.img.decode()
            .then(() => {
                ctx.drawImage(
                    this.img,
                    this.xPos,
                    this.yPos,
                    this.width,
                    this.height);
            });
    }

    scaleToWidth(width) {
        // this.scale = width / this.img.width;
        this.scale(width / this.img.width);
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