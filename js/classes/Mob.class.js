class MOb extends DrawableObject {
    keyboard;
    // speed;
    speed = new Speed(0, 0); //das könnte man nach velocity umbenennen

    moveForNextFrame() {
        this.position.x += this.speed.speedX;
        this.position.y += this.speed.speedY;
    }

    draw(ctx) {
        super.draw(ctx);
        this.moveForNextFrame();
    }

    setKeyboard(keyboard) {
        this.keyboard = keyboard;
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