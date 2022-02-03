// Codigo del cuadrado.
console.group("Cuadrados")

// Perimetro
function perimetroCuadrado(lado) {
    return lado * 4;
};
perimetroCuadrado()

// Area
function areaCuadrado(lado) {
    return lado * lado;
};

function calcularPerimetroCuadrado() {
    const input = document.getElementById("inputCuadrado")
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado() {
    const input = document.getElementById("inputCuadrado")
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}

console.groupEnd();

// Codigo del triangulo.
console.group("Triangulos")

function triangulo(lado1, lado2, base, altura) {
    let perimetroT = lado1 + lado2 + base;
    let areaT = (base * altura) / 2;
}

function triangulo2() {
    let lado1 = document.getElementById("tLado1");
    let tLado1 = parseFloat(lado1.value);

    let lado2 = document.getElementById("tLado2");
    let tLado2 = parseFloat(lado2.value);

    let base = document.getElementById("tBase");
    let tBase = parseFloat(base.value);

    let altura = document.getElementById("tAltura");
    let tAltura = parseFloat(altura.value);
    
    let tPerimetro = tLado1 + tLado2 + tBase;
    let tArea = (tBase*tAltura)/2;

    alert(`El perímetro del triangulo es: ${tPerimetro}cm y el área es de ${tArea}cm^2`);
}

triangulo(6, 6, 4, 5.5);

console.groupEnd();

// Codigo del circulos.
console.group("Circulos")

// Radio

// Diametro
function diametroCirculo(radio) {
    return radio * 2;
}

// PI
 const PI = Math.PI;
console.log("PI es igual a :" + PI);

// Circunferencia
function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}

// Area
function areaCirculo(radio) {
    return (radio * radio) * PI;
}

function calcularPerimetroCirculo() {
    const input = document.getElementById("inputCirculo")
    const value = input.value;

    const perimetro = perimetroCirculo(value);
    alert(perimetro);
}

function calcularAreaCirculo() {
    const input = document.getElementById("inputCirculo")
    const value = input.value;

    const area = areaCirculo(value);
    alert(area);
}
console.groupEnd();