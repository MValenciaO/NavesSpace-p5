const player = [];
const bala = [];
let defCol = 0;
let cont = 0;
let movBala = 0;
let movBala2 = 0;
const stars = [];
const starsLength = 400
balaPLay1= false;
let posbalaY=0;

function setup() {
	createCanvas(windowWidth, windowHeight);
  for(let i = 0; i < 2; i++){
    player.push(createSpace());
  }
  for(let i = 0; i < starsLength; i++){
    stars.push(createStars());
  }  
}

function draw() {
	background(0);
  drawStar();
  drawPlayer();
  //drawBala(); 

}

function createStars(){
  const speed = random()
  let x = floor(random(1,width));
  let y = floor(random(1,height));
  const r = floor(3,8);
  const c = color(255,255,255,floor(255*speed));
  return {
    x,
    y,
    r,
    c,
    move (dirX,dirY){
      this.x = this.x + speed * dirX;
      this.y = this.y + speed * dirY;
    }
  }
}
function drawStar(){

  stars.forEach((s)=> {
    fill(s.c);
    noStroke();
    ellipse(s.x, s.y, s.r, s.r);
  });
}
function mouseMoved(){
  const dirX = mouseX > pmouseX ? 1 : -1;
  const dirY = mouseY > pmouseY ? 1 : -1;

  stars.forEach((s)=>{
    s.move(dirX,dirY)
  });
}
function createSpace(){
  let x = 75;
  let y = height/2;
  let l = 50;
  let d = '100';
  let D = '68';

  return{
    x,
    y,
    l,
  }
}
function createBala(x,y){
  let r = 25;

  return{
    r,
    x:x,
    y:y,
  }
}  
function drawPlayer(){
  player.forEach((s)=> {

    if(cont == 0){
      fill(0,0,255);
      noStroke();
      rect(s.x, s.y, s.l, s.l);
      cont=1;
      if (keyIsDown(87)||keyIsDown(119)) {

        if( s.y >0){
          s.y-=5;
        }
      }
      if (keyIsDown(83)||keyIsDown(115)) {

        if( (s.y+s.l) < height){
          s.y+=5;
        }
      }
      if (keyIsDown(68)||keyIsDown(100)) {
        bala.push(createBala());
        drawBala(s.x+52,s.y+23);
      }
    }else{
      fill(255,0,0);
      noStroke();
      rect(s.x+310, s.y, s.l, s.l);
      cont=0;
      if (keyIsDown(DOWN_ARROW)) {
        if( (s.y+s.l) < height){
          s.y+=5;
        }
      }
       if (keyIsDown(UP_ARROW)) {
        if( s.y >0){
          s.y-=5;
        }
      }if (keyIsDown(LEFT_ARROW)) {
        bala.push(createBala());
        drawBala(s.x+299,s.y+23);
    }
  }
  });
}
function drawBala(x,y){
  movBala+=x;
  ellipse(movBala++,y,20,20);
}







