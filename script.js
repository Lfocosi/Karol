const pagina = document.getElementById("pagina");

function mudarpagina(constutor)
{
    pagina.innerHTML = "";

    constutor(pagina);
}

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

function construirHome(pai)
{
    const quantidadeDeFotos = 20
    const maxFotos = 255

    const meuArray = Array.from({ length: maxFotos }, (_, i) => i + 1);


    function criarSlide()
    {
        shuffleArray(meuArray)
        var msg = ''
        const base = '<div class="slide"><img class="imgDespedida" src="img/carrosseu/--.jpeg" loading="lazy"></div>'
        for (let index = 1; index <= quantidadeDeFotos; index++) {
            const element = base.replace('--', meuArray[index]);
            msg += element
        }
        return msg
    }

    function mensagen()
    {
        var array = [];
        const data = new Date();

        const data2 = new Date("09/04/2024")
        const divisor = 1000*60*60*24
        const dias = Math.ceil(Math.abs(data-data2)/divisor)

        if (data.getDate() == 24 && data.getMonth() == 4)
        {
            array = ["Feliz aniversario Amor da minha vida", "Parabens para você", "Muitos anos de vida, para você e para mim", "Um pouco mais velha", "Completou mais uma volta no sol", "Amo minha velinha", "Mais perto da dentadura"];
        }
        else
        {
            array = ["Bom dia, Boa tarde e Boa noite amor", "Sim, eu te AMO", "Todo o dia oro por você", dias + " dias te amando", "Es mi amor", "I love you", "Esta me devendo um Beijo", "Ti amo"];
        }

        shuffleArray(array);

        return array[1];
    }

    const slides = criarSlide()

    pagina.innerHTML = '<div class="slider"><div class="slide-track">' + slides + slides + '</div></div>'
    pagina.innerHTML += '<div class="centro"><div class="texto">'+ mensagen()+'</div></div>'

}

function construirCarta(pai)
{
    pagina.innerHTML = '<div class="centro"><h1>Para Karol</h1><h4>Eu te devo desculpas, não da boca para fora, desculpas verdadeiras.</h4><h4>desculpas essas que não apagam meus erros, desculpas essas que não vão me livrar do sentimento que carrego, não sei quando você vera isso... ou se quer verá. Eu não fiz o que fiz querendo acertar, não acho que fiz para te proteger por mais que tenha sido essas palavras que usei para me convencer... é verdade eu sou um covarde, que não quer mudar, você me aceitou de todo coração e eu não soube retribuir.</h4><h4>Pode ter sido pela minha criação, pela minha maneira de ver o mundo. Mas não posso culpar os outros pelos meus erros... eu não quis mudar meus habitos, minhas maneiras, minhas convicções e eu fugi de você a unica que é capaz disso, eu me odeio por isso, eu quero mudar, verdadeiramente sinto sua falta de vc aqui, n estou falando de de te beijar... mas estar perto de você é a unica coisa que me dava esperança de mudar, e eu estraguei isso. Com minha arrogancia, meu ego.</h4><h4>Eu quero que você fale comigo, não me sinto direito de falar isso menos de 24h depois do que fiz, mas volta. Eu não vo pedir para que me ame... para que voltarmos a ser o eramos, porque eu não tenho o direito disso e estaria me aproveitando de sua fragilidade.</h4><h4>Peço que não acredite em minhas palavras, permitame provar o que estou falando. nem que tenha que passar minha vida te compensando por isso.</h4></div>';
}

