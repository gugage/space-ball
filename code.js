var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["09a57661-37ca-405d-b941-93d6236be43b","132173cb-795a-4e9b-ab05-eabaf73b6ffd","3af8430a-859c-40f5-9ad8-d699fb5efee3","bda67e95-8017-45b8-8bbb-63a0a344fdd6","69597e85-3bc0-415e-9973-09eddba38ed2"],"propsByKey":{"09a57661-37ca-405d-b941-93d6236be43b":{"name":"b","sourceUrl":"assets/v3/animations/5pM4WKjbzunlMRh1-KMXM-K6vvY5MJIBDsmvxwb8Ojc/09a57661-37ca-405d-b941-93d6236be43b.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":4,"version":"0Kre0QAQBimsoJQrRF3mhs8re1JsJQ8I","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/v3/animations/5pM4WKjbzunlMRh1-KMXM-K6vvY5MJIBDsmvxwb8Ojc/09a57661-37ca-405d-b941-93d6236be43b.png"},"132173cb-795a-4e9b-ab05-eabaf73b6ffd":{"name":"enemy1","sourceUrl":"assets/v3/animations/5pM4WKjbzunlMRh1-KMXM-K6vvY5MJIBDsmvxwb8Ojc/132173cb-795a-4e9b-ab05-eabaf73b6ffd.png","frameSize":{"x":35,"y":50},"frameCount":1,"looping":true,"frameDelay":4,"version":"x.8o.h.8tJdapaHODghdhPCOHjvLaQnF","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":35,"y":50},"rootRelativePath":"assets/v3/animations/5pM4WKjbzunlMRh1-KMXM-K6vvY5MJIBDsmvxwb8Ojc/132173cb-795a-4e9b-ab05-eabaf73b6ffd.png"},"3af8430a-859c-40f5-9ad8-d699fb5efee3":{"name":"enemy3","sourceUrl":"assets/v3/animations/5pM4WKjbzunlMRh1-KMXM-K6vvY5MJIBDsmvxwb8Ojc/3af8430a-859c-40f5-9ad8-d699fb5efee3.png","frameSize":{"x":35,"y":50},"frameCount":1,"looping":true,"frameDelay":4,"version":"mMqhZol4ccTyuFC_InZYbr0gZvgEavN_","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":35,"y":50},"rootRelativePath":"assets/v3/animations/5pM4WKjbzunlMRh1-KMXM-K6vvY5MJIBDsmvxwb8Ojc/3af8430a-859c-40f5-9ad8-d699fb5efee3.png"},"bda67e95-8017-45b8-8bbb-63a0a344fdd6":{"name":"enemy2","sourceUrl":"assets/v3/animations/5pM4WKjbzunlMRh1-KMXM-K6vvY5MJIBDsmvxwb8Ojc/bda67e95-8017-45b8-8bbb-63a0a344fdd6.png","frameSize":{"x":35,"y":50},"frameCount":1,"looping":true,"frameDelay":4,"version":"23sO.KAWutsDRiaLQYoQFneD4hPw3HFD","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":35,"y":50},"rootRelativePath":"assets/v3/animations/5pM4WKjbzunlMRh1-KMXM-K6vvY5MJIBDsmvxwb8Ojc/bda67e95-8017-45b8-8bbb-63a0a344fdd6.png"},"69597e85-3bc0-415e-9973-09eddba38ed2":{"name":"hero","sourceUrl":"assets/v3/animations/5pM4WKjbzunlMRh1-KMXM-K6vvY5MJIBDsmvxwb8Ojc/69597e85-3bc0-415e-9973-09eddba38ed2.png","frameSize":{"x":30,"y":30},"frameCount":1,"looping":true,"frameDelay":4,"version":"P4IF2uXdySYP4yXON17pynKeIUbjNVxp","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":30,"y":30},"rootRelativePath":"assets/v3/animations/5pM4WKjbzunlMRh1-KMXM-K6vvY5MJIBDsmvxwb8Ojc/69597e85-3bc0-415e-9973-09eddba38ed2.png"}}};
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

var b = createSprite(200,200);
b.setAnimation("b");
var enemy1 = createSprite(200,250,10,10);
enemy1.setAnimation("enemy1");
var enemy2 = createSprite(200,150,10,10);
enemy2.setAnimation("enemy2");
var enemy3 = createSprite(200,50,10,10);
enemy3.setAnimation("enemy3");

var hero = createSprite(200,345,10,10);
var net = createSprite(200,5,200,20);
net.shapeColor = "red";
var goal =0;
var death = 0;
hero.setAnimation("hero");
enemy1.velocityX = -10;
enemy2.velocityX = 10;
enemy3.velocityX = -10;

function draw() {
  background("white");
createEdgeSprites() ; 

enemy1.bounceOff(edges);
enemy2.bounceOff(edges);
enemy3.bounceOff(edges);

if (keyDown("UP_ARROW")) {
 hero.y=hero.y-3 ;
}
if (keyDown("DOWN_ARROW")) {
 hero.y=hero.y+3 ;
}
if (keyDown("LEFT_ARROW")) {
 hero.x=hero.x-3 ;
}
if (keyDown("RIGHT_ARROW")) {
 hero.x=hero.x+3 ;
}
if (hero.isTouching(enemy1)|| hero.isTouching(enemy2) || hero.isTouching(enemy3) ) {
playSound("assets/category_accent/puzzle_game_accent_a_02.mp3");
hero.x=200;
hero.y=350;
death=death+1;
}
if (hero.isTouching(net) ) {
playSound("assets/category_alerts/vibrant_game_correct_answer_hit.mp3");
hero.x=200;
hero.y=345;
goal=goal+1;
}


    
drawSprites();

textSize(20);
fill("white");
text("objetivos:"+goal, 5, 370);

textSize(20);
fill("white");
text("mortes:"+death, 300, 370);

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
