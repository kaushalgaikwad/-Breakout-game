var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["880363a9-4cc9-45fd-9445-587c30902ff2"],"propsByKey":{"880363a9-4cc9-45fd-9445-587c30902ff2":{"name":"ball","sourceUrl":null,"frameSize":{"x":393,"y":394},"frameCount":1,"looping":true,"frameDelay":12,"version":"Q6cTaK5kitLNxdaKQUmNWxsBEfN06PoX","categories":["sports"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":393,"y":394},"rootRelativePath":"assets/880363a9-4cc9-45fd-9445-587c30902ff2.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var playerMallet;

var goal1=createSprite(200,18,100,20);
goal1.shapeColor=("yellow");

var goal2=createSprite(200,382,100,20);
goal2.shapeColor=("yellow");


// making court
var boundary1 = createSprite(200,0,400,10);
boundary1.shapeColor = "white";
var boundary2 = createSprite(200,400,400,10);
boundary2.shapeColor = "white";
var boundary3 = createSprite(0,200,10,400);
boundary3.shapeColor = "white";
var boundary4 = createSprite(400,200,10,400);
boundary4.shapeColor = "white";



// creating objects and giving them colours
var striker = createSprite(200,200,10,10);
striker.shapeColor = "white";
striker.setAnimation("ball")
striker.scale=0.1

var playerMallet = createSprite(200,50,50,10);
playerMallet.shapeColor = "black";

var computerMallet = createSprite(200,350,50,10);
computerMallet.shapeColor = "black";

var compScore = 0;
var playerScore = 0; 

function draw() {
  //clear the screen
  background("green");
  
}
  
  //serve the strike when space is pressed
  if (keyDown("space")){
  serve();
  }
   
 textSize(18);
 fill("maroon")
 text(compScore,25,225);
 text(playerScore,25,185);
  
  //make the player paddle move with the Arrow keys
  paddleMovement();
  
  
  //AI for the computer paddle
  //make it move with the striker's y position
  computerMallet.x = striker.x;

  
  //draw line at the centre
   for (var i = 0; i < 400; i=i+20) {
    line(i,200,i+10,200);
  }
  
  //create edge boundaries
  //make the striker bounce with the top and the bottom edges
  createEdgeSprites();
  
  striker.bounceOff(edges);
  striker.bounceOff(playerMallet);
  striker.bounceOff(computerMallet);
  
  playerMallet.bounceOff(edges);
  computerMallet.bounceOff(edges);
  

 
 
 if (striker.isTouching(goal1)) {
   compScore = compScore + 1;
 }
 
if (striker.isTouching(goal2)) {
   playerScore = playerScore + 1
 }
 
//striker.x = 200;
//striker.y = 200;
//striker.velocityX=0;
//striker.velocityY=0;

if (playerScore===5 || compScore===5) 
{
  fill("maroon");
  textSize(18);
  text("GAME OVER !!,170,160");
}



 
  //serve the striker when space is pressed
  if (keyDown("space")) {
    serve();
  }
  
 
  drawSprites();






function serve() {
  striker.velocityX = 10;
  striker.velocityY = 5;
 
}

function paddleMovement()
{
  if(keyDown("left")){
    playerMallet.x = playerMallet.x-10;
    
  
  if(keyDown("right")){
    playerMallet.x = playerMallet.x+10;
    
  }
  }
 /* if(keyDown("up"))

   {
    playerMallet.y = playerMallet.y- 10;
   }
  
  
  if(keyDown("down"))
  
   {
    playerMallet.y = playerMallet.y+10;
   }*/
//variable to store different state of game 
var gameState = "serve";
 if(gameState=="Serve");
{
     //displsy text
 textSize(18); 
 fill ("maroon");  
 text("Press Space to Strike",120,180) 
}
  
 
 
// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
