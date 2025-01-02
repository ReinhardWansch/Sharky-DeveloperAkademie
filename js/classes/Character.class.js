class Character extends Mob {
    static IMG_PATH= './img/1.Sharkie/1.IDLE/1.png';
    
    width= 203;
    height= 250;
    yPos= 150;

    constructor() {
        super();
        this.loadImage(Character.IMG_PATH);
    }
}