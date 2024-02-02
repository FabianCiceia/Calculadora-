var display = document.getElementById("display");
var valor = "";
var numero = true; //evita que se pongan dos operadores al mismo tiempo ejemplo ++ -- // **
var cal = false;  //evita el escribir numeros al resultado de una operacion
var punto = true; //para evitar que se coloquen doble punto ejemplo: 5.2.8
var octal = false; //para evitar que se pueda escribir numeros en octal 022 = 18
function press(tecla){
    if(!cal){
        if(tecla == 0 && valor.length == 0 || octal && tecla == 0 ){
            return;
        }
        valor+=tecla;
        display.innerHTML = valor;
        numero = true;
        octal = false;
    }else{
        if(tecla != 0){
            valor= "";
            valor+=tecla;
            display.innerHTML = valor;
            numero = true;
            cal = false;
            octal = false;
        }
    }
    


}
function setOP(operador){
    if(numero){
        valor+=operador;
        display.innerHTML = valor;
        numero = false;
        cal = false;
        punto = true;
        octal = true;
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
            console.log(valor);
            valor = String(eval(valor));
            display.innerHTML = valor;
            punto = true;
        }
        cal = true;
    }
}
