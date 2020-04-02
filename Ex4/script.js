
function escrevaNumeros(inicio, fim) {

    if(fim > inicio) {
        const time = (fim - inicio) * 1000;
        let timerId = setInterval(() => {
            show()
        }, 1000);
    
        setTimeout(() => { 
            show(), 
            clearInterval(timerId)
        }, time);
    }
   
    function show() {
        document.getElementById("contador").innerHTML = inicio++
    }

}
