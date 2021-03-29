class ballHandler{
    #cvsElem;
    #x;
    #y;
    #dx;
    #dy;
    #xSpeed;
    #ySpeed;
    #radius;

    constructor(dx, dy, ballRadius, cvsElem){
        this.#cvsElem = cvsElem;
        this.#x = this.#cvsElem.canvas.width / 2;
        this.#y = this.#cvsElem.canvas.height - 30;
        this.#dx = dx;
        this.#dy = dy;
        this.#xSpeed = 1;
        this.#ySpeed = 1;
        this.#radius = ballRadius;
        this.drawWithColor("#0095DD");
    }

    draw(){
        this.#cvsElem.ctx.beginPath();
        this.#cvsElem.ctx.arc(this.#x, this.#y, this.#radius, 0, Math.PI*2);
        this.#cvsElem.ctx.fill();
        this.#cvsElem.ctx.closePath();
    }

    drawWithColor(color){
        this.#cvsElem.ctx.beginPath();
        this.#cvsElem.ctx.arc(this.#x, this.#y, this.#radius, 0, Math.PI*2);
        this.#cvsElem.ctx.fillStyle = color;
        this.#cvsElem.ctx.fill();
        this.#cvsElem.ctx.closePath();
    }

    //getter
    get getX(){
        return this.#x;
    }

    get getY(){
        return this.#y;
    }

    get getDx(){
        return this.#dx;
    }

    get getDy(){
        return this.#dy;
    }

    get getXSpeed(){
        return this.#xSpeed;
    }

    get getYSpeed(){
        return this.#ySpeed;
    }

    get getRadius(){
        return this.#radius;
    }

    //setter
    set setX(value){
        this.#x = value;
    }
    set setY(value){
        this.#y = value;
    }
    set setDx(value){
        this.#dx = value;
    }
    set setDy(value){
        this.#dy = value;
    }
    set setXSpeed(value){
        this.#xSpeed = value;
    }
    set setYSpeed(value){
        this.#ySpeed = value;
    }
    set setRadius(value){
        this.#radius = value;
    }
}
