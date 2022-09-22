let puntos = 0;
let tiempo = 30;
let Ttiempo = undefined;
let player = document.getElementById("player");//agarro el elemento player
player.addEventListener("mouseover",sumarPuntos);//escucho caundo lo toca el cursor
let puntaje = document.getElementById("puntos");
let cronometro = document.getElementById("tiempo")

function sumarPuntos() {//cada vez que el player es tocado
	puntos++;
	puntaje.innerHTML = `Puntaje ${puntos}/70`;//muestra el puntaje en el html, ${} es para mostrar una variable
	randNum = Math.round(Math.random()*450);//y del player
	randNum2 = Math.round(Math.random()*450);//x del player
	player.style.marginTop = randNum + "px";//lo muevo en eje y
	player.style.marginLeft = randNum2 + "px";//lo muevo en eje x
	if(!Ttiempo)start();
	if (puntos == 70)ganaste(); //si llego a 70 puntos llamo a la funcion ganaste
}
function restarTiempo() {
	tiempo--;
	cronometro.innerHTML = "Tiempo:" + tiempo;
	if (tiempo == 0)perdiste();
}

function start(){Ttiempo = setInterval(restarTiempo,1000);}

function ganaste(){//llega a 70 puntos
		alert("ganaste y sos el mascapito");
		reiniciarJuego();
}
function  perdiste() {//el tiempo llega a 0
		reiniciarJuego();
		alert("perdiste y sos un inutil culia");
}
function reiniciarJuego() {
		clearInterval(Ttiempo);//reinicio el temporizador
		Ttiempo = undefined;
		tiempo = 30;//reinicio el numero del tiempo
		puntos = 0;//reinicio el puntaje
		cronometro.innerHTML = "Tiempo: 35"//borro el temporizador
		player.style.marginTop = 0 + "px";//reinicio la posicion y del player
	    player.style.marginLeft = 0 + "px";//reinicio la posicion x del player
	    puntaje.innerHTML = "Puntaje: 0/70";//muestra el puntaje en el html, ${} es para mostrar una variable
}
