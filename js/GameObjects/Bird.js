class Bird extends GameObject{
    update(){
        super.update();
        if(this.position.y > GAME_HEIGHT) {
            this.position.y = GAME_HEIGHT;
            this.velocity = this.velocity.scale(1, -1);
        }
        if(this.position.y < 0) {
            this.position.y = 0;
            this.velocity = this.velocity.scale(1, -1);
        }
        if(this.position.x > GAME_WIDTH) {
            this.position.x = GAME_WIDTH;
            this.velocity = this.velocity.scale(-1, 1);
        }
        if(this.position.x < 0) {
            this.position.x = 0;
            this.velocity = this.velocity.scale(-1, 1);
        }
        this.acceleration = new Vector2d(0, GRAVITY);
    }
}
