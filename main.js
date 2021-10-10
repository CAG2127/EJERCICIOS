//PRIMER EJERCICIO 

function parameter(){
    let parametro = prompt  ("escribe algo");
     console.log(parametro);
}

//parameter()

//SEGUNDO EJERCICIO 


let numero1=0;
let numero2=0;
let resultado = 0;
const pi = 3.141592;

function add(numero1,numero2){
    if (typeof(numero1)!="number" && typeof(numero2)!="number"){
        console.log("ingresa solo numeros");
    }
    else{
        resultado = numero1 + numero2;
        console.log(resultado);
    }
   
}
//add()

//TERCER EJERCICIO


function subtract(numero1,numero2){
    if (typeof(numero1)!="number" && typeof(numero2)!="number"){
        console.log("ingresa solo numeros");
    }
    else{
        resultado = numero1 - numero2;
        console.log(resultado);
    }
   
}
//subtract()

//CUARTO EJERCICIO

function equal(numero1,numero2){
    if (typeof(numero1)!="number" && typeof(numero2)!="number"){
        console.log("ingresa solo numeros");
    }
    else{
        resultado = numero1 * numero2;
        console.log(resultado);
    }
   
}
//equal()


//QUINTO EJERCICIO


function division(numero1,numero2){
    if (typeof(numero1)!="number" && typeof(numero2)!="number"){
        console.log("ingresa solo numeros");
    }
    else{
        resultado = numero1 / numero2;
        console.log(resultado);
    }
   
}
//division()

//SEXTO EJERCICIO

function area(numero1){
    if (typeof(numero1)!="number"){
        console.log("ingresa solo numeros");
}
else{
    numero1  **= 2;
    resultado = Number (numero1) * Number (pi);
    console.log(resultado);  
}
      
}
//area()


//SEPTIMO EJERCICIO

function metrosAKilometros(numero1){
    if (typeof(numero1)!="number"){
        console.log("ingresa solo numeros");
    }
    else{
    resultado = Number (numero1) / 1000;
    console.log(resultado.toFixed(2));
    }
        
}
//metrosAKilometros()

// OCTAVO EJERCICIO


function celsiusAFahrenheit(numero1){
    if (typeof(numero1)!="number"){
        console.log("ingresa solo numeros");
    }
    else{
        numero2 = Number (numero1) * 9/5;
    resultado = Number (numero2) + 32;
    console.log(resultado.toFixed(2));
    }
   
}

//celsiusAFahrenheit()

// NOVENO EJERCICIO


function listas(lista){
    var nuneroMayor = lista[0];
    var numeroMenor = lista[0];
    for(let i=0; i<lista.length; i++){
        
     if (lista[i]>nuneroMayor) {
         nuneroMayor=lista[i]
        
     }
     else if(lista[i]<numeroMenor){
         numeroMenor=lista[i]

     }
     
}
console.log("EL NUMERO MAYOR ES: " + nuneroMayor);
console.log("EL NUMERO MENOR ES: " + numeroMenor);

    
}
// listas([])


//EJERCICIO DECIMO

function exponencial(base,exponente){
    resultado=0;
    if (typeof (base) != "number" && typeof (exponente) != "number"){
        console.log("solo recibo numeros")
    }
    else{
        resultado=base**exponente;
        console.log("base: "+base)
        console.log("exponente: "+exponente)
        console.log("resultado: "+resultado)
    }

   

}

//exponencial("")

//EJERCICIO UNDECIMO

function contry(cantidad){
    if (typeof (cantidad) != "number" && cantidad != null){
        console.log("solo recibo numeros")
    }
    else{
        for(let i=0; i<cantidad ;i++ ){
            var name= prompt ("ingrese nombre del pais");
            var lengthcharacteres = name.length;
            alert("EL PAIS TIENE " + lengthcharacteres + " letras");
        }
        
    }
}

//contry(2)







