let gameScreen = new GameScreen();
 
 
//  window.setInterval(()=>{
//     if(open)
//   //  loadJSON();
//   } ,1000);
window.onload = () => {

    SceneManager.setCurrentScene(gameScreen);
}

var array = [];
array[0] = [];
array[0][0] = { index:1}
// for(let i = 0; i<5; i++)
//  array[0][i] = i ;
var jsonData = JSON.stringify(array);
var parsed  = JSON.parse(jsonData);

