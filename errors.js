//Throw,Try,Catch,Finally
let state = true;
const currentDate = new Date();
const portal= (opened) =>{
    console.log((opened = true) ? "The portal is opened" : "The portal is closed"); 
};

try{
    if (currentDate.getHours() <= 12){
        portal(state);
    }else if ((currentDate.getHours() >= 12) && (currentDate.getHours() < 22 )){
        portal(stete = false);
    }else{
        throw 'Portal is unstable';
    }

}catch(err){
    console.log(err);
}finally{
    console.log("Let's give up and drink some beer");
};
