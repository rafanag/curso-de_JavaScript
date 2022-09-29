function carregarImg(){
    var data = new Date()
    var ano =data.getFullYear()
    var exAno = document.getElementById('_ano')
    //pegar o elemento ano
    //pegar o elemento sexo pelo name
    //fazer os calculos e ifs
    var idade_max = 122
    var ano_minimo = ano - idade_max
    if((exAno.value < ano_minimo) || (exAno.value > ano)){
        window.alert (`Preencha valores acima de ${ano_minimo} e abaixo de ${ano}`)
    }else{
        var imgEx = document.querySelector('div#_img')//selecina a div
        var idade = Number(ano) - Number(exAno.value)
        var sexo = document.getElementsByName('sex') 
        var imagem = document.createElement('img')
        imagem.setAttribute('id', 'foto_pessoa')

        imgEx.innerHTML = `A idade é <strong>${idade}</strong> `
            if(sexo[0].checked){//fazer as idades para o sexo masculino
                imgEx.innerHTML += ` de sexo é <strong>masculino</strong>`
                if(idade < 13){
                    imagem.setAttribute('src', 'imagens/menino.jpg')
                }else if(idade >= 13 && idade < 18){
                    imagem.setAttribute('src', 'imagens/adole_m.jpg')
                }else if(idade >=18 && idade < 50){
                    imagem.setAttribute('src', 'imagens/adulto.jpg')
                }else{
                    imagem.setAttribute('src', 'imagens/velho.jpg')
                }
            }else{//fazer as idades para o sexo feminino
                imgEx.innerHTML += ` de sexo é <strong>Feminino</strong>`
                if(idade < 13){
                    imagem.setAttribute('src', 'imagens/menina.jpg')
                }else if(idade >= 13 && idade < 18){
                    imagem.setAttribute('src', 'imagens/adole_f.jpg')
                }else if(idade >=18 && idade < 50){
                    imagem.setAttribute('src', 'imagens/adulta.jpg')
                }else{
                    imagem.setAttribute('src', 'imagens/velha.jpg')
                }
            }
           
    }
    imgEx.appendChild(imagem)

    //imgEx.innerHTML =`Pessoa de ${idade} `
    /*
    var imagem = document.createElement('img') //criar elemento 
    imagem.setAttribute('id', 'foto')         //da uma id pra ela(opcional)
    imagem.setAttribute('src','imagens/adulta.jpg')   //carrega o conteudo
    imgEx.innerHTML = ''
    imgEx.appendChild(imagem)                 //mostra o conteudo
    */
}