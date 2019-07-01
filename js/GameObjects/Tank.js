class Tank extends GameObject{
  constructor(layer, position, width, height, sprite){
    super(layer, position, width, height, sprite);
    this.bullets = [];
  }

  update(){
    super.update();
    this.acceleration = new Vector2d(0.9,0.9);
  }
}
