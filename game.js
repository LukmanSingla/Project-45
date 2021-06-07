class Game{
    constructor(){
    }
    getState(){
       database.ref('gamestate').on('value',(data)=>{
           gameState=data.val();
       });
    }
    updateState(){
        database.ref('/').update({
            gamestate:gameState
        });
    }
    start(){
        if(gameState==0 || gameState==null){
            form=new Form();
            form.display();
        }
    }
    wait(){
        if(gameState==1){
            if(playerCount==4){
                gameState=2;
            }
        }
    }
    play(){
        if(gameState==2){
            form.wait.hide();
            form.load.hide();
        }
    }
}