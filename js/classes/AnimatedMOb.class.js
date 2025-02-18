class AnimatedMOb extends MOb {
    idleImages = [];
    currentIdleImageIndex = 0;
    idleDelay= 10; //[frames]
    framesCount = 0;

    draw(ctx) {
        super.draw(ctx);
        this.incrementIdleImageIndex();
        this.framesCount++;
    }

    incrementIdleImageIndex() {
        this.currentIdleImageIndex++;
        if (this.framesCount % this.idleDelay == 0) {
            this.img = this.idleImages[this.currentIdleImageIndex++ % this.idleImages.length];
        }
    }

    setIdleImages(images) {
        this.idleImages = images;
        this.img = this.idleImages[0];
        this.framesCount = 0;
    }
}