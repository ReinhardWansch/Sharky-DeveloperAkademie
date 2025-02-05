class MOb extends DrawableObject {
    speed= new Speed(0,0);

    moveForNextFrame() {
        if (this.isMoving){
            this.position.x += this.speed.speedX;
            this.position.y += this.speed.speedY;
        }
    }

    draw(ctx) {
        super.draw(ctx);
        this.moveForNextFrame();
    }

    set speedX(value) {
        this.speed.speedX = value;
    }

    set speedY(value) {
        this.speed.speedY = value;
    }

    get isMoving() {
        return !this.speed.isZero();
    }
}