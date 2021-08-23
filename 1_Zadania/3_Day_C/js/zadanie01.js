document.addEventListener("DOMContentLoaded", function() {

    var button = document.getElementById("addBtn");
    var table = document.getElementById("orders");

    button.addEventListener("click", function () {

        var item = document.getElementById("item").value;
        var quantity = document.getElementById("quantity").value;
        var order = document.getElementById("orderId").value;

        var tdOrder = document.createElement("td");
        tdOrder.innerText = order;

        var tdItem = document.createElement("td");
        tdItem.innerText = item;

        var tdQuantity = document.createElement("td");
        tdQuantity.innerText = quantity;

        var trNext = document.createElement("tr");
        trNext.appendChild(tdOrder).appendChild(tdItem).appendChild(tdQuantity);

        table.appendChild(trNext);


    })


});