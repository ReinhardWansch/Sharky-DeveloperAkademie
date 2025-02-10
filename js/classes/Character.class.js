class Character extends IdleMOb {
    isFacingLeft = false;
    cameraOffset= 0;

    /*** DRAWING ***/

    moveForNextFrame() {
        if (this.keyboard.ArrowRight) this.startMovingRight();
        else if (this.keyboard.ArrowLeft) this.startMovingLeft();
        else this.stopMoving();
        this.moveCameraForNextFrame();
        super.moveForNextFrame();
    }

    moveCameraForNextFrame() {
        if (this.keyboard.ArrowRight) this.cameraOffset += this.velocity.velocityX;
        if (this.keyboard.ArrowLeft) this.cameraOffset -= this.velocity.velocityX;
    }

    draw(ctx) {
        ctx.save();
        if (this.isFacingLeft) {
            this.flipCanvasHorizontalyAroundLeftEdge(ctx);
            this.translateCanvasFacingLeft(ctx);
        }
        super.draw(ctx);
        ctx.restore();
    }

    flipCanvasHorizontalyAroundLeftEdge(ctx) {
        ctx.scale(-1, 1);
    }

    translateCanvasFacingLeft(ctx) {      
        ctx.translate(-(this.position.x*2 + this.width), 0);
    }

    /*** MOVING ***/

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

}