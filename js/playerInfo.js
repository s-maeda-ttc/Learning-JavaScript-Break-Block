class playerInfoHandler {
    #lives;
    #score;
    #fontInfo;
    #cvsElem;

    constructor(cvsElem){
        this.#lives = 3;
        this.#score = 0;
        this.#fontInfo = "16px Arial";
        this.#cvsElem = cvsElem;
        this.drawScore();
        this.drawLives();
    }

    drawLives() {
        this.#cvsElem.ctx.font = this.#fontInfo;
        this.#cvsElem.ctx.fillText("Lives: " + this.#lives, this.#cvsElem.canvas.width-65, 20);
    }

    drawScore(){
        this.#cvsElem.ctx.font = this.#fontInfo;
        this.#cvsElem.ctx.fillText("Score: " + this.#score, 8, 20);
    }

    missingBall(){
        this.#lives--;
        this.drawLives();
    }

    raiseScore(){
        this.#score++;
        this.drawScore();
    }

    get getLives(){
        return this.#lives;
    }

    get getScore(){
        return this.#score;
    }
}
