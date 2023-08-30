

const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion: {
        ciudad: 'New York',
        zip: 14.15435,
        lng: 34.436434,
    }
};

// console.table(persona);


const persona2 = { ...persona };
persona2.nombre = 'Peter';

console.log(persona);
console.log(persona2);