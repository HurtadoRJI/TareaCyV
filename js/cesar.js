const desplazamiento = document.getElementById("desplazamiento");
const texto = document.getElementById("texto");
const textoCifrado = document.getElementById("cifrado");
const desdesplazamiento = document.getElementById("desdesplazamiento");
const destexto = document.getElementById("destexto");
const destextoCifrado = document.getElementById("descifrado");


//vamos a crear uina funcion para cifrar
function cifrado(){
    //obtener el texto que se ingresa
    const textoIngresado = texto.value;
    //obtener caracter por caracter y validar la entrada del texto
    textoCifrado.value = textoIngresado.split('').map(c => { 
        let mayus = (c === c.toUpperCase()) ? true : false;
        let valorEntero = c.toLowerCase().charCodeAt(0);
        if(valorEntero >= 97 && valorEntero <= 122){
            const valorDesplazamiento = parseInt(desplazamiento.value);
            if(valorEntero + valorDesplazamiento > 122){
                valorEntero = 97 + (valorEntero - 122) + valorDesplazamiento - 1;
            }else{
                valorEntero = valorEntero + valorDesplazamiento;
            }

        }
        let cifrado = String.fromCharCode(valorEntero);
        return mayus ? cifrado.toUpperCase() : cifrado;
    }).join('');
}

texto.addEventListener("keyup", cifrado);
desplazamiento.addEventListener("change", cifrado);

function descifrado(){
    //obtener el texto que se ingresa
    const destextoIngresado = destexto.value;
    //obtener caracter por caracter y validar la entrada del texto
    destextoCifrado.value = destextoIngresado.split('').map(c => { 
        let desmayus = (c === c.toUpperCase()) ? true : false;
        let desvalorEntero = c.toLowerCase().charCodeAt(0);
        if(desvalorEntero >= 97 && desvalorEntero <= 122){
            const desvalorDesplazamiento = parseInt(desdesplazamiento.value);
            if(desvalorEntero + desvalorDesplazamiento > 122){
                desvalorEntero = 97 + (desvalorEntero - 122) + desvalorDesplazamiento - 1;
            }else{
                desvalorEntero = desvalorEntero - desvalorDesplazamiento;
            }

        }
        let descifrado = String.fromCharCode(desvalorEntero);
        return desmayus ? descifrado.toUpperCase() : descifrado;
    }).join('');
}
destexto.addEventListener("keyup", descifrado);
desdesplazamiento.addEventListener("change", descifrado);