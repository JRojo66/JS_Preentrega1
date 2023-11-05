// Ingresa las horas
let horas = prompt("Ingrese las horas");

if(parseInt(horas)==horas){
    horas=parseInt(horas);
}
// valida que horas sea un numero
while(typeof(horas)!=="number"){
    alert("tipo de dato incorrecto. Ingrese un numero para las horas")
    horas = prompt("Ingrese las horas");
    if(parseInt(horas)==horas){
        horas=parseInt(horas);
    }
}
// valida que horas sea un numero entre 0 y 24
while(horas>24){
    alert("Numero incorrecto. Ingrese un numero entre 0 y 24")
    horas = prompt("Ingrese las horas");
}

// Ingresa los minutos
let minutos = prompt("Ingrese los minutos");

if(parseInt(minutos)==minutos){
    minutos=parseInt(minutos);
}
// valida que minutos sea un numero
while(typeof(minutos)!=="number"){
    alert("tipo de dato incorrecto. Ingrese un numero para los minutos")
    minutos = prompt("Ingrese los minutos");
    if(parseInt(minutos)==minutos){
        minutos=parseInt(minutos);
    }
}

// valida que minutos sea un numero entre 0 y 60
while(minutos>60){
    alert("Numero incorrecto. Ingrese un numero entre 0 y 60")
    minutos = prompt("Ingrese los minutos");
}

// Ingresa los segundos
let segundos = prompt("Ingrese los segundos");

if(parseInt(segundos)==segundos){
    segundos=parseInt(segundos);
}

// valida que segundos sea un numero
while(typeof(segundos)!=="number"){
    alert("tipo de dato incorrecto. Ingrese un numero para los segundos")
    segundos = prompt("Ingrese los segundos");
    if(parseInt(segundos)==segundos){
        segundos=parseInt(segundos);
    }
}

 // valida que segundos sea un numero entre 0 y 60
while(segundos>60){
    alert("Numero incorrecto. Ingrese un numero entre 0 y 60")
    segundos = prompt("Ingrese los segundos");
}

// funcion que convierte horas, minutos y segundos a segundos
function convierte(h,m,s) {
    return resultado = 3600 * h + 60 * m + s
}

// Calcula el resultado y lo guarda en la variable totalSegundos
let totalSegundos = convierte(horas, minutos, segundos);

// Muestra los datos ingresados y el resultado
alert ("horas :"+horas+"minutos :"+minutos+"segundos: "+segundos+" = "+totalSegundos+" segundos");

// Usuario ingresa si le gustó la aplicación y lo guarda en la variable encuesta
let encuesta = prompt("Le gustó la aplicación(S/N?");
while(encuesta!== 'S' && encuesta!=='N'){
    alert("Debe contestar S o N en mayúsculas")
    encuesta = prompt("Le gustó la aplicación(S/N?");
}
if(encuesta==='S'){
    alert("Que alegría");
} else if(encuesta==='N'){
    alert("Intentaremos mejorar para la próxima aplicación")
}
