document.addEventListener("DOMContentLoaded", function () {

    var allInputs = document.querySelectorAll(".checkbox");
    var allAdds = allInputs[0];
    var clearAdds = allInputs[allInputs.length-1];
    var price = document.getElementById("price");
    var form = document.querySelector("form");

    form.addEventListener("submit", function () {

        alert(price.innerHTML);

    });

    clearAdds.addEventListener("change", function () {
        console.log("clear All Adds");
        if(this.firstElementChild.firstElementChild.checked){
            price.innerText = "0.00zł";

            for(var i = 0; i < (allInputs.length - 1); i++){

                allInputs[i].firstElementChild.firstElementChild.checked = false;

            }

        }

    });


    allAdds.addEventListener("change", function () {
       console.log("chceked All Adds");
       if(this.firstElementChild.firstElementChild.checked){

           var allCosts = 0;

           for(var i = 1; i < (allInputs.length - 1); i++){

               allInputs[i].firstElementChild.firstElementChild.checked = true;
               allCosts = allCosts + parseFloat(allInputs[i].firstElementChild.firstElementChild.dataset.price);

           }

           price.innerText = allCosts.toFixed(2) + "zł";
           clearAdds.firstElementChild.firstElementChild.checked = false;

       }

    });



    for(var i = 1; i < (allInputs.length - 1); i++){

        allInputs[i].addEventListener("change", function () {

                console.log(this.firstElementChild.firstElementChild.dataset.price);

                var tempPrice = price.innerText;
                var numbPrice = parseFloat(tempPrice);

                var addPrice = parseFloat(this.firstElementChild.firstElementChild.dataset.price);

                var addOrNot;

                if(this.firstElementChild.firstElementChild.checked){
                    addOrNot = 1;
                    clearAdds.firstElementChild.firstElementChild.checked = false;
                }else{
                    addOrNot = -1;
                    allAdds.firstElementChild.firstElementChild.checked = false;
                }

                numbPrice = numbPrice + (addOrNot*addPrice);

                price.innerText = numbPrice.toFixed(2) + "zł";


            });

        }

});