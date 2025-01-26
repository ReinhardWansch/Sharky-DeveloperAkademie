class BgObject extends MOb {
    repeatAmount;

    constructor(ctx, repeatAmount = 1) {
        super(ctx);
        this.repeatAmount = repeatAmount;
    }

    draw(ctx) {
        let x = 0;
        for (let i = 0; i < this.repeatAmount; i++) {
            x = i * this.width;
            ctx.drawImage(
                this.img,
                x,
                this.position.y,
                this.width,
                this.height);
        }
    };
}