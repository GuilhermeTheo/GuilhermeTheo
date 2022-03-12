let texto = document.getElementById('tela')
let operator; 
let value = 0;
let value2 = 0;
let result;

function apagar(valor) {
 if (valor == 'c'){
 return texto.value = texto.value.slice(0,-1)
} else if (valor == 'C'){
 return texto.value = "";
operator =""
    }
}
function operador(valor){
   texto.value += valor
  
}

function number(valor){
    texto.value += valor;
    
}


 function resultado() {
     result = texto.value
     window.alert(result)
     if (texto.value == ""){
         window.alert("Error nenhum algaritmo foi colocado")
         return texto.value ="";
     }
    texto.value = eval(result);
 }