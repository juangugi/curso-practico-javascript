// ==>>> PROMEDIO <<<==

console.group();

function calcularMediaAritmetica(lista) {

    const sumaLista = lista.reduce(
        function(valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );

    const promedioLista = sumaLista / lista.length;

    return promedioLista;
}

console.groupEnd();

// ==>>> MEDIANA <<<==

console.group();

const listaA = [
    100,
    200,
    500,
    400000000,
];

const mitadListaA = parseInt(listaA.length / 2);

function esPar(numero) {
    if (numero % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

let mediana;

if(esPar(listaA.length)) {
    const elementoA = listA[mitadListaA - 1];
    const elementoB = listaA[mitadListaA];

    const promElementoAB = calcularMediaAritmetica([
        elementoA,
        elementoB,
    ])

} else {
    mediana = listaA[mitadListaA]
}

console.groupEnd();

// ==>>> MODA <<<==

console.group();

const lista1 = [
    1,
    2,
    3,
    1,
    2,
    3,
    4,
    2,
    2,
    2,
    1,
]

const lista1Count = {};

lista1.map(
    function(elemento) {
        if(lista1Count[elemento]) {
            lista1Count[elemento] += 1;
        } else {
            lista1Count[elemento] = 1;
        }
    }
);

const lista1Array = Object.entries(lista1Count).sort(
    function(elementoA, elementoB) {
        return elementoA[1] - elementoB[1]
    }
);

const moda = lista1Array[lista1Array.length - 1];