

const nombre = 'Jonathan';
const apellido = 'Pillajo';


const nombreCopleto = `${nombre} ${apellido}`;

console.log(nombreCopleto);

function getSaludo(nombre) {
    return 'Hola ' + nombre;
}

console.log(`Este es un texto: ${getSaludo(nombreCopleto)}`);
