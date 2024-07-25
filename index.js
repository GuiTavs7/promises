// 1) ESTADOS DAS PROMISES

/*
    Pendente
    Realizada Resolve
    Recusada Reject
    Estabelecida
*/

// 2) SINTAXE DAS PROMISES

// nem Promise((resolve, reject) => {
    
// })

// 3) EXEMPLO PRÁTICO

let ferverAgua = (chaleiraEstaNoFogao,fogoEstaLigado) => {

    return new Promise((resolve,reject) => {

        if(chaleiraEstaNoFogao && fogoEstaLigado){
            console.log("Começando o processo de ferver água!");
            resolve();
        }

        else{
            console.log("É necessário ligar o fogão e colocar a chaleira no fogo para ferver água!");
            reject();
        }

    })
}

// 3.1) TESTANDO COM AMBAS VARIÁVEIS TRUE

let chaleiraEstaNoFogao = true;

let fogoEstaLigado = true;

ferverAgua(chaleiraEstaNoFogao, fogoEstaLigado);

console.log("Fazendo café!");

// 3.2) ALTERANDO ESTADO DA VARIÁVEL PARA OBSERVAR reject() da Promise

fogoEstaLigado = false; 

ferverAgua(chaleiraEstaNoFogao,fogoEstaLigado);

// OBS: O erro de uncaught (in promise) deve ser tratado para que a aplicação não pare (será ensinado)