class DrawableObject {
    img;
    width;
    height;
    scale;
    xPos;
    yPos;

    constructor(imgPath, scale= 1, x=0, y=0) {
        this.loadImage(imgPath);
        this.xPos= x;
        this.yPos= y;
        this.scale= scale;
        this.img.decode().then(()=> {
            this.width= this.img.width;
            this.height= this.img.height;
        });
    }

    loadImage(imgPath) {
        this.img= new Image();
        this.img.src= imgPath;
    }

    draw(ctx) {
        ctx.drawImage(this.img, this.xPos, this.yPos, this.width*this.scale, this.height*this.scale);
    }
}