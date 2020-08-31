function arquero(nombre) {
    this.nombre = nombre;
    this.estado = "Vivo";
    this.ps = 120;
    this.flechas = 10;
    this.arma = "Arco y daga";

    this.curar = function() {
        if (this.estado == 'Vivo') {
            console.log('no se puede curar, tiene el maximo de salud');
        }
        if ((this.estado == 'Vivo') && (this.ps != 100)) {
            this.ps += 60;
            console.log(`${this.nombre} se cura 20 puntos de salud`);
            console.log(`${this.nombre} esta  ${this.estado} con  ${this.ps} puntos de salud`);
        }
        if (this.estado == 'Muerto') {
            console.log(`${this.nombre} no se puede curar, esta muerto..`);
        }
    }
}

function tirarflecha(orco) {
    if (arquero.estado == 'Vivo') {
        arquero.flechas -= 1;
        if (orco.estado == 'Vivo' && arquero.flechas != 0) {
            console.log(`${orco.nombre} -20 puntos de salud`);
            orco.ps -= 20;
            if (orco.ps <= 0) {
                console.log('Enemigo muerto')
                orco.estado = 'Muerto';
                orco.ps = 0;
            }
        }

        if (orco.estado == 'Muerto') {
            console.log('El enemigo ya esta muerto');
        }
        if (arquero.flechas <= 0 && orco.estado == 'Vivo') {
            console.log('No quedan flechas, ataque con daga');
            orco.ps -= 10;
            console.log('orco pierde 10 puntos de salud');
            if (orco.ps <= 0) {
                console.log('Enemigo muerto')
                orco.estado = 'Muerto';
                orco.ps = 0;
            }
        }
    }
    if (arquero.estado == 'Muerto') { console.log('Jugador muerto, no puede atacar') }
}



function orco(nombre) {
    this.nombre = nombre;
    this.estado = 'Vivo';
    this.ps = 340;
    this.arma = 'Espada';
}

function ataqueespada(arquero) {
    if (orco.estado == 'Vivo') {
        if (arquero.estado == 'Vivo') {
            console.log(`${arquero.nombre} -30 puntos de salud`);
            arquero.ps -= 30;
            if (arquero.ps <= 0) {
                console.log('Enemigo muerto')
                arquero.estado = 'Muerto';
                arquero.ps = 0;
            }
        }

        if (arquero.estado == 'Muerto') {
            console.log('El enemigo ya esta muerto');
        }
    }
    if (orco.estado == 'Muerto') { console.log('Jugador muerto, no puede atacar') }
}


function estado(jugadorobjetivo) {
    console.log(`${jugadorobjetivo.nombre}, estado: ${jugadorobjetivo.estado}, salud : ${jugadorobjetivo.ps}`)
}


var arquero = new arquero("Legolas");
console.log(arquero);

var orco = new orco("Orco");
console.log(orco);

// realice unas modificaciones, con una limitada cantidad de flechas, y diferencias entre las razas