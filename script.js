var display = document.getElementById("display");
var valor = "";
var numero = true; //evita que se pongan dos operadores al mismo tiempo ejemplo ++ -- // **
var cal = false;  //evita el escribir numeros al resultado de una operacion
var punto = true; //para evitar que se coloquen doble punto ejemplo: 5.2.8
function press(tecla){
    if(!cal){
        valor+=tecla;
        display.innerHTML = valor;
        numero = true;
    }else{
        valor= "";
        valor+=tecla;
        display.innerHTML = valor;
        numero = true;
        cal = false;
        punto = true;
    }
    


}
function setOP(operador){
    if(numero){
        valor+=operador;
        display.innerHTML = valor;
        numero = false;
        cal = false;
        punto = true;
    }
}
function Punt(PUN){
    if(punto){
        valor+=PUN;
        display.innerHTML = valor;
        numero = false;
        cal = false;
        punto = false;
    }
}

function clr(){
    valor = "";
    display.innerHTML = "0";
    numero = false;
    punto = true;
}


function calculate(){
    if(numero && !(valor == undefined) && !(valor == 0)){
        if(eval(valor) % 1){
            valor = String((eval(valor)).toFixed(2));
            display.innerHTML = valor;
            punto = false;
        }else{
            valor = String(eval(valor));
            display.innerHTML = valor;
            punto = true;
        }
        cal = true;
    }
}
