function iniciarContagem(){
    var inpinicio = document.getElementById('_inicio')
    var inpfim = document.getElementById('_fim')
    var inppasso = document.getElementById('_passo')
    
    var inicio = Number(inpinicio.value)
    var fim = Number(inpfim.value)
    var passo = Number(inppasso.value)
    
    if(inpinicio.value =="" || inpfim.value =="" || inppasso.value == ""){
        window.alert("Preencha todos os campos")
    }else if(inicio >= fim ){
        window.alert("O inicio precisa ser menor que o fim ")
    }else if(passo == 0){
        window.alert("O passo não pode ser 0")
    }else if(passo == 0 || passo > (fim/2) ){
        alert("Passo maior que a perna")
    }else{ 
       var result = document.querySelector('div#_result') 
       result.innerHTML = `Inicio da contagem ${inicio} <br>
                           Fim da contagem ${fim} <br>
                           Conta de ${passo} em ${passo} <br>`
       var cont = 0;
        while(inicio != fim){
           result.innerHTML+=`-${inicio}-`
           inicio += passo
        }
    }
}