class Bullet extends GameObject {
  constructor(layer, position, width, height, sprite){
    super(layer, position, width, height, sprite);
    this.isFired = false;
  }

  update(){
    if(this.isFired == true){
      this.position = this.position.add(this.velocity.scale(1, 1));
    }
  }

  render(){
    if (this.isFired) {
      this.layer.context.save();
      this.layer.context.translate(this.anchorPoint.x , this.anchorPoint.y);
      this.layer.context.rotate(this.angle);
      this.layer.context.translate(-this.anchorPoint.x , -this.anchorPoint.y);
      this.layer.context.translate(0,0);
      this.layer.context.drawImage(this.sprite, this.position.x, this.position.y, this.width, this.height);
      this.layer.context.restore();
    }
  }

}
