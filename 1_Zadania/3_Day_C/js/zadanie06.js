document.addEventListener("DOMContentLoaded", function() {

var buttons = document.getElementsByClassName("moveBtn");

for (var i = 0; i < buttons.length ; i++){
    buttons[i].addEventListener('click', function () {
        var list1 = document.getElementById('list1');
        var list2 = document.getElementById('list2');
        var grandParent = this.parentElement.parentElement;
        var parent = this.parentElement;


        if(grandParent.id == "list1"){

            list2.appendChild(parent);

        }else{

            list1.appendChild(parent);

        }

    })
}

});