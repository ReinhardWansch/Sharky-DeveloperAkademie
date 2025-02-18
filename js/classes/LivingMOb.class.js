class LivingMOb extends AnimatedMOb {
    isFacingLeft = false;

    turnLeft() {
        this.isFacingLeft = true;
    }

    turnRight() {
        this.isFacingLeft = false;
    }

    flipCanvasHorizontalyAroundLeftEdge(ctx) {
        ctx.scale(-1, 1);
    }

    translateCanvasFacingLeft(ctx) {
        ctx.translate(-(this.position.x * 2 + this.width), 0);
    }
}