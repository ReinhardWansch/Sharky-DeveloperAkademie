class BgObject extends MOb {
    repeatAmount;

    constructor(imgPath, speed= 1, repeatAmount = 1) {
        super(imgPath, speed);
        this.repeatAmount = repeatAmount;
    }

    draw(ctx) {
        for (let i = 0; i < this.repeatAmount; i++) {
            ctx.drawImage(
                this.img,
                this.position.x + i * this.width,
                this.position.y,
                this.width,
                this.height);
        }
        this.moveForNextFrame();
    };

    moveForNextFrame() {
        if (this.keyboard.ArrowRight)
            this.startMovingLeft();
        else if (this.keyboard.ArrowLeft)
            this.startMovingRight();
        else this.stopMoving();
        super.moveForNextFrame();
    }
}