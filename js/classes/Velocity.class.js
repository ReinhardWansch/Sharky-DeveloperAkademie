class Velocity {
    velocityX;
    velocityY;

    constructor(velocityX = 0, velocityY = 0) {
        this.velocityX = velocityX;
        this.velocityY = velocityY;
    }

    isZero() {
        return this.velocityX === 0 && this.velocityY === 0;
    }

    setToZero() {
        this.velocityX = 0;
        this.velocityY = 0;
    }
}