let gameScreen = new GameScreen();

// window.onload = () => {
//     SceneManager.setCurrentScene(logoScreen);
//     console.log(SceneManager.getCurrentScene());
//
//     //sets active scene to loading Screen after 3 seconds
//     setTimeout(function(){
//         SceneManager.setCurrentScene(loadingSceeen);
//         console.log(SceneManager.getCurrentScene());
//     }, 2000);
//
//     //sets active scene to loading Screen after 4 seconds
//     setTimeout(function(){
//         SceneManager.setCurrentScene(homeScreen);
//         console.log(SceneManager.getCurrentScene());
//     }, 5000);
//
// }

SceneManager.setCurrentScene(gameScreen);
 
 
//  window.setInterval(()=>{
//     if(open)
//   //  loadJSON();
//   } ,1000);
window.onload = () => {

    SceneManager.setCurrentScene(gameScreen);
}

