var userAcrionHandler = function(){
    var rightPressed;
    var leftPressed;
    var spacePressed;

    var cvsElem;
    var paddle;

    function init(canvasElement, paddleInfo){
        //ボタン押下イベント定義
        rightPressed = false;
        leftPressed = false;
        spacePressed = false;

        cvsElem = canvasElement;
        paddle = paddleInfo;
    }

    function keyDown(e){
        if(e.key == "Right" | e.key == "ArrowRight"){
            rightPressed = true;
        }
        else if(e.key = "Left" | e.key == "ArrowLeft"){
            leftPressed = true;
        }
        else if(e.key = " "){
            spacePressed = true;
        }
    }

    function keyUp(e){
        if(e.key == "Right" | e.key == "ArrowRight"){
            rightPressed = false;
        }
        else if(e.key = "Left" | e.key == "ArrowLeft"){
            leftPressed = false;
        }
        else if(e.key = " "){
            spacePressed = false;
        }
    }

    function mouseMove(e){
        var relativeX = e.clientX - cvsElem.canvas.offsetLeft;
        if(relativeX > 0 & relativeX < cvsElem.canvas.width){
            paddle.setX = relativeX - paddle.getWidth / 2;
        }
    }

    function getRightPressed(){
        return rightPressed;
    }

    function getLeftPressed(){
        return leftPressed;
    }

    return {
        init: init,
        keyDown: keyDown,
        keyUp: keyUp,
        mouseMove: mouseMove,
        getRightPressed: getRightPressed,
        getLeftPressed: getLeftPressed,
    }
}
