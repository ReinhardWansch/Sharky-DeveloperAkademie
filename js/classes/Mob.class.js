class MOb extends DrawableObject {
    speedX = 0;
    speedY = 0;
    repeatingX;

    constructor(imgPath, scale = 1, repeatingX = false, x = 0, y = 0) {
        super(imgPath, scale, x, y);
        this.repeatingX = repeatingX;
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
        let offsetTemp = this.xPos + this.width * tileCount;
        if (offsetTemp < ctx.canvas.width) {
            ctx.drawImage(this.img, offsetTemp, this.yPos, this.width, this.height);
        }
    }

    drawRepeatingMovingRight(ctx) {
        let tileCount = ctx.canvas.width / this.width;
        tileCount--;
        let offsetTemp = this.xPos - this.width * tileCount;
        if (offsetTemp > 0) {
            ctx.drawImage(this.img, offsetTemp - this.width, this.yPos, this.width, this.height);
        }
    }

    setSpeedX(value, ctx) {
        if (value < 0) {
            this.xPos -= ctx.canvas.width;
        } else if (this.isMovingLeft() && value >= 0) {
            this.xPos += ctx.canvas.width;
        } 
        this.speedX= value;
    }

    isMovingLeft() {
        return this.speedX < 0;
    }

    isMovingRight() {
        return this.speedX > 0;
    }
}