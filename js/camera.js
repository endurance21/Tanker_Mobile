class Camera{
    constructor(position, width, height, map){
        this.position = position;
        this.width = width;
        this.height = height;
        this.maxX = map.cols * map.tileWidth - this.width;
        this.maxY = map.rows * map.tileWidth - this.height;

    }
    // move(velocity = new Vector2d(0,0)){
    //     //update the position
    //     this.position.x+=velocity.x;      
    //     this.position.y+=velocity.y;   
    //     // block restricted area
    //     this.position.x = Math.max(0,Math.min(this.position.x,this.maxX));
    //     this.position.y = Math.max(0,Math.min(this.position.y,this.maxY));

    // }
    update(){
        
        if(keyPressed.RIGHT){
        this.position.x +=2;
        }
        if(keyPressed.LEFT){
        this.position.x+=-2;
        } 
        if(keyPressed.UP){
        this.position.y+=-2; 
        }
        if(keyPressed.DOWN){
        this.position.y+=2;
        } 

        this.position.x = Math.max(0,Math.min(this.position.x,this.maxX));
        this.position.y = Math.max(0,Math.min(this.position.y,this.maxY));
    }

    follow(player){
        this.position.x = player.position.x  - this.width/2;
        this.position.y = player.position.y - this.height/2;

        this.position.x = Math.max(0,Math.min(this.position.x,this.maxX));
        this.position.y = Math.max(0,Math.min(this.position.y,this.maxY));

    }
}