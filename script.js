var display = document.getElementById("display");
var valor = "";
var numero = true; //evita que se pongan dos operadores al mismo tiempo ejemplo ++ -- // **
var cal = false;  //evita el escribir numeros al resultado de una operacion
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
    }
    


}
function setOP(operador){
    if(numero){
        valor+=operador;
        display.innerHTML = valor;
        numero = false;
        cal = false;
    }
}
function clr(){
    valor = "";
    display.innerHTML = "0";
}
function calculate(){
    if(numero && !(valor == undefined) && !(valor == 0)){
        if(eval(valor) % 1){
            valor = String((eval(valor)).toFixed(2));
            display.innerHTML = valor;
        }else{
            valor = String(eval(valor));
            display.innerHTML = valor;
        }
        cal = true;
    }
}
