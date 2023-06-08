var list=["saman","jayapala","maduka","nethu"];

function chekcMember(name){
    if(list.includes(name)){
        console.log("Hello! "+name+", Welcome!");
    }else{
        console.log("Hi! "+name+", Sorry may be Next Time");
    }
}

chekcMember("nethu");