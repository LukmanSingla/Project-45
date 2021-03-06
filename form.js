class Form{
    constructor(){
        this.title=createElement('h1','Space Cruiser');
        this.label=createElement('h2','Enter your planet name : ');
        this.input=createInput().attribute('placeholder','Enter Here').attribute('maxlength','10');
        this.button=createButton('Enter the show');
        this.wait=createElement('h3','Please wait for other players.....');
        this.load=createElement('img').attribute('src','Images/giphy.gif');
        this.reset=createButton('reset');
    }
    display(){
        this.reset.position(20,20);
        this.reset.mousePressed(()=>{
            player.resetPlayer();
            gameState=0;
        })
        this.title.position(width/2-150,20);
        this.label.position(width/2-100,height/2-100);
        this.input.position(width/2-75,height/2-50);
        this.button.position(width/2-25,height/2+10);
        this.button.mousePressed(()=>{
            gameState=1;
            this.wait.position(width/2.7,height/2-100);
            this.label.hide();
            this.input.hide();
            this.button.hide();
            this.load.position(width/3+30,height/2+50);
            if(playerCount<=4){
            player.updateCount();
            }
        });
        if(gameState==2){
            this.wait.hide();
            this.load.hide();
        }
    }
}