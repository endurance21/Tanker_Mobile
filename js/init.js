let aspectRatio = window.innerWidth / window.innerHeight;
aspectRatio = (aspectRatio <= 1) ? aspectRatio : (9 / 16);
const GAME_HEIGHT = innerHeight*2;
const GAME_WIDTH = innerWidth*2;

const GRAVITY = 0.2;
const PI = Math.PI;
// const Up = new Vector2d(0,-1);
// const Down = new Vector2d(0,1);
// const Right = new Vector2d(1,0);
// const Left = new Vector2d(-1,0);

 
var ImageLoader = new ImageLoaderClass();
var dirt = ImageLoader.load("assets/images/dirt.png");
dirt.setAttribute("class","Ground");
var grass = ImageLoader.load("assets/images/grass.png");
grass.setAttribute("class","Ground");
var sand = ImageLoader.load("assets/images/sand.png");
sand.setAttribute("class","Ground");
var treeLarge = ImageLoader.load("assets/images/treeLarge.png");
treeLarge.setAttribute("class","object");
var treeSmall = ImageLoader.load("assets/images/treeSmall.png");
treeSmall.setAttribute("class","object");
var Sprites = [null,dirt,grass,sand,treeLarge,treeSmall];

// const canvas = document.querySelector('canvas');
// canvas.width = 400;
// canvas.height = 100;
// const ctx = canvas.getContext('2d');
// ctx.strokeRect(400,20,-200,-30);
// window.setInterval(()=>{
// },1000);




// function Camera(x,y,map, width, height) {
  
// }
var keyPressed = {
    SPACE : false,
    LEFT : false,
    RIGHT : false,
    UP  : false,
    DOWN : false,
};


function handleKeyDown(e){
    switch(e.code){
        case 'KeyW': case 'ArrowUp' :
            keyPressed.UP = true;
            break;
        case 'KeyA': case 'ArrowLeft' :
            keyPressed.LEFT = true;
            break;
        case 'KeyS': case 'ArrowDown' :
            keyPressed.DOWN = true;
            break;
        case 'KeyD': case 'ArrowRight' :
            keyPressed.RIGHT= true;
            break;
        case 'Space':
            keyPressed.SPACE = true;
            break;
    }
}

function handleKeyUp(e){
    switch(e.code){
        case 'KeyW': case 'ArrowUp' :
            keyPressed.UP= false;
            break;
        case 'KeyA': case 'ArrowLeft' :
            keyPressed.LEFT = false;
            break;
        case 'KeyS': case 'ArrowDown' :
            keyPressed.DOWN = false;
            break;
        case 'KeyD': case 'ArrowRight' :
            keyPressed.RIGHT = false;
            break;
        case 'Space': 
            keyPressed.SPACE = false;
            break;
        
    }
}

window.addEventListener("keydown", handleKeyDown);
window.addEventListener("keyup", handleKeyUp);

