class Player{
    constructor(){}
    getCount(){
        database.ref('playercount').on('value',(data)=>{
            playerCount=data.val();
        })
    }
    updateCount(){
        database.ref('/').update({
            playercount:playerCount+1
        });
    }
    resetPlayer(){
        database.ref('/').update({
            playercount:0
        });
    }
}