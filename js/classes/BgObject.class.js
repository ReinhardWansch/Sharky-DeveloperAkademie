class BgObject extends MOb {
    repeatAmount;

    constructor(ctx, repeatAmount = 1) {
        super(ctx);
        this.repeatAmount = repeatAmount;
    }

    draw(ctx) {
        // console.log('BgObject: draw()'); ///DEBUG
        let x = 0;
        for (let i = 0; i < this.repeatAmount; i++) {
            x += this.width;
            ctx.drawImage(
                this.img,
                x,
                this.position.y,
                this.width,
                this.height);
        }
        this.moveForNextFrame();
    };

    draw(ctx) {
        super.draw(ctx);
        for (let i = 1; i < this.repeatAmount; i++) {
            let xOffSet = this.width * i;
            ctx.drawImage(
                this.img,
                this.position.x + xOffSet,
                this.position.y,
                this.width,
                this.height);
        }
    }
}