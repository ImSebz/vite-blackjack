import { pedirCarta, valorCarta, crearCartaHTML } from "./";
/**
 * turno de la computadora
 * @param {String} puntosMinimos Puntos minimos que la computadora necesita para ganar 
 * @param {Array<HTMLElement>} puntosHTML Elemento HTML donde se muestran los puntos
 * @param {HTMLElement} divCartasComputadora Elemento HTML donde se muestran las cartas de la computadora
 * @param {Array<String>} deck
 */

export const turnoComputadora = (puntosMinimos, puntosHTML, divCartasComputadora ,deck = [] ) => {

    if ( !puntosMinimos ) throw new Error('Los puntos minimos son necesarios');
    if ( !puntosHTML ) throw new Error('Los puntos HTML son necesarios');
    if ( !divCartasComputadora ) throw new Error('El div de cartas de la computadora es necesario');

    let puntosComputadora = 0;

    do {
        const carta = pedirCarta(deck);

        puntosComputadora = puntosComputadora + valorCarta(carta);
        puntosHTML.innerText = puntosComputadora;
        //TODO: crear carta HTML
        const imgCarta = crearCartaHTML(carta);
        divCartasComputadora.append(imgCarta);

        if (puntosMinimos > 21) {
            break;
        }

    } while ((puntosComputadora < puntosMinimos) && (puntosMinimos <= 21));

    setTimeout(() => {
        if (puntosComputadora === puntosMinimos) {
            alert('Nadie gana :(');
        } else if (puntosMinimos > 21) {
            alert('Computadora gana')
        } else if (puntosComputadora > 21) {
            alert('Jugador Gana');
        } else {
            alert('Computadora Gana')
        }
    }, 100);
}