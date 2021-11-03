const productPrice = 50000;
const productDiscount = 20;
const discountPorcentage = productDiscount /100;
const priceDiscountProduct = productPrice * discountPorcentage;
const finalProductPrice = productPrice - priceDiscountProduct;

console.log({
    productPrice,
    productDiscount,
    discountPorcentage,
    priceDiscountProduct,
    finalProductPrice
})

function calculateDiscount(productPrice, productDiscount){
    const discountPorcentage = productDiscount /100;
    const priceDiscountProduct = productPrice * discountPorcentage;
const finalProductPrice = productPrice - priceDiscountProduct;
return finalProductPrice

}

function onClickButtonCalculatePriceDiscount(n1, n2){
    const productPrice = document.getElementById("entrada_precio_producto")
    const productPriceValue = productPrice.value
    const productDiscount = document.getElementById("entrada_valor_descuento")
    const productDiscountValue = productDiscount.value
    const finalProductPrice = calculateDiscount(productPriceValue, productDiscountValue)
    const answer = document.getElementById("result")
    answer.innerText = "EL PRECIO DEL PRODUCTO CON DESCUENTO ES:   $ " + finalProductPrice 
    
}
