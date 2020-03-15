// Criar função que retorne as informações da var endereco


function enderecoUser(){
    const endereco = {
        rua: "Rua dos pinheiros",
        numero: 1293,
        bairro: "Centro",
        cidade: "São Paulo",
        uf: "SP"
    };

    return console.log(`Eu moro no ${endereco.rua} no bairro ${endereco.bairro}.`);
}

console.log(enderecoUser());