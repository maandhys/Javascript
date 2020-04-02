
function escrevaNumeros(inicio, fim) {

    if (fim > inicio) {
        const time = (fim - inicio) * 1005;
        timerIdOne = setTimeout(function show() {
            document.getElementById("contador").innerHTML = inicio++;
            timerId = setTimeout(show, 1000);
        }, 1000);
        setTimeout(() => { 
            document.getElementById("contador").innerHTML = inicio++;
            clearInterval(timerId)
            clearInterval(timerIdOne)
        }, time);
    }
    // Fiz o exercicio 4 utilizando Interval
}

