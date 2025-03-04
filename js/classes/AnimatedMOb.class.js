class AnimatedMOb extends MOb {
    idleImages = [];
    currentIdleImageIndex = 0;
    idleDelay= 5; //[frames]
    framesCount = 0;

    draw(ctx) {
        super.draw(ctx);
        this.setNextIdleImage();
        this.framesCount++;
    }

    /*##########*/
    /*## IDLE ##*/
    /*##########*/

    setNextIdleImage() {
        if ((this.framesCount % this.idleDelay == 0)) {
            console.log('if'); ///DEBUG
            this.img = this.idleImages[this.currentIdleImageIndex++ % this.idleImages.length];
        }
    }

    setIdleImages(images) {
        this.idleImages = images;
        this.img = this.idleImages[0];
        this.framesCount = 0;
    }
}