class GameObject{
    constructor(layer, position = new Vector2d(), width, height, sprite = new Image()){
        this.world;

        this.layer = layer;
        this.position = position;
        this.sprite = sprite;
        this.velocity = new Vector2d();
        this.acceleration = new Vector2d(0, 0);
        this.width = width;
        this.height = height;
        this.angle = 0;
        this.anchorPoint = new Vector2d(this.position.x + this.width , this.position.y + this.height);
    }
    update(){
        this.velocity = this.velocity.scale(this.acceleration.x, this.acceleration.y);
        this.position = this.position.add(this.velocity.scale(1, 1));
        this.anchorPoint = new Vector2d(this.position.x + this.width , this.position.y + this.height);
    }
    render(){
        //this.fillStyle = "black";
        //this.layer.context.fillRect(this.position.x, this.position.y, this.width, this.height);
        // this.layer.context.save();
        // this.layer.context.translate(this.anchorPoint.x , this.anchorPoint.y);
        // this.layer.context.rotate(this.angle);
        // this.layer.context.translate(-this.anchorPoint.x , -this.anchorPoint.y);
        // this.layer.context.translate(this.position.x,this.position.y)
        this.layer.context.drawImage(this.sprite, this.position.x, this.position.y, this.width, this.height);
        //this.layer.context.restore();
    }
}
