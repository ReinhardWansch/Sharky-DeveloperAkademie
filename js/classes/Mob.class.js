class MOb extends DrawableObject {
    speedX = 0;
    speedY = 0;
    repeatingX;

    constructor(imgPath, scale = 1, x = 0, y = 0, repeating = false) {
        super(imgPath, scale, x, y);
        this.repeating = repeating;
    }

    moveForNextFrame() {
        this.xPos += this.speedX;
        this.yPos += this.speedY;
    }

}