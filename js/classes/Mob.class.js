class MOb extends DrawableObject {
    speedX = 0;
    speedY = 0;
    repeatingX;

    constructor(imgPath, scale = 1, repeatingX = false, x = 0, y = 0) {
        super(imgPath, scale, x, y);
        this.repeatingX = repeatingX;
        // setInterval(this.moveStep, 1000/60);
    }

    moveStep() {
        this.xPos += this.speedX;
        this.yPos += this.speedY;
    }

    moveForNextFrameRepeat(ctx) {
        this.xPos = (this.xPos + this.speedX) % ctx.canvas.width;
    }

    draw(ctx) {
        super.draw(ctx);
        if (this.repeatingX) this.drawRepeating(ctx);
    }

    drawRepeating(ctx) {
        if (this.isMovingLeft()) {
            this.drawRepeatingMovingLeft(ctx);
        } else if (this.isMovingRight()) {
            this.drawRepeatingMovingRight(ctx);
        }
    }

    drawRepeatingMovingLeft(ctx) {
        let tileCount = ctx.canvas.width / this.width;
        let xOffset = this.xPos + this.width * tileCount;
        if (xOffset < ctx.canvas.width) {
            ctx.drawImage(this.img, xOffset, this.yPos, this.width, this.height);
        }
    }

    drawRepeatingMovingRight(ctx) {
        console.log('drawRepeatingMovingRight()'); ///DEBUG
    }
 
    isMovingLeft(){
        return this.speedX < 0;
    }

    isMovingRight(){
        return this.speedX > 0;
    }
}