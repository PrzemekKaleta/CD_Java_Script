document.addEventListener("DOMContentLoaded", function () {

    var select = document.querySelector(".form-control");
    var images = document.querySelector(".page-header");
    var form = document.querySelector("form");
    var selectChildren = select.children;



    form.addEventListener("change", function () {

        checkForm();

    });


    var checkForm = function(){
        if(selectChildren[0].selected){
            images.children[1].style.display = "none";
            images.children[2].style.display = "none";
            images.children[3].style.display = "block";
        }else if(selectChildren[1].selected){
            images.children[1].style.display = "block";
            images.children[2].style.display = "none";
            images.children[3].style.display = "none";
        }       if(selectChildren[2].selected){
            images.children[1].style.display = "none";
            images.children[2].style.display = "block";
            images.children[3].style.display = "none";
        }
    };

    checkForm();


});