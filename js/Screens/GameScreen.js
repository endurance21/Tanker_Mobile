class GameScreen extends Scene{
    constructor(){
        super();
        this.addNewLayers(4);
        this.gameWorld = new World();
        this.gameWorld.addGameObject( new Bird(this.getLayer(2), new Vector2d(50, 427), 30, 30));
        this.gameWorld.addGameObject(new GameObject(this.getLayer(1), new Vector2d(100, 50), 50, 400));

        let leftButtonImage = new Image();
        let rightButtonImage = new Image();
        let upButtonImage = new Image();
        let downButtonImage = new Image();
        let leftButtonPressedImage = new Image();
        let rightButtonPressedImage = new Image();
        let upButtonPressedImage = new Image();
        let downButtonPressedImage = new Image();
        let fireButtonImage = new Image();
        let fireButtonPressedImage = new Image();

        leftButtonImage.src   = "assets/images/tanker_control_buttons_left.png";
        rightButtonImage.src  = "assets/images/tanker_control_buttons_right.png";
        upButtonImage.src     = "assets/images/tanker_control_buttons_up.png";
        downButtonImage.src   = "assets/images/tanker_control_buttons_down.png";
        fireButtonImage.src   = "assets/images/tanker_control_buttons_fire.png";

        leftButtonPressedImage.src   = "assets/images/tanker_control_buttons_left_pressed.png";
        rightButtonPressedImage.src  = "assets/images/tanker_control_buttons_right_pressed.png";
        upButtonPressedImage.src     = "assets/images/tanker_control_buttons_up_pressed.png";
        downButtonPressedImage.src   = "assets/images/tanker_control_buttons_down_pressed.png";
        fireButtonPressedImage.src   = "assets/images/tanker_control_buttons_fire_pressed.png";

        let buttonWidth = GAME_WIDTH / 10;
        let uiLayer = this.getLayer(3);

        let upButton = new ImageButton(
                          uiLayer,
                          upButtonImage, upButtonPressedImage,
                          new Vector2d(2 * buttonWidth, 3/4 * GAME_HEIGHT),
                          buttonWidth, buttonWidth);
        let leftButton = new ImageButton (
                          uiLayer,
                          leftButtonImage, leftButtonPressedImage,
                          new Vector2d(1 * buttonWidth, (3/4 * GAME_HEIGHT) + buttonWidth),
                          buttonWidth, buttonWidth);
        let rightButton = new ImageButton(
                          uiLayer,
                          rightButtonImage, rightButtonPressedImage,
                          new Vector2d(3 * buttonWidth, (3/4 * GAME_HEIGHT) + buttonWidth),
                          buttonWidth, buttonWidth);
        let downButton = new ImageButton (
                          uiLayer,
                          downButtonImage, downButtonPressedImage,
                          new Vector2d(2 * buttonWidth, (3/4 * GAME_HEIGHT) + (2*buttonWidth)),
                          buttonWidth, buttonWidth);
        let fireButton = new ImageButton (
                          uiLayer,
                          fireButtonImage, fireButtonPressedImage,
                          new Vector2d(GAME_WIDTH - 2 * buttonWidth, (3/4 * GAME_HEIGHT) + (buttonWidth)),
                          buttonWidth, buttonWidth);
        this.gameWorld.addGameObject(upButton);
        this.gameWorld.addGameObject(downButton);
        this.gameWorld.addGameObject(rightButton);
        this.gameWorld.addGameObject(leftButton);
        this.gameWorld.addGameObject(fireButton);
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
