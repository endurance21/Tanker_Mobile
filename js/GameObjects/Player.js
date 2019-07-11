class Player extends GameObject{
    constructor(layer, position , width, height){
        super(layer, position , width, height);
        this.friction = 0.9;
        this.following = { position:{x:20,y:20}};

    }
    update(){

        if(keyPressed.RIGHT)
        this.position.x +=5;
        if(keyPressed.LEFT)
        this.position.x+=-5; 
        if(keyPressed.UP)
        this.position.y+=-5; 
        if(keyPressed.DOWN)
        this.position.y+=5; 

        // window.addEventListener('keypress',(e)=>{
        //     switch(e.key){
        //     case 'w':this.velocity = new Vector2d(0,-5) ;
        //     break;
        //     case 'd':this.velocity = new Vector2d(5,0) ;  
        //     break;
        //     case 'a':this.velocity = new Vector2d(-5,0);
        //     break;
        //     case 's':this.velocity = new Vector2d(0,5);
        //     break;
        //     default:console.log("hello");
    
        //     }
    
        // });
        // this.position = this.position.add(this.velocity.scale(1, 1));
        // this.velocity = this.velocity.scale(this.friction);

    }
    render(){
        this.layer.context.clearRect(0, 0,GAME_WIDTH,GAME_HEIGHT);
      this.layer.context.fillRect(this.position.x - this.following.position.x, this.position.y- this.following.position.y, this.width, this.height);

    }
}
