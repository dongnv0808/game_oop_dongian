    function Hero(image, top, left, size){
        this.image = image;
        this.top = top;
        this.left = left;
        this.size = size;
    
        this.getHeroElement = function(){
        return '<img width="'+ this.size + '"' +
            ' height="'+ this.size + '"' +
            ' src="' + this.image +'"' +
            ' style="top: '+this.top+'px; left:'+this.left+'px;position:absolute;"/>';
        }
    
        this.moveRight = function(){
            this.left += 50;
        }
        this.moveLeft = function(){
            this.left -= 50;
        }
        this.moveTop = function(){
            this.top -= 50;
        }
        this.moveBot = function(){
            this.top += 50;
        }
    }
    let hero = new Hero('imagen-rasengan-live-wallpaper-0thumb.png', 20, 30, 200);
    document.getElementById('game').innerHTML = hero.getHeroElement();
    function key(evt) {
        switch (evt.keyCode) {
             case 37:
                 hero.moveLeft();
                 break;
             case 38:
                 hero.moveTop();
                 break;
             case 39:
                 hero.moveRight();
                 break;
             case 40:
                 hero.moveBot();
                }
            document.getElementById('game').innerHTML = hero.getHeroElement();
    }
    function moveArrow() {
        window.addEventListener('keydown', key);
    }