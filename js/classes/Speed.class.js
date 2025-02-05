class Speed {
    speedX;
    speedY;

    constructor(speedX = 0, speedY = 0) {
        this.speedX = speedX;
        this.speedY = speedY;
    }

    isZero() {
        return this.speedX === 0 && this.speedY === 0;
    }

    setToZero() {
        this.speedX = 0;
        this.speedY = 0;
    }
}