class BgLights extends MOb {
    rotation;
    turnSpeed = 0; //degrees per frame

    constructor(imgPath, ctx, scale = 1, x = 0, y = 0, rotation=0) {
        super(imgPath, scale, x, y);
        this.rotation = toRadians(rotation);
        this.scaleToWidthOnly(ctx.canvas.width*2);
    }
    
    draw(ctx) {
        let pivotPointHeight= this.height/2 + 100;
        ctx.save();
        ctx.translate(this.centerXpos, this.centerYpos - pivotPointHeight);
        ctx.rotate(this.rotation);
        ctx.translate(-this.centerXpos, -this.centerYpos + pivotPointHeight);
        super.draw(ctx);
        ctx.restore();
        this.rotation= toRadians(toDegrees(this.rotation) + this.turnSpeed);
    }


}