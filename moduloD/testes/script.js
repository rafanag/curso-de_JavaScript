//cores 
let corFundoBotoes = 'rgb(255, 255, 255)'
let corBotoesMarcados = 'rgb(0, 128, 0)'
let corBotoesHover = 'rgb(0, 0, 255)'

let numerosJogo = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
let res = document.getElementById('res')
let inf = document.getElementById('informacoes')

function inserirNum(valor){
    
    let num = Number(valor)
    bot = document.getElementById(`_n${num}`)
   if(numerosJogo[valor - 1] == 0){
     numerosJogo[num - 1] = num
     bot.style.background = 'green'
     bot.style.color =  'white'

   }else{
    numerosJogo[num - 1] = 0
    bot.style.background = 'white'
    bot.style.color =  'black'
   }
   
    //res.innerHTML = `O numero é ${num}`
    res.innerHTML = `Clicou no ${valor} <br>`
    res.innerHTML += numerosJogo
   
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

