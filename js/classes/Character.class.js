class Character extends AnimatedMOb {
    isFacingLeft = false;

    draw(ctx) {
        ctx.save();
        this.moveOnArrowDown();
        if (this.isFacingLeft) {
            this.flipCanvasHorizontalyAroundLeftEdge(ctx);
            this.translateCanvasFacingLeft(ctx);
        }
        super.draw(ctx);
        ctx.restore();
    }

    moveOnArrowDown() {
        if (this.keyboard.ArrowRight) {
            this.turnRight();
            this.startMovingRight();
        }
        else if (this.keyboard.ArrowLeft) {
            this.turnLeft();
            this.startMovingLeft();
        }
        else this.stopMoving();
    }

    turnLeft() {
        this.isFacingLeft= true;
    }

    turnRight() {
        this.isFacingLeft= false;
    }

    flipCanvasHorizontalyAroundLeftEdge(ctx) {
        ctx.scale(-1, 1);
    }

    translateCanvasFacingLeft(ctx) {      
        ctx.translate(-(this.position.x*2 + this.width), 0);
    }

    

}