var cart = [];
function updateCart(){
    var cartnum=document.getElementById("cartnum")
    if (cart.length()>0){
        cartnum.innerHTML=cart.length()
    }

}
document.getElementById("S1").addEventListener("click", function () {
    cart.push("1");
    console.log(cart);
    updateCart()
});
document.getElementById("S1").addEventListener("click", function () {
    cart.push("2");
    console.log(cart);
    updateCart()
});


