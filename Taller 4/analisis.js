// ==>>> HElPERS <<<== //

function esPar(numero) {
    return (numero % 2 === 0);
};

function calcularMediaAritmetica(lista) {

    const sumaLista = lista.reduce(
        function(valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );

    const promedioLista = sumaLista / lista.length;

    return promedioLista;
};

// ==>>> CALCULADORA DE MEDIANA <<<== //

function medianaSalarios(lista) {
    const mitad = parseInt(lista.lentgth / 2);

    if(esPar(lista.lentgth)) {
        const personaMitadA = lista[mitad - 1];
        const personaMitadB = lista[mitad];

        const mediana = calcularMediaAritmetica([personaMitadA, personaMitadB]);
        return mediana;
    } else {
        const personaMitad = lista[mitad]
        return personaMitad;
    }
};


// ==>>> MEDIANA GENERAL <<<== //

const salariosCol = colombia.map(
    function(persona) {
        return persona.salario;
    }
);

const salariosColSorted = salariosCol.sort(
    function(salarioA, salarioB) {
        return salarioA - salarioB;
    }
);

const medianaGeneralCol = medianaSalarios(salariosColSorted);

// ==>>> MEDIANA DEL TOP 10% <<<== //



const spliceStart = (salariosColSorted.length * 90) / 100;
const spliceCount = salariosColSorted.length - spliceStart;

const salariosColTop10 = salariosColSorted.splice(
    spliceStart,
    spliceCount,
);

const medianaTop10Col = medianaSalarios(salariosColTop10);


console.log({
    medianaGeneralCol,
    medianaTop10Col,
});