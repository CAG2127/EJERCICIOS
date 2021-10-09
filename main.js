//PRIMER EJERCICIO 

function parameter(){
    let parametro = prompt  ("escribe algo");
     console.log(parametro);
}

//SEGUNDO EJERCICIO 


let numero1=0;
let numero2=0;
let resultado = 0;
const pi = 3.141592;
let lista1 = [10,4,2,20,5]; 
let lista2 = [0,0,0,1,0];
let lista3 = [-13,10,9,8,0,2000,-1];



function add(numero1,numero2){
    if (typeof(numero1)!="number" && typeof(numero2)!="number"){
        console.log("ingresa solo numeros");
    }
    else{
        resultado = numero1 + numero2;
        console.log(resultado);
    }
   
}


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


// NOVENO EJERCICIO


function listas(lista){
    for(let i=0; i<lista.length; i++){
        console.log(lista[i])
     if () {
        
     }


   }
    
}
listas(lista1)









