class MOb extends DrawableObject {
    keyboard;
    speed= 1;
    velocity = new Velocity(0, 0);

    moveForNextFrame() {
        this.position.x += this.velocity.velocityX;
        this.position.y += this.velocity.velocityY;
    }

    draw(ctx) {
        super.draw(ctx);
        this.moveForNextFrame();
    }

    setKeyboard(keyboard) {
        this.keyboard = keyboard;
    }

    set velocityX(value) {
        this.velocity.velocityX = value;
    }

    set velocityY(value) {
        this.velocity.velocityY = value;
    }

    get isMoving() {
        return !this.velocity.isZero();
    }
}