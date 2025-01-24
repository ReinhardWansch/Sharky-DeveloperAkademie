class MOb extends DrawableObject {
    speedX = 0;
    speedY = 0;
    repeatingX;

    constructor(imgPath, scale = 1, repeatingX = false, x = 0, y = 0) {
        super(imgPath, scale, x, y);
        this.repeatingX = repeatingX;
    }

    moveForNextFrameRepeat(ctx) {
        console.log('moveForNextFrameRepeat(ctx)'); ///DEBUG
        console.log('ctx.canvas.width= ' + ctx.canvas.width); ///DEBUG
        console.log('this.width= ' + this.width); ///DEBUG
        console.log('this.width - ctx.canvas.width= ' + (this.width - ctx.canvas.width)); ///DEBUG
        let overWidth = Math.max(this.width - ctx.canvas.width, 0);
        this.xPos = (this.xPos + this.speedX) % (ctx.canvas.width + overWidth);
        console.log(overWidth); ///DEBUG
    }

    draw(ctx) {
        // console.log('MOb: draw(ctx)'); ///DEBUG
        super.draw(ctx);
        if (this.repeatingX) {
            let tileCount = Math.max(Math.floor(ctx.canvas.width / this.width), 1);
            let offsetPosLeftX = this.xPos - tileCount * (this.width);
            let offsetPosRightX = this.xPos + tileCount * (this.width);
            if (offsetPosLeftX + this.width > 0)
                console.log('draw offsetPosLeft'); ///DEBUG
            ctx.drawImage(this.img, offsetPosLeftX, this.yPos, this.width, this.height);
            if (offsetPosRightX < ctx.canvas.width) {
                console.log('draw offsetPosRight'); ///DEBUG
                console.log('offsetPosRight= ' + offsetPosRightX); ///DEBUG
                ctx.drawImage(this.img, offsetPosRightX, this.yPos, this.width, this.height);
            }
        }
    }

    isMovingLeft() {
        return this.speedX < 0;
    }

    isMovingRight() {
        return this.speedX > 0;
    }
}