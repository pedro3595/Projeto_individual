let contador = 1;
document.getElementById("radio1").checked = true

setInterval (function(){
    proximaimg()
},5000)

function proximaimg(){
    contador++
    if (contador>4) {
        contador = 1
    }

    document.getElementById("radio"+contador).checked = true
}