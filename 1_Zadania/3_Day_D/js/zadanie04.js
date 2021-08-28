document.addEventListener("DOMContentLoaded", function () {

        var panelBody = document.querySelector(".panel-body");

        var choice = document.querySelector(".form-control");

        var images = document.querySelectorAll(".page-header img");

        var tab = [2, 0, 1];

        panelBody.addEventListener('click', function () {
            for(var i = 0 ; i<choice.length ; i ++){
                if(choice[i].selected){
                    images[tab[i]].style.display = "";
                }else{
                    images[tab[i]].style.display = "none";
                }
            }

        })

});