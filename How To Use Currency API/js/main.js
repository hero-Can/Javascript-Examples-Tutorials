let montant = document.getElementById("montant");
let result = document.getElementById("result");
 let select2 = document.querySelector(".box #monselect2");
 console.log(select2.value);
montant.oninput = function () {
    if (select2.value == "euro") {
        result.value = this.value * 0.09182 ;
    } if (select2.value == "dollar") {
        result.value = this.value * 0.09942 ;
    } if (select2.value == "sar") {
        result.value = this.value * 0.37265 ;
    }
}
