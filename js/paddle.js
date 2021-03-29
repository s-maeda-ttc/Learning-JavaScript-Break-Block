class paddleHandler {
    #cvsElem;
    #height;
    #width;
    #x;
    #dx;

    constructor(height, width, dx, cvsElem){
        this.#cvsElem = cvsElem;
        this.#height = height;
        this.#width = width;
        this.#x;
        this.initPaddle();
        this.#dx = dx;
        this.draw();
    }

    initPaddle(){
        this.#x = (this.#cvsElem.canvas.width - this.#width) / 2
    }

    draw(){
        this.#cvsElem.ctx.beginPath();
        this.#cvsElem.ctx.rect(this.#x , this.#cvsElem.canvas.height - this.#height, this.#width, this.#height);
        this.#cvsElem.ctx.fill();
        this.#cvsElem.ctx.closePath();
    }

    move(isPushedRight){
        var moveValue = (isPushedRight == true ? this.#dx : -1 * this.#dx);
        this.#x += moveValue;
        draw();
    }

    //getter
    get getHeight(){
        return this.#height;
    }

    get getWidth(){
        return this.#width;
    }

    get getX(){
        return this.#x;
    }

    get getDx(){
        return this.#dx;
    }

    //setter
    set setHeight(value){
        this.#height = value;
    }

    set setWidth(value){
        this.#width = value;
    }

    set setX(value){
        this.#x = value;
    }

    set setDx(value){
        this.#dx = value;
    }
}
