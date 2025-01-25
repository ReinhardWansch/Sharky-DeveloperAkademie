class MOb extends DrawableObject {
    speed= new Speed(0,0);
    isMoving = false;

    moveForNextFrame(ctx) {
        if (this.isMoving){
            this.position.x += this.speed.speedX;
            this.position.y += this.speed.speedY;
        }
    }

    draw(ctx) {
        super.draw(ctx);
        this.moveForNextFrame(ctx);
    }
}