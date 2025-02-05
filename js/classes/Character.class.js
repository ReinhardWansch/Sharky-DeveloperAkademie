class Character extends IdleMOb {

    moveForNextFrame() {
        super.moveForNextFrame();
        console.log(this.keyboard.ArrowRight); ///DEBUG
        if (this.keyboard.ArrowRight) this.startMovingRight();
        else if (this.keyboard.ArrowLeft) this.startMovingLeft();
        else this.stopMoving();
    }

    startMovingRight() {
        this.speedX = 2; //this.speed statt 2
    }

    startMovingLeft() {
        this.speedX = -2; //this.speed*-1 statt 2
    }

    stopMoving() {
        this.speed.setToZero();
    }
}