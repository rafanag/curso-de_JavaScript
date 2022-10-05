//cores 
let corFundoBotoes = 'rgb(255, 255, 255)'
let corBotoesMarcados = 'rgb(0, 128, 0)'
let corBotoesHover = 'rgb(0, 0, 255)'

let numerosJogo = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
let res = document.getElementById('res')
let inf = document.getElementById('informacoes')
let cont = 0;
//let maxNumeros = 18
let valorSelect = document.getElementById('_selN')


function inserirNum(valor){
    let qtdeNumeros = Number(valorSelect.options[valorSelect.selectedIndex].value)
    let num = Number(valor)
    bot = document.getElementById(`_n${num}`)
    
    if(numerosJogo[valor - 1] == 0){
    if(cont < qtdeNumeros) {
       numerosJogo[num - 1] = num
       bot.style.background = 'green'
       bot.style.color =  'white'
       cont++
     }else{
        alert(`Você não pode selecionar mais de ${qtdeNumeros} numeros`)
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
    inf.innerHTML = ''
   
    //if(cont < 15){
    //    alert('Você deve selecionar ao menos 15 dezenas')
    //}else{
       
        for(let i = 0; i < numerosJogo.length; i++){
            if(numerosJogo[i] < 10){
                inf.innerHTML += `| ${numerosJogo[i]} |`
            }else{
                inf.innerHTML += `|${numerosJogo[i]}|`
            }
           
            if((i+1)%5 == 0){
                inf.innerHTML += '<br>'
            }
            
        }
    //}
    
    
}

