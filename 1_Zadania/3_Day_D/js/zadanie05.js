document.addEventListener("DOMContentLoaded", function () {

    var inputEmail = document.getElementById("email");
    var inputName = document.getElementById("name");
    var inputSurname = document.getElementById("surname");
    var inputPass1 = document.getElementById("pass1");
    var inputPass2 = document.getElementById("pass2");
    var inputAgree = document.getElementById("agree");

    var form = document.querySelector("form");

    form.addEventListener("change", function () {

        console.log(checkForm());
    });

    var checkForm = function () {

        var valueEmail = inputEmail.value;
        if (valueEmail.indexOf("@") == -1) {
            return false;
        }

        var valueName = inputName.value;
        if (valueName.trim().length < 5) {
            return false;
        }

        var valueSurname = inputSurname.value;
        if (valueSurname.trim().length < 5) {
            return false;
        }

        var valuePass1 = inputPass1.value;
        var valuePass2 = inputPass2.value;

        if (valuePass1 != valuePass2) {
            return false;
        }


        var regex1 = /[a-z]|[A-Z]/g;
        var regex2 = /[0-9]/g;

        if (!(regex1.test(valuePass1) || !(regex2.test(valuePass1)))) {
            return false;
        }
        ;


        if (!inputAgree.checked) {
            return false;
        }

        return true;
    }





});