function iniciarContagem(){
    var inpinicio = document.getElementById('_inicio')
    var inpfim = document.getElementById('_fim')
    var inppasso = document.getElementById('_passo')
    
    var inicio = Number(inpinicio.value)
    var fim = Number(inpfim.value)
    var passo = Number(inppasso.value)
    
    if(inpinicio.value =="" || inpfim.value =="" || inppasso.value == ""){
        window.alert("Preencha todos os campos")
    }else if(passo <= 0){
        window.alert("O passo não pode ser 0 ou menor")
    }else{ 
       var result = document.querySelector('div#_result') 
       result.innerHTML = `Inicio da contagem ${inicio} <br>
                           Fim da contagem ${fim} <br>
                           Conta de ${passo} em ${passo} <br>`
        if(inicio < fim){
            while(inicio <= fim){
                result.innerHTML+=`${inicio}`
                if( inicio < fim){
                    result.innerHTML +=` \u{27A1}`
                    }else{
                     result.innerHTML +=` \u{1F3C1}`
                    }
                     inicio += passo
            }  
        }else{
          for(let c = inicio; c >= fim; c-=passo){
                result.innerHTML+=`${c}`
                if( inicio < fim){
                   result.innerHTML +=` \u{27A1}`
                }else{
                   result.innerHTML +=` \u{1F3C1}`
                 }
           }
        }
        
    }
    
}