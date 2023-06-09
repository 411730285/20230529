class Bullet{
    constructor(args){ 
        this.r = args.r || 10 //如果飛彈有傳回直徑的大小就以參數為直徑，否則預設為10
        //飛彈起始的位置(以向量方式表示座標)，要以中間砲台發射，所以座標為(width/2,height/2)
        this.p = args.p || shipP.copy()
        this.v = args.v || createVector(mouseX-width/2,mouseY-height/2).limit(10) //飛彈的速度
        this.color = args.color || "red" //飛彈的顏色
    }
    draw(){ //劃出飛彈
        push()
            translate(this.p.x,this.p.y)
            fill(this.color)
            noStroke()
            ellipse(0,0,this.r)
        pop()
    }
    update(){ //計算出移動後的位置
        this.p.add(this.v)
    }

}