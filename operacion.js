

const boton = document.getElementById("resumen");
boton.addEventListener("click", calcular);

function calcular() {
  let ticket = cantidad.value;
    let descuento = categoria.value;
    let descuentoValor = 0;

    if(descuento == "estudiante"){
        descuentoValor = 0.8;
    } 
    else if(descuento == "trainee"){
        descuentoValor = 0.5;
    } 
    else if(descuento == "junior"){
        descuentoValor = 0.15;
    }
    else{
        descuentoValor = 0;
    }

    valor = 200 * ticket;
    valor = valor - (valor * descuentoValor)

  document.getElementById("resultado").innerHTML = (`Total a pagar: $ ${valor} `);

}

const botonBorrar = document.getElementById("borrar");
botonBorrar.addEventListener("click", borrado);

function borrado() {
    document.getElementById("resultado").innerHTML = (`Total a pagar: $  `);
}


 