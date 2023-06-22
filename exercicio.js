const listaDeDestinos = new Array(
    `São Paulo`,
    `Rio de Janeiro`,
    `Sorocaba`
)

const idadeComprador = 25;
const estaAcompanhado = false;
let  temPassagemComprada = false;
const destino = "São Luiz";

console.log("Destinos Possíveis:");
console.log(listaDeDestinos);

const podeComprar =  idadeComprador >= 18 || estaAcompanhado == true;

let contador = 0;
let destinoExiste = false
while (contador <3){
    if (listaDeDestinos[contador] == destino){
        destinoExiste = true;
        break;
    }
    contador += 1; 
}

console.log("Destino existente ", destinoExiste);

console.log("Embarque:");
if(podeComprar && destinoExiste ){
    console.log("Boa viagem!");
}  else {
    console.log("Você não pode embarcar.")
}

//Abaixo exemplo de laço "for"
//for(let i = 0; i <3; i++){
//    if (listaDeDestinos[I] == destino){
//       destinoExiste = true;
//    }
//}
