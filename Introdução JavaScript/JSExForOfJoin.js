/*Para percorrer um vetor você deve utilizar a sintaxe for...of 
e para unir valores de um array com um separador utilize o join.*/


function skEmpregado(usu){
    
    for(let value of usuarios){
        console.log('O '+value.nome+' possui as habilidades: '+value.habilidades);
    }
}

const usuarios = [
{
    nome: "Diego",
    habilidades: ['Javascript','ReactJs','Redux']
},
{
    nome: "Gabriel",
    habilidades: ['VueJS','Ruby on Rails','Elixir']
}
];

skEmpregado(usuarios);