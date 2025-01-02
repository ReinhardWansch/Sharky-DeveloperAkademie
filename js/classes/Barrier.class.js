class Barrier extends Mob {
    static IMG_PATH= './img/3. Background/Barrier/2.png';

    width= 353;
    height= 162;
    xPos= Math.random() * 650;
    yPos= 150;

    constructor() {
        super();
        this.loadImage(Barrier.IMG_PATH);
    }
}