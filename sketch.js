var box;
function setup() {
  createCanvas(400,400);
  box=createSprite(200,200,20,20);
}

function draw() 
{
  background(30);
drawSprites();
if(keyIsDown(RIGHT_ARROW)){
box.x+=5;
}
if(keyIsDown(UP_ARROW)){
  box.y-=5;
  }
  if(keyIsDown(DOWN_ARROW)){
    box.y+=5;
    }
    if(keyIsDown(LEFT_ARROW)){
      box.x-=5;
      }
}




