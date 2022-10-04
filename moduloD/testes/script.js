//cores 
let corFundoBotoes = 'rgb(255, 255, 255)'
let corBotoesMarcados = 'rgb(0, 128, 0)'
let corBotoesHover = 'rgb(0, 0, 255)'

let numerosJogo = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
let res = document.getElementById('res')
let inf = document.getElementById('informacoes')
let cont = 0;
let maxNumeros = 18
let qtdeNumeros = document.getElementById('_selN')
function inserirNum(valor){
   
    let num = Number(valor)
    bot = document.getElementById(`_n${num}`)
    
    if(numerosJogo[valor - 1] == 0){
    if(cont < 15) {
       numerosJogo[num - 1] = num
       bot.style.background = 'green'
       bot.style.color =  'white'
       cont++
     }
   }else{
    numerosJogo[num - 1] = 0
    bot.style.background = 'white'
    bot.style.color =  'black'
    cont--
   
}
    //res.innerHTML = `O numero é ${num}`
    res.innerHTML = `Clicou no ${valor} <br>`
    res.innerHTML += numerosJogo
    inf.innerHTML = `A contagem esta em ${cont}`
   
}


function entrou(valor){
    let num = Number(valor)
    let botao = document.getElementById(`_n${num}`)
    let corFundoBot = getComputedStyle(botao).getPropertyValue('background-color')
     //inf.innerHTML = `A cor do botao é ${(corFundoBot)}`   
     if(corFundoBot == corFundoBotoes){
        botao.style.backgroundColor = corBotoesHover
     }
}

function saiu(valor){
    let num = Number(valor)
    let botao = document.getElementById(`_n${num}`)
    let corFundoBot = getComputedStyle(botao).getPropertyValue('background-color')
    //inf.innerHTML = `A cor do botao é ${(corFundoBot)}` 
     if(corFundoBot == corBotoesHover){
        //inf.innerHTML = `A cor do botao agora é ${(corFundoBot)}`
        botao.style.backgroundColor = corFundoBotoes
     }
}

function gerarResultados(){
    inf.innerHTML = `A quantidade de numeros a ser jogada é ${qtdeNumeros.value}`
}

