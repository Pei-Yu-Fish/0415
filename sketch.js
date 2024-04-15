let bg = ["#FAEBCD"];
let colors=["#E06A4E", "#DEB853", "#789F8A"];
let color2 = ["#5A3D2B"];

var balls=[]
var ball
class ball_class{
  constructor(args){
    this.p=args.p||{x:width/2,y:height/2}
    this.c=args.c||random(colors)
    this.v=args.v||{x:random(-3,3),y:random(-3,3)}
    this.s=args.s||random(color2)  //邊框
    this.d= random(6, 10)
  }
  draw(){
    angleMode(DEGREES)  //設定為角度
//------------漸層設定------------                
          fill(this.c);
    for (let r = 0; r < 360; r = r + 72) {
    push();
      translate(this.p.x,this.p.y);
      rotate(r)
      noStroke();
      circle(-this.d * 1.5, -this.d * 1.5, this.d * 3);

      stroke(this.s);
      strokeWeight(this.d / 1.5);
      drawingContext.setLineDash([2, 5]);
       
      beginShape();
      vertex(0, 0);
      vertex(-this.d, -this.d);
      line(0, 0, -this.d, -this.d * 2);
      line(0, 0, -this.d * 2, -this.d);
      endShape();
    pop();
    }
       
    
  } 
  update(){  //物件更新後的程式碼
    this.p.x=this.p.x+this.v.x
    this.p.y=this.p.y+this.v.y 
    //反彈
    if(this.p.x<0){
      this.v.x=-this.v.x
    }
    if(this.p.x>width){
      this.v.x=-this.v.x
    }
    if(this.p.y<0){
      this.v.y=-this.v.y
    }
    if(this.p.y>height){
      this.v.y=-this.v.y
    }
  }

}



function setup() {
  createCanvas(windowWidth,windowHeight);
  for(i=0;i<30;i=i+1){  //產生幾個
    ball=new ball_class({ //傳一段參數值到class，以參數為主
      p:{x:random(0,width),y:random(0,height)}, 
      v:{x:random(-8,5),y:random(-8,5)}
    })
    balls.push(ball)  //把數據存入
  }

}

function draw() {
  background(bg);
  for(j=0;j<balls.length;j=j+1){
    ball=balls[j]
    ball.draw()
    ball.update() 
  }

}




