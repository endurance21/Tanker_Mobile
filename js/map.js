class Map {
    constructor(layer, rows, cols, tileWidth, spriteValue = []){
        this.layer = layer;
        this.rows = rows;
        this.cols = cols;
        this.tileWidth = tileWidth;
        this.spriteValue = spriteValue;


        this.tiles  = [this.rows*this.cols];    ///every layer have m*n tiles 
        this.createTiles();
    }
   
   
   getTile(index){
       return this.tiles[index];

   }
   createTiles(){
      for(let i = 0; i < this.cols*this.rows; i++){
       let row = Math.floor(i/(this.cols)) + 1 ;
       let x = i*this.tileWidth - (row-1)*this.cols*this.tileWidth;
       let y =  (row-1)*this.tileWidth;
    
       this.tiles[i] = new Tile( new Vector2d(x, y),this.tileWidth, this.spriteValue[i]);
      }
    }

    
}

