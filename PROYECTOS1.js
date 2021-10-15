const lado = 10
const area = lado*lado
console.log("EL AREA DEL CUADRADO ES: " + area + "cm^2")

function calcularAreaCuadrado(lado){
    const area = lado*lado
    return "EL AREA DEL CUADRADO ES : " + area +  "  cm^2"
}
function onclickButtonCalcularArea(){
    const inputArea = document.getElementById("ladoCuadrado")
    const inputValueArea = inputArea.value 
    const calcularArea = calcularAreaCuadrado(inputValueArea) 
    const resultado = document.getElementById("result") 
    resultado.innerText = calcularArea 


}





function calcularAreaTriangulo(base, altura){
    const area = (base*altura)/2
    return "EL AREA DEL TRIANGULO ES:  " + area + "cm^2"
}
function onclickButtonCalcularAreaTriangulo(){
    const inputBase = document.getElementById("baseTriangulo")
    const inputValueBase = inputBase.value
    const inputAltura = document.getElementById("alturaTriangulo")
    const inputValueAltura = inputAltura.value
    const calcularArea = calcularAreaTriangulo(inputValueBase, inputValueAltura)
    const resultado = document.getElementById("resultTriangulo") 
    resultado.innerText = calcularArea  
}
