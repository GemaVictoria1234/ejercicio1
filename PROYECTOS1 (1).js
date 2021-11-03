var figuras = 'cuadrado'
function botones(seleccionArea) {
    const htmlSeleccion = document.getElementById("seleccion")
    const m1 = document.getElementById("laMedida1")
    const m2 = document.getElementById("laMedida2")
    const in2 = document.getElementById("inMedida2")
    figuras = seleccionArea

    if (seleccionArea == 'cuadrado') {
        htmlSeleccion.innerText = "CUADRADO"
        m1.innerText = "Digite el valor de un lado__"
        m2.innerText = ""
        in2.type = "hidden"
        
    }
    if (seleccionArea == 'triangulo') {
        htmlSeleccion.innerText = "TRIANGULO"
        m1.innerText = "Digite el valor de la base___"
        m2.innerText = "Digite el valor de la altura__"
        in2.type = "number"
 
    }
    if (seleccionArea == 'circulo') {
        htmlSeleccion.innerText = "CIRCULO"
        m1.innerText = "Digite el valor del radio__"
        m2.innerText = ""
        in2.type = "hidden"
      
    }
    if (seleccionArea == 'rectangulo') {
        htmlSeleccion.innerText = "RECTANGULO"
        m1.innerText = "Digite el valor de la base___"
        m2.innerText = "Digite el valor de la altura__"
        in2.type = "number"
   
    }
}

function onclickButton(){
    const inputM1 = document.getElementById("inMedida1")
    const inputValueM1 = inputM1.value
    const inputM2 = document.getElementById("inMedida2")
    const inputValueM2 = inputM2.value
    var area = 0
    var perimetro = 0
    const resultadoa = document.getElementById("txArea")
    const resultadop = document.getElementById("txPerimetro")

    if (figuras == 'cuadrado'){
        area = inputValueM1 *inputValueM1
        perimetro = inputValueM1 *4
    }
    if (figuras == 'triangulo'){
        area = (inputValueM1 *inputValueM2) /2
        perimetro = (Math.sqrt(((inputValueM1/2) *(inputValueM1/2)) + (inputValueM2 *inputValueM2))*2)
    }
    if (figuras == 'circulo'){
        area = 3.1416 *(inputValueM1 *inputValueM1)
        perimetro = 2 *3.1416 *inputValueM1
    }
    if (figuras == 'rectangulo'){
        area = inputValueM1 *inputValueM2
        perimetro = (inputValueM1 *2) +(inputValueM2 *2)
    }
    resultadoa.innerText = "El area es: " + area 
    resultadop.innerText = "El parimetro es: " + perimetro
}

function calcularAreaCuadrado(lado) {
    const area = lado * lado
    return "EL AREA DEL CUADRADO ES : " + area + "  cm^2"
}
function onclickButtonCalcularAre() {
    const inputArea = document.getElementById("laMedida1")
    const inputValueArea = inputArea.value
    const calcularArea = calcularAreaCuadrado(inputValueArea)
    const resultado = document.getElementById("txArea")
    resultado.innerText = calcularArea


}

function calcularAreaTriangulo(base, altura) {
    const area = (base * altura) / 2
    return "EL AREA DEL TRIANGULO ES:  " + area + "cm^2"
}
function onclickButtonCalcularAreaTriangulo() {
    const inputBase = document.getElementById("baseTriangulo")
    const inputValueBase = inputBase.value
    const inputAltura = document.getElementById("alturaTriangulo")
    const inputValueAltura = inputAltura.value
    const calcularArea = calcularAreaTriangulo(inputValueBase, inputValueAltura)
    const resultado = document.getElementById("resultTriangulo")
    resultado.innerText = calcularArea
}
