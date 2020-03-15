//encontre o número par usando a function pares(x,y)

function pares(x,y){
    
    for (x; x <= y; x++){
        if(x % 2 == 0){
            console.log(`${x} é um número par`);
        }
    }
}

console.log(pares(32,321));