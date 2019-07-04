class Tank extends GameObject{
  constructor(layer, position, width, height, sprite){
    super(layer, position, width, height, sprite);
    this.bullets = [];
  }

  update(){
    super.update();
    this.acceleration = new Vector2d(0.9,0.9);
  }

  addBullet(){
    let bulletSprite = new Image();
    bulletSprite.src = "assets/images/bulletBlueSilver_outline.png"
    let bullet = new Bullet(this.layer, this.position, 10, 20, bulletSprite);
    this.bullets.push(bullet);
  }

  fire(){
    let tankVelocity = new Vector2d(0,-1);
    let angle = this.angle;
    let position = new Vector2d(this.position.x + this.width/2 -this.bullets[0].width/2, this.position.y + this.height/2-this.bullets[0].height/2);


    this.bullets[0].position = position;
    this.bullets[0].anchorPoint = new Vector2d(this.bullets[0].position.x + this.bullets[0].width /2, this.bullets[0].position.y + this.bullets[0].height/2);
    this.bullets[0].velocity = tankVelocity.scale(5,5);
    this.bullets[0].angle = angle;
    this.bullets[0].isFired = true;
  }
}
