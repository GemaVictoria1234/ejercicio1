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


