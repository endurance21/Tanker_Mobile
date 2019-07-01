class GameScreen extends Scene{
    constructor(){
        super();

        let playerTank = new Image();
        let button1u = new Image();
        let button1d = new Image();

        playerTank.src = "assets/images/tankBlue_outline.png";
        button1u.src = "assets/images/Glossy01.png";
        button1d.src = "assets/images/Glossy02.png";

        this.addNewLayers(4);
        this.gameWorld = new World();
        this.gameWorld.addGameObject( new Tank(this.getLayer(2), new Vector2d(50, 427), 60, 60, playerTank));
      //  this.gameWorld.addGameObject(new GameObject(this.getLayer(1), new Vector2d(100, 50), 50, 400));

        let uiLayer = this.getLayer(3);

        let upButton = new ImageButton(uiLayer, button1u, button1d, new Vector2d(80, 3/4 * GAME_HEIGHT),  40, 40);
        let downButton = new ImageButton(uiLayer, button1u, button1d, new Vector2d(80, 3/4 * GAME_HEIGHT + 80),  40, 40);
        let leftButton = new ImageButton(uiLayer, button1u, button1d, new Vector2d(40, 3/4 * GAME_HEIGHT + 40),  40, 40);
        let rightButton = new ImageButton(uiLayer, button1u, button1d, new Vector2d(120, 3/4 * GAME_HEIGHT + 40),  40, 40);

        this.gameWorld.addGameObject(upButton);
        this.gameWorld.addGameObject(downButton);
        this.gameWorld.addGameObject(leftButton);
        this.gameWorld.addGameObject(rightButton);

        let player = this.gameWorld.gameObjects[0];

        upButton.onClick = ()=>{
         player.velocity = new Vector2d(0, -5);
        }
        leftButton.onClick= ()=>{
         player.velocity = new Vector2d(-5, 0);
        }
        rightButton.onClick= ()=>{
         player.velocity = new Vector2d(5, 0);
        }
        downButton.onClick = ()=>{
         player.velocity = new Vector2d(0, 5);
        }
    }

    update(){
        let playerLayer = this.getLayer(2);
        this.gameWorld.update();

        let player = this.gameWorld.gameObjects[0];

        if(this.gameWorld.gameObjects[1].isPressed == true){
          player.velocity = new Vector2d(0, -5);   //for up button
          playerLayer.angle = 0;
        }
        if(this.gameWorld.gameObjects[2].isPressed == true){
          player.velocity = new Vector2d(0, 5);      //for down button
          player.angle = 2 * PI/2;
        }
        if(this.gameWorld.gameObjects[3].isPressed == true){
          player.velocity = new Vector2d(-5, 0);      //for left button
          player.angle = 3 * PI/2;
        }
        if(this.gameWorld.gameObjects[4].isPressed == true){
          player.velocity = new Vector2d(5, 0);       //for right button
          player.angle = 1 * PI/2;
        }

    }

    render(){
        let background = this.getLayer(0);
        let pipeLayer = this.getLayer(1);
        let playerLayer = this.getLayer(2);
        let uiLayer = this.getLayer(3);

        background.canvas.style.backgroundColor = "white";
        playerLayer.context.clearRect(0, 0, playerLayer.canvas.width, playerLayer.canvas.height);
        this.gameWorld.render();
    }


}
