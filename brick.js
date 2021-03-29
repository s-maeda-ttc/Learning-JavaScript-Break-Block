class brickHandler {
    #rowCount;
    #columnCount;
    #width;
    #height;
    #padding;
    #offsetTop;
    #offsetLeft;
    #cvsElem;
    #bricks;

    constructor(rowCount, columnCount, width, height, padding, offsetTop, offsetLeft, cvsElem){
        this.#rowCount = rowCount;
        this.#columnCount = columnCount;
        this.#width = width;
        this.#height = height;
        this.#padding = padding;
        this.#offsetTop = offsetTop;
        this.#offsetLeft = offsetLeft;
        this.#cvsElem = cvsElem;
        this.#bricks = [];
        this.initBricks();

        this.draw();
    }
    

    initBricks(){
        for(let c = 0; c < this.#columnCount; c++){
            this.#bricks[c] = [];
            for(let r = 0; r < this.#rowCount; r++){
                this.#bricks[c][r] = { x: 0, y: 0, status: 1};
            }
        }
    }

    draw(){
        for(let col = 0; col < this.#columnCount; col++){
            for(let row = 0; row < this.#rowCount; row++){
                if(this.#bricks[col][row].status == 1){
                    let brickX = (col*(this.#width + this.#padding)) + this.#offsetLeft;
                    let brickY = (row*(this.#height + this.#padding)) + this.#offsetTop;
                    this.#bricks[col][row].x = brickX;
                    this.#bricks[col][row].y = brickY;

                    this.#cvsElem.ctx.beginPath();
                    this.#cvsElem.ctx.rect(brickX, brickY, this.#width, this.#height);
                    this.#cvsElem.ctx.fill();
                    this.#cvsElem.ctx.closePath();
                }
            }
        }
    }

    //getter
    get getRowCount(){
        return this.#rowCount;
    }

    get getColumnCount(){
        return this.#columnCount;
    }

    get getWidth(){
        return this.#width;
    }

    get getHeight(){
        return this.#height;
    }

    get getPadding(){
        return this.#padding;
    }

    get getOffsetTop(){
        return this.#offsetTop;
    }

    get getOffsetLeft(){
        return this.#offsetLeft;
    }

    get getBricks(){
        return this.#bricks;
    }
}