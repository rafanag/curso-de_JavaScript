function gerarTabuada(){
    let num = document.getElementById('_num')
    let res = document.getElementById('_result')

    if(num.value.length == 0){
        alert("Digite um numero")
    }else{
        let n = Number(num.value)
        res.innerHTML = ""
        for( let i = 1; i<=10; i++){
            let item = document.createElement('option')
            item.text = `${n} x ${i} = ${n*i}`
            res.appendChild(item) 
        }
    }
}