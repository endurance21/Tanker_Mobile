class UIManager{
    constructor(){
        this.buttons = [];
        this.buttonCount;
        this.isPressed = false;
        this.clickX = 0;
        this.clickY = 0;
    }
    addButton(button){
        this.buttons.push(button);
        button.index = this.buttonCount;
        this.buttonCount++;
    }
    getButton(index){
        return this.buttons[index];
    }
    handleClick(e){
        let scaleY = window.innerHeight / GAME_HEIGHT;
        let scaleX = (aspectRatio * window.innerHeight) / GAME_WIDTH;
        let clickX = e.pageX / scaleX;
        let clickY = e.pageY / scaleY;

        for(let index in this.buttons){
            let button = this.getButton(index);
            if(clickX > button.position.x && clickX < button.position.x + button.width){
                if(clickY > button.position.y && clickY < button.position.y + button.height){
                    button.isPressed = true;
                    setTimeout(()=>{
                        button.isPressed = false;
                    }, 500);
                    button.onClick();
                    break;
                }
            }
        }
    }

    handleMouseDown(e){
      this.isPressed = true;
    }

    handleMouseMove(e){
        let scaleY = window.innerHeight / GAME_HEIGHT;
        let scaleX = (aspectRatio * window.innerHeight) / GAME_WIDTH;
        this.clickX = e.clientX / scaleX;
        this.clickY = e.clientY / scaleY;

        for(let index in this.buttons){
            let button = this.getButton(index);
            if(this.clickX > button.position.x && this.clickX < button.position.x + button.width && this.isPressed == true){
                if(this.clickY > button.position.y && this.clickY < button.position.y + button.height && this.isPressed == true){
                    button.isPressed = true;
                    // setTimeout(()=>{
                    //     button.isPressed = false;
                    // }, 500);
                    //button.onClick();
                    break;
                }
                else {
                  button.isPressed = false;
                }
            }
            else {
              button.isPressed = false;
            }
        }
    }

    handleMouseUp(e){
      if (this.isPressed) {
        for(let index in this.buttons){
            let button = this.getButton(index);
            if(this.clickX > button.position.x && this.clickX < button.position.x + button.width && this.isPressed == true){
                if(this.clickY > button.position.y && this.clickY < button.position.y + button.height && this.isPressed == true){
                    button.isPressed = false;
                    // setTimeout(()=>{
                    //     button.isPressed = false;
                    // }, 500);
                    //button.onClick();
                    break;
                }
            }
        }
        this.isPressed = false;
      }
    }
}
