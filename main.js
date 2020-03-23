function tabuada(){
    var numero = document.getElementById("number")
    var tabuada = document.getElementById("seltab")
    
    if(numero.value.length == 0){
        alert("Digite um número para começar")
        
    }
    else{
        var num = parseInt(numero.value)
        var c = 1
        tabuada.innerHTML=``
        
        while (c <= 10){
            var item = document.createElement("option")
            item.innerHTML = `${num} x ${c} = ${num*c}`
            tabuada.appendChild(item)
            c++
        }
        
        
    } 
}