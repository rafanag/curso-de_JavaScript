function carregarImg(){
    var data = new Date()
    var ano =data.getFullYear()
    //pegar o elemento ano
    //pegar o elemento sexo pelo name
    //fazer os calculos e ifs


    var imgEx = document.querySelector('div#_img')//selecina a div
    var imagem = document.createElement('img') //criar elemento 
    imagem.setAttribute('id', 'foto')         //da uma id pra ela(opcional)
    imagem.setAttribute('src','adulta.jpg')   //carrega o conteudo
    imgEx.innerHTML = ''
    imgEx.appendChild(imagem)                 //mostra o conteudo
}