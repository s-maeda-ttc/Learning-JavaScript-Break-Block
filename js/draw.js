//オブジェクト宣言
const canvasElem = new cvsElement(480, 320);
var ball = new ballHandler(2, -2, 10, canvasElem);
var paddle = new paddleHandler(10, 80, 7, canvasElem);
var brick = new brickHandler(3, 5, 75, 20, 10, 30, 30, canvasElem);
var playerInfo = new playerInfoHandler(canvasElem);

var collision = new collisionHandler(brick,ball,paddle,playerInfo,canvasElem);
var userAction = userAcrionHandler();
userAction.init(canvasElem, paddle);
document.addEventListener("keydown", userAction.keyDown, false);
document.addEventListener("keyup", userAction.keyUp, false);
document.addEventListener("mousemove", userAction.mouseMove, false);


function startLoop(){
    draw();
    requestAnimationFrame(startLoop);
}

function draw(){
    canvasElem.eraseRect();
    brick.draw();
    ball.draw();
    paddle.draw();
    playerInfo.drawScore();
    playerInfo.drawLives();

    collision.collideBrick();

    collision.collideWallLeftOrRight();

    let doReachTopWall = Boolean(ball.getY + ball.getDy < ball.getRadius);

    if(doReachTopWall){
        ball.setDy = ball.getDy * -1;
    } else if(ball.getY + ball.getDy > canvasElem.canvas.height - ball.getRadius){
        //ボールがパドルに当たった時
        collision.collidePaddle();
    }

    let doingPressedRight = userAction.getRightPressed();
    let doingPressedLeft = userAction.getLeftPressed();
    if(doingPressedRight & paddle.getX < canvasElem.canvas.width - paddle.getWidth) {
        paddle.setX = paddle.getX + 7;
    }
    else if(doingPressedLeft & paddle.getX > 0) {
        paddle.setX = paddle.getX - 7;
    }

    ball.setX = ball.getX + ball.getDx;
    ball.setY = ball.getY + ball.getDy;
}
