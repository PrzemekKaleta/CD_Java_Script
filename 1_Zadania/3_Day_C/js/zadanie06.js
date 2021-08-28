document.addEventListener("DOMContentLoaded", function() {

    var buttons = document.getElementsByClassName("moveBtn");
    var list1 = document.getElementById("list1");
    var list2 = document.getElementById("list2");

    console.log(buttons[1]);
    console.log(buttons[1].parentElement);
    console.log(buttons[1].parentElement.parentElement);

    for(var i = 0; i < buttons.length; i++){

        buttons[i].addEventListener("click", function () {

            if(this.parentElement.parentElement.id == "list1"){

                list2.appendChild(this.parentElement);

            }else{

                list1.appendChild(this.parentElement);

            }



        })


    }

});