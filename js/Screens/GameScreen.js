class GameScreen extends Scene{
    constructor(){
        super();
        this.addNewLayers(3);
        this.gameWorld = new World();
        this.player = new Player(this.getLayer(1), new Vector2d(50, 427), 30, 25);
        this.gameWorld.addGameObject( this.player);
        var  array = [];
        for(let i  = 0; i<2500; i++)
        array[i] = i;
        var mapdata = [
            2,
            50,
            50,
            50,
            array
        ];

        this.map = new Map(...mapdata);
        this.camera = new Camera(new Vector2d(0,0), GAME_WIDTH/2, GAME_HEIGHT/2, this.map);
        this.player.following = this.camera;

    }

    update(){
        this.gameWorld.update();
        this.camera.follow(this.player);
    }

    render(){
        let currentSprite = Sprites[1];

        for(let i = 0; i< this.map.layer; i++){
         let layer = this.getLayer(i*2);
        
         layer.context.clearRect(0, 0, GAME_WIDTH/2, GAME_HEIGHT/2);
        
    
        for(let j = 0; j<this.map.tiles.length; j++){
          let tile  = this.map.tiles[j];
          if(tile.position.x - this.camera.position.x <= this.camera.width)
           if(tile.position.y - this.camera.position.y <= this.camera.height){
            if(i == 1){
            if(this.map.tiles[j].index%6==0){
            currentSprite = Sprites[5];
            layer.context.drawImage(currentSprite, tile.position.x - this.camera.position.x,  tile.position.y-  this.camera.position.y, tile.width, tile.height);
            }
            }
            else {
            currentSprite  = Sprites[this.map.tiles[j].spriteValue];
            layer.context.drawImage(currentSprite, tile.position.x - this.camera.position.x,  tile.position.y-  this.camera.position.y, tile.width, tile.height);

            }


          }
        }
       }
        this.gameWorld.render();
    }


}