function construirForca(pai)
{
    let chutes = [];
    var array = [
            {dica: "Onde tudo começou entre nós", palavra: "CEVISA"},
            {dica: "Onde o mundo todo para de existir", palavra: "Abraço"},
            {dica: "O que nunca falta quando estou com você", palavra: "Carinho"},
            {dica: "O que eu sinto toda vez que você vai embora", palavra: "Saudade"},
            {dica: "Quem nos juntou", palavra: "Deus"},
            {dica: "Nossa primeira viagem", palavra: "Holambra"},
    ];

    function constuir()
    {
        const inputPalavra = document.getElementById("text");
        const inputButton = document.getElementById("button");

        inputPalavra.addEventListener("keyup", (event) => {if (event.code == "Enter") enviarLetra()});
        inputButton.addEventListener("click", enviarLetra);

        montarPlavra();
    }

    function enviarLetra()
    {
        const input = document.getElementById("text");
        const texto = input.value.toUpperCase();
        const inputButton = document.getElementById("Chutes");

        if (chutes.find((chute) => chute == texto) == undefined && texto != "")
        {
            let palavra = array[0].palavra.toUpperCase();

            palavra = palavra.replaceAll('Ç', 'C');
            palavra = palavra.replaceAll('É', 'E');
            palavra = palavra.replaceAll('Õ', 'O');
            palavra = palavra.replaceAll('Ê', 'E');
            palavra = palavra.replaceAll('Ã', 'A');

            if (palavra.split('').find((letra) => letra == texto))
            {
                chutes.push(texto);
                inputButton.innerHTML += '<div class="chuteCorreto">' + texto + '</div>';
            } else
            {
                chutes.push(texto);
                inputButton.innerHTML += '<div class="chuteErrado">' + texto + '</div>';
            }
        }

        input.value = "";

        montarPlavra();
    }

    function montarPlavra()
    {
        const inputPalavra = document.getElementById("palavra");

        let secreto = "";
        let palavra = array[0].palavra.toUpperCase();
            
        palavra = palavra.replaceAll('Ç', 'C');
        palavra = palavra.replaceAll('É', 'E');
        palavra = palavra.replaceAll('Õ', 'O');
        palavra = palavra.replaceAll('Ê', 'E');
        palavra = palavra.replaceAll('Ã', 'A');

        for (let i = 0; i < palavra.length; i++)
        {
            const letra = palavra[i];
            if (chutes.find((chute) => chute == letra) != undefined)
            {
                secreto += array[0].palavra[i];
            } else
            {
               secreto += '-' ;
            }
        }

        inputPalavra.innerText = secreto;
    }

    shuffleArray(array);

    pagina.innerHTML = '<div class="centro"><div id="dica">' + array[0].dica + '</div><br><br><div id="palavra"></div><br><input id="text" type="text" maxlength="1"></input><input type="button" id="button" value="Enviar"></input><div id="Chutes"></div></div>';

    constuir();
}

function construirDespedida(pai)
{
    pagina.innerHTML= '<div id="pagina2"></div>';
    const pagina2 = document.getElementById("pagina2")

    const data = new Date();
    const data2 = new Date("09/04/2024")
    const divisor = 1000*60*60*24
    const dias = Math.ceil(Math.abs(data-data2)/divisor)

    const paginas = [
    '<h1>PARA MINHA ETERNA COMPANHEIRA<hr></h1><h2 id="inicio">MINHA FUTURA NAMORADA<br>MINHA FUTURA ESPOSA<br></h2><br><br> <h3>click para começar</h3>',
    '<h1>Eu cheguei meio tarde para ser o seu primeiro amor<br>     mas estou preparado para ser o seu ultimo.</h1>',
    '<h1>Você tem uma maneira unica de alegrar o meu corção</h1>',
    '<h1>Eu gostaria de poder te dar a possibilidade de ver a si mesma, através dos meus olhos</h1>',
    '<h1>Mas posso tentar atravez da camera.</h1>',
    '<h1>4 de Setembro de 2024<br>Esse foi o dia que conversei com você a primeira vez,<br>O dia em que tudo mudou."</h1>',
    '<img class="imgDespedida" src="img/1.jpg">',
    '<h1>"Holambra não é a cidade das flores sem você"</h1>',
    '<img class="imgDespedida" src="img/2.jpg">',
    '<h1>"Sou seu paparazzi"</h1>',
    '<img class="imgDespedida" src="img/3.jpg">',
    '<h1>"Seu adimirador"</h1>',
    '<img class="imgDespedida" src="img/4.jpg">',
    '<h1>"Sua simplicidade encanta discretamente"</h1>',
    '<img class="imgDespedida" src="img/5.jpg">',
    '<h1>"você torna o mundo mais colorido"</h1><br><br>',
    '<img class="imgDespedida" src="img/6.jpg">',
    '<h1>"Amar você é a melhor parte da minha vida"</h1>',
    '<img class="imgDespedida" src="img/7.jpg">',
    '<h1>"você é o presente que Deus me deu"</h1>',
    '<img class="imgDespedida" src="img/9.jpg">',
    '<h1>Obrigado por todos esses momentos, e que muitos mais venham você é incrivel, você e perfeita para mim, podemos estar separados fisicamente, mas é temporario</h1>',
    `<h1>${dias} dias te amando</h1> <div id="imagens"><img style="background-color:black;" class="imgDespedida" src="img/8.gif"></div>`
    ];
    let index = 0;

    function montarPaginaDespedida()
    {
        if(index >= paginas.length)
        {
            document.removeEventListener("click");
            
        }
        pagina2.innerHTML='<div class="centro">'+paginas[index]+'</div>';
        index++;
    }

    pagina2.addEventListener("click", montarPaginaDespedida);

    montarPaginaDespedida();
}

function montarHeader()
{
    const btnHome = document.getElementById("home");
    const btnCarta = document.getElementById("carta");
    const btnForca = document.getElementById("forca");
    const btnDespedida = document.getElementById("despedida");

    btnHome.addEventListener("click", () => mudarpagina(construirHome));
    btnCarta.addEventListener("click", () => mudarpagina(construirCarta));
    btnForca.addEventListener("click", () => mudarpagina(construirForca));
    btnDespedida.addEventListener("click", () => mudarpagina(construirDespedida));
    mudarpagina(construirHome);
}

montarHeader();