// Cuadrado
console.group('Cuadrado')
const ladoCuadrado = 5;
const perimetro = ladoCuadrado * 4;
const areaCuadrado = ladoCuadrado * ladoCuadrado;

function calcularCuadrado(lado) {
    return {
        perimetro: lado * 4,
        area: lado * lado
    }
}

console.log({
    ladoCuadrado,
    perimetro,
    areaCuadrado
})
console.groupEnd('Cuadrado')
// Triangulo
console.group('Triangulo')
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const ladoTrianguloBase = 4;
const alturaTriangulo = 5.5;

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + ladoTrianguloBase;
const areaTriangulo = (ladoTrianguloBase * alturaTriangulo) / 2;

function calcularTriangulo(lado1, lado2, base, altura) {
    return {
        perimetro: lado1 + lado2 + base,
        area: (base * altura) /2
    }
}

console.log({
    ladoTriangulo1,
    ladoTriangulo2,
    ladoTrianguloBase,
    alturaTriangulo,
    perimetroTriangulo,
    areaTriangulo
})
console.groupEnd('Triangulo')
//consolas
//console.group().groupEnd() // agrupar secciones de codigo
