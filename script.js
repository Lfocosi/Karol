const pagina = document.getElementById("pagina");
let index = 0;

const paginas = [
    '<h1>PARA MINHA ETERNA COMPANHEIRA<hr></h1><h2 id="inicio">MINHA FUTURA NAMORADA<br>MINHA FUTURA ESPOSA<br></h2><br><br> <h3>click para começar</h3>',
    '<h1>Eu cheguei meio tarde para ser o seu primeiro amor<br>     mas estou preparado para ser o seu ultimo.</h1>',
    '<h1>Você tem uma maneira unica de alegrar o meu corção</h1>',
    '<h1>Eu gostaria de poder te dar a possibilidade de ver a si mesma, através dos meus olhos</h1>',
    '<h1>Mas posso tentar atravez da camera.</h1>',
    '<h1>4 de Setembro de 2024<br>Esse foi o dia que conversei com você a primeira vez,<br>O dia em que tudo mudou."</h1>',
    '<img src="./img/20240904_183142.jpg">',
    '<h1>"Holambra não é a cidade das flores sem você"</h1>',
    '<img src="./img/20250113_151236.jpg">',
    '<h1>"Sou seu paparazzi"</h1>',
    '<img src="./img/20250113_151324.jpg">',
    '<h1>"Seu adimirador"</h1>',
    '<img src="./img/20250113_151523.jpg">',
    '<h1>"Sua simplicidade encanta discretamente"</h1>',
    '<img src="./img/20250113_151636.jpg">',
    '<h1>"você torna o mundo mais colorido"</h1><br><br>',
    '<img src="./img/20250113_151840.jpg">',
    '<h1>"Amar você é a melhor parte da minha vida"</h1>',
    '<img src="./img/20250113_152006.jpg">',
    '<h1>"você é o presente que Deus me deu"</h1>',
    '<img src="./img/IMG-20241209-WA0009.jpg">',
    '<h1>Obrigado por todos esses momentos, e que muitos mais venham você é incrivel, você e perfeita para mim, podemos estar separados fisicamente, mas é temporario</h1>',
    `<h1>${data()} dias te amando</h1> <div id="imagens"><img style="background-color:black;" src="./img/20250113_155739.gif"></div>`
];

function data()
{
    const data1 = new Date();
    const data2 = new Date("9/4/2024")
    const divisor = 1000*60*60*24
    return Math.ceil(Math.abs(data1-data2)/divisor)
}

function montarPagina()
{
    if(index >= paginas.length)
    {
        index = 0;
        
    }
    pagina.innerHTML=paginas[index];
    index++;
}

document.addEventListener("click", () => {
    inicio=false
    ;montarPagina()
});
montarPagina();
