class MOb extends DrawableObject {
    keyboard;
    speed;
    velocity = new Velocity(0, 0);

    constructor(imgPath, speed= 1) {
        super(imgPath);
        this.speed= speed;
    }

    moveForNextFrame() {
        this.position.x += this.velocity.velocityX;
        this.position.y += this.velocity.velocityY;
    }

    draw(ctx) {
        super.draw(ctx);
        // this.moveForNextFrame();
    }

    /*############*/
    /*## MOVING ##*/
    /*############*/

    startMovingRight() {
        this.velocityX = this.speed;
        this.isFacingLeft = false;
    }
    
    startMovingLeft() {
        this.velocityX = this.speed * -1;
        this.isFacingLeft = true;
    }

    stopMoving() {
        this.velocity.setToZero();
    }

    /*###################*/
    /*## SETTER GETTER ##*/
    /*###################*/

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