function randomPercentage(){
    var match= Math.floor((Math.random()*100)+1);
    if(match>70){
        return ( "Your Love Score is  : "+match+" , Very Good Match" )
    }else{
        return 'Your Love Score is  : ' + match;
    }
}

console.log( randomPercentage());