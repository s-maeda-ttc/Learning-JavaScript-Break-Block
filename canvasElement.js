class cvsElement{
    constructor(width, height){
        // 描画キャンバス定義
        this.canvas = document.getElementById("myCanvas");
        this.ctx = this.canvas.getContext("2d");
        this.canvas.width = width;
        this.canvas.height = height;
    }

    eraseRect(){
        this.ctx.clearRect(0,0, this.canvas.width, this.canvas.height);
    }
}