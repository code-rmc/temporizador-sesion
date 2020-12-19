window.onload = function () {
    let cronometro; //variable para almacenar la funcion tiempo

    //Reinicia el cronometro cada vez que actualize el tiempo
    function reiniciarCronometro(a) {
        clearInterval(a);
    }

    document.getElementById("index").onmousemove = function () {
        let limite; //Tiempo limite
        let cont = 0;

        limite = 1 * 60; //Tiempo limite definido en Seg. (1 Mint)

        reiniciarCronometro(cronometro); //llamo a la funcion para reiniciar el cronometro

        //Mostrar en pantalla
        document.getElementById("tiempoFinal").innerHTML = limite;

        //setInterval Es una funcion especial de JS por tiempo
        cronometro = setInterval(function () {
            cont++;

            document.getElementById("tiempo").innerHTML = cont;

            if (cont == limite) window.location.href = "/lock.html";
        }, 1000); //1 seg
    };
};

//*********************************************
//******************RELOJ**********************
//*********************************************

var intervalo = setInterval(actualizarHora, 1000);

function actualizarHora() {
    let time = new Date();
    let hora = time.getHours(),
        minutos = time.getMinutes(),
        segundos = time.getSeconds();

    let phoras = document.getElementById("horas"),
        pminutos = document.getElementById("minutos"),
        psegundos = document.getElementById("segundos");

    //hora
    if (hora < 10) {
        hora = "0" + hora;
    }
    phoras.textContent = hora;
    //minuto
    if (minutos < 10) {
        minutos = "0" + minutos;
    }
    pminutos.textContent = minutos;
    //segundos
    if (segundos < 10) {
        segundos = "0" + segundos;
    }
    psegundos.textContent = segundos;
}
