class GameScreen extends Scene{
    constructor(){
        super();
        this.addNewLayers(4);
        this.gameWorld = new World();
        this.gameWorld.addGameObject( new Bird(this.getLayer(2), new Vector2d(50, 427), 30, 30));
        this.gameWorld.addGameObject(new GameObject(this.getLayer(1), new Vector2d(100, 50), 50, 400));

        let btnImageUp = new Image();
        let btnImageDown = new Image();
        btnImageUp.src = "assets/images/Glossy01.png";
        btnImageDown.src = "assets/images/Glossy02.png";

        let buttonWidth = GAME_WIDTH / 10;
        let uiLayer = this.getLayer(3);

        let upButton = new ImageButton(
                          uiLayer,
                          btnImageUp, btnImageDown,
                          new Vector2d(2 * buttonWidth, 3/4 * GAME_HEIGHT),
                          buttonWidth, buttonWidth);
        let leftButton = new ImageButton (
                          uiLayer,
                          btnImageUp, btnImageDown,
                          new Vector2d(1 * buttonWidth, (3/4 * GAME_HEIGHT) + buttonWidth),
                          buttonWidth, buttonWidth);
        let rightButton = new ImageButton(
                          uiLayer,
                          btnImageUp, btnImageDown,
                          new Vector2d(3 * buttonWidth, (3/4 * GAME_HEIGHT) + buttonWidth),
                          buttonWidth, buttonWidth);
        let downButton = new ImageButton (
                          uiLayer,
                          btnImageUp, btnImageDown,
                          new Vector2d(2 * buttonWidth, (3/4 * GAME_HEIGHT) + (2*buttonWidth)),
                          buttonWidth, buttonWidth);
        this.gameWorld.addGameObject(upButton);
        this.gameWorld.addGameObject(downButton);
        this.gameWorld.addGameObject(rightButton);
        this.gameWorld.addGameObject(leftButton);
        let bird = this.gameWorld.getGameObject(0);
        upButton.onClick = ()=>{
          bird.velocity = new Vector2d(0, -5);
        }
        leftButton.onClick= ()=>{
          bird.velocity = new Vector2d(-5, 0);
        }
        rightButton.onClick= ()=>{
          bird.velocity = new Vector2d(5, 0);
        }
        downButton.onClick = ()=>{
          bird.velocity = new Vector2d(0, 5);
        }

    }

    update(){
        let playerLayer = this.getLayer(2);
        this.gameWorld.update();
    }

    render(){
        let background = this.getLayer(0);
        let pipeLayer = this.getLayer(1);
        let playerLayer = this.getLayer(2);
        let uiLayer = this.getLayer(3);

        background.canvas.style.backgroundColor = "blue";
        playerLayer.context.clearRect(0, 0, playerLayer.canvas.width, playerLayer.canvas.height);
        this.gameWorld.render();
    }


}
