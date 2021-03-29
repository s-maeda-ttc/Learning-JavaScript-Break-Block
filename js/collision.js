class collisionHandler{
    #brick;
    #ball;
    #paddle;
    #playerInfo;
    #cvsElem;

    constructor(brick, ball, paddle, playerInfo, cvsElem){
        this.#brick = brick;
        this.#ball = ball;
        this.#paddle = paddle;
        this.#playerInfo = playerInfo;
        this.#cvsElem = cvsElem;
    }

    collideWallLeftOrRight(){
        let doTouchRightWall = Boolean(this.#ball.getX + this.#ball.getDx > this.#cvsElem.canvas.width - this.#ball.getRadius);
        let doTouchLeftWall = Boolean(this.#ball.getX + this.#ball.getDx < this.#ball.getRadius);
        if(doTouchRightWall | doTouchLeftWall){
            this.#ball.setDx = this.#ball.getDx * -1;
        }
    }

    collidePaddle(){
        let doTouchPaddle = Boolean(this.#ball.getX > this.#paddle.getX) &
                            Boolean(this.#ball.getX < (this.#paddle.getX + this.#paddle.getWidth));
        if(doTouchPaddle){
            this.#ball.setDx = this.#ball.getDx * this.#ball.getXSpeed;
            this.#ball.setDy = this.#ball.getDy * -this.#ball.getYSpeed;
        }else{
            this.#playerInfo.missingBall();
            if(!this.#playerInfo.getLives) {
                alert("GAME OVER");
                document.location.reload();
            }
            else {
                this.#ball.setX = canvasElem.canvas.width / 2;
                this.#ball.setY = canvasElem.canvas.height - 30;
                this.#ball.setDx = 2;
                this.#ball.setDy = -2;
                this.#paddle.initPaddle();
            }
        }
    }

    collideBrick(){
        let rowCount = this.#brick.getRowCount;
        let colCount = this.#brick.getColumnCount;
        let bricks = this.#brick.getBricks;

        for(let c = 0; c < colCount; c++){
            for(let r = 0; r < rowCount; r++){
                var b = bricks[c][r];
                if(b.status == 1){
                    let isSameLocateX = Boolean(this.#ball.getX > b.x & this.#ball.getX < b.x + this.#brick.getWidth);
                    let isSameLocateY = Boolean(this.#ball.getY > b.y & this.#ball.getY < b.y + this.#brick.getHeight);
                    if(isSameLocateX & isSameLocateY){
                        this.#ball.setDy = this.#ball.getDy * -1;
                        b.status = 0;
                        this.#playerInfo.raiseScore();
                        if(this.#playerInfo.getScore == rowCount * colCount){
                            alert("You Win, Congratulations!");
                            document.location.reload();
                        }
                    }
                }
            }
        }
    }
}
