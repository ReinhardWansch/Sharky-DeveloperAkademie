class AnimatedMOb extends MOb {
    idleImages = [];
    currentIdleImageIndex = 0;
    idleDelay= 10; //[frames]
    framescount = 0;

    draw(ctx) {
        super.draw(ctx);
        this.incrementIdleImageIndex();
        this.framescount++;
    }

    incrementIdleImageIndex() {
        this.currentIdleImageIndex++;
        if (this.framescount % this.idleDelay == 0) {
            this.img = this.idleImages[this.currentIdleImageIndex++ % this.idleImages.length];
        }
    }

    setIdleImages(images) {
        this.idleImages = images;
        this.img = this.idleImages[0];
        this.framescount = 0;
    }


}