

function calPrecioConDescuento(precio, descuento, cupon) {
    const porcentajePrecioConDescuento = 100 + (- descuento - cupon);
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;    

    return precioConDescuento;
}

function buttonPriceDiscount() {
    const inputPrice = document.getElementById("inputPrice");
    const priceValue = inputPrice.value;

    const inputDiscount = document.getElementById("inputDiscount");
    const discountValue = inputDiscount.value;

    const inputCoupon = document.getElementById("inputCoupon");
    const couponValue = inputCoupon.value;

    let disCoupon;
    
    const coupon = ["DIS%10", "DIS%20", "DIS%30"];

    switch(couponValue) {
        case "DIS%10":
            disCoupon = 10;
            break;
        case "DIS%20":
            disCoupon = 20;
            break;
        case "DIS%30":
            disCoupon = 30;
            break;

        default:
            disCoupon = 0;
            break
    }

    var precioConDescuento = calPrecioConDescuento(priceValue, discountValue, disCoupon);

    const resultP = document.getElementById("resultP");
    resultP.innerText = "Discount price is: $" + precioConDescuento;

    var discountTotal = (Number(disCoupon) + Number(discountValue));

    const resultD = document.getElementById("resultD");
    resultD.innerText = "Discount percentage is: -" + discountTotal + "%";
}