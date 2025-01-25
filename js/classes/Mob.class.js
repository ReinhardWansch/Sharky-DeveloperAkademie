class MOb extends DrawableObject {
    speedX = 0;
    speedY = 0;
    isMoving = false;

    moveForNextFrame(ctx) {
        if (this.isMoving){
            this.xPos += this.speedX;
            this.yPos += this.speedY;
        }
    }

    draw(ctx) {
        super.draw(ctx);
        this.moveForNextFrame(ctx);
    }
}