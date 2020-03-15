//Escreva uma função que verifique se o vetor de habilidades passado possui a habilidade "Javascript" e retorna um booleano true/false caso exista ou não.


function temhabilidade(find){
    
    /*se indexOf for maior ou igual a 0,
    então existe no array o valor procurado*/
    
    return(skills.indexOf(find)>=0);

}

const skills = ['Javascript','ReactJS','React Native'];
console.log(temhabilidade('Javascript'));