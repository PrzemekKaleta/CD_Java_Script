document.addEventListener("DOMContentLoaded", function () {

    var invoice = document.getElementById("invoice");
    var invoiceData = document.getElementById("invoiceData");

    if(!invoice.checked) {
        invoiceData.style.display = "none";
    }

    invoice.addEventListener("change", function () {

        if(!invoice.checked) {
            invoiceData.style.display = "none";
        }else{
            invoiceData.style.display = "block";
        }

    })

});