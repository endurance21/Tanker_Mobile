class Tile {
    constructor(position, width, index){
        this.position = position;
        this.height = width;
        this.width = width;
        this.index = index;
        this.spriteValue = (this.index%2==0)?2:3;
    }
    
}