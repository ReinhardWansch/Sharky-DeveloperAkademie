class Character extends IdleMOb {
    isFacingLeft = false;

    moveForNextFrame() {
        super.moveForNextFrame();
        if (this.keyboard.ArrowRight) this.startMovingRight();
        else if (this.keyboard.ArrowLeft) this.startMovingLeft();
        else this.stopMoving();
    }

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

    draw(ctx) {
        ctx.save();
        if (this.isFacingLeft) {
            this.flipCanvasHorizontalyAroundLeftEdge(ctx);
            this.translateFacingLeft(ctx);
        }
        super.draw(ctx);
        ctx.restore();
    }

    flipCanvasHorizontalyAroundLeftEdge(ctx) {
        ctx.scale(-1, 1);
    }

    translateFacingLeft(ctx) {      
        ctx.translate(-(this.position.x*2 + this.width), 0);
    }
}