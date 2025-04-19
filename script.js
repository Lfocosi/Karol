const pagina = document.getElementById("pagina");
const dica = document.createElement("p");
const palavra = document.createElement("p");
const mostarUsadas = document.createElement("p");
const input = document.createElement("input");
const proximo = document.createElement("input");

const texto = document.createElement("input");
texto.type = "number";
texto.addEventListener("change", (e) => {codigo = e.target.value; criarPagina()});

input.type = "Text";
input.maxLength = 1;
input.addEventListener("change", (e) => {testarletra(e.target)});

proximo.type = "Button";
proximo.innerText = 'Proximo'
proximo.addEventListener("click", (e) => {montarJogo()});


const palavras = {
    level1: [
        {dica: "Onde tudo começou entre nós.", palavra: "CEVISA"},
        {dica: "Onde o mundo todo para de existir.", palavra: "Abraço"},
        {dica: "É seu o lugar mais importante dentro do meu.", palavra: "Coração"},
    ],
    level2: [
        {dica: "A parte de mim que reconhece você como lar.", palavra: "Alma"},
        {dica: "O que eu mais amo ver no seu rosto.", palavra: "Sorriso"},
        {dica: "O que me trouxe até você.", palavra: "Destino"},
    ],
    level3: [
        {dica: "O que nunca falta quando estou com você.", palavra: "Carinho"},
        {dica: "Estamos juntos pra tudo, lembra?", palavra: "Parceria"},
        {dica: "O que eu sinto toda vez que você vai embora.", palavra: "Saudade"},
    ],
    level4: [
        {dica: "O que cresce todos os dias entre a gente.", palavra: "Amor"},
        {dica: "Cada momento com você vira uma dessa no meu coração.", palavra: "Lembrança"},
        {dica: "Quando nossos olhos se encontram, o tempo para.", palavra: "Olhar"},
    ],
    level5: [
        {dica: "Mesmo de longe, ouvir sua voz faz tudo melhorar.", palavra: "Chamada"},
        {dica: "Aquela conexão única que só a gente entende.", palavra: "Complicidade"},
        {dica: "Quando você menos espera… lá estou eu pensando em você.", palavra: "Surpresa"},
    ],
    level6:[
        {dica: "Aquilo que faço com o coração, pensando no 'pra sempre' com você.", palavra: "Promessa"},
        {dica: "Um jeitinho de dizer “estou com saudade” mesmo no meio do dia.", palavra: "Mensagem"},
        {dica: "Eu só quero viver o meu ao seu lado.", palavra: "Futuro"}
]};

let codigo = 0;
let level = 0;
let acertosIndex = [];
let letrasUsadas = [];
let secreto = "";
let palavraEscolida = "";
let index;

function criarPagina() {
    pagina.innerHTML = "";
    if (codigo == 0) {
        pagina.appendChild(texto);
    }
    else if (codigo == 178245) {
        level = 1;
        montarJogo();
    }
    else if (codigo == 40924) {
        level = 2;
        montarJogo();
    }
    else if (codigo == 170801) {
        level = 3;
        montarJogo();
    }
    else if (codigo == 240598) {
        level = 4;
        montarJogo();
    }
    else if (codigo == 220924) {
        level = 5;
        montarJogo();
    }
    else if (codigo == 130125) {
        level = 6;
        montarJogo();
    }
    else {
        codigo = 0;
        criarPagina();
    }
}

function montarJogo() {
    

    pagina.innerHTML = "";

    index = Math.floor(Math.random()*3);

    while (acertosIndex.find((element) => element == index) != undefined) {
        index = Math.floor(Math.random()*3);
        if (acertosIndex.length >= 3) {
            window.close();
            break;
        }
    }

    palavraEscolida = palavras[`level${level}`][index]['palavra'];
    secreto = "";
    letrasUsadas = [];

    for (let index = 0; index < palavraEscolida.length; index++) {
        secreto+='_';
    }

    dica.innerText = palavras[`level${level}`][index]['dica'];
    palavra.innerText = secreto;
    mostarUsadas.innerText = letrasUsadas;

    pagina.appendChild(dica);
    pagina.appendChild(palavra);
    pagina.appendChild(input);
    pagina.appendChild(mostarUsadas);
}

function testarletra(elemento) {
    const letra = elemento.value;
    let palavraDeChecagem = palavraEscolida.toLowerCase();
    palavraDeChecagem = palavraDeChecagem.replaceAll('ç', 'c');
    palavraDeChecagem = palavraDeChecagem.replaceAll('ã', 'a');

    elemento.value = "";

    if(letrasUsadas.find((element) => element == letra) == undefined) {
        letrasUsadas.push(letra);
        secreto = "";

        for (let index = 0; index < palavraEscolida.length; index++) {
            if (letrasUsadas.find((element) => element == palavraDeChecagem[index]) != undefined) {
                secreto += palavraEscolida[index]
            } else {
                secreto += '_';
            }
        }
        palavra.innerText = secreto;
        mostarUsadas.innerText = letrasUsadas;
    }

    if (secreto.replace('_', "").length == palavraDeChecagem.length) {
        acertosIndex.push(index);
        pagina.appendChild(proximo);
    }
}

criarPagina();
