class Character extends LivingMOb {
    
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
}