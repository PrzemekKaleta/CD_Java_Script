document.addEventListener("DOMContentLoaded", function () {

    var form = document.querySelector("form");

    var mail = form.querySelector("#email");
    var name = form.querySelector("#name");
    var surname = form.querySelector("#surname");
    var password1 = form.querySelector('#pass1');
    var password2 = form.querySelector('#pass2');
    var agree = form.querySelector('#agree');


    form.addEventListener('submit', function (event) {
        console.log(agree.checked);

        var patt1 = /@{1,1}/i;

        if(!patt1.test(mail.value)){
            alert("niepoprawna ilość @ w mailu");
            event.preventDefault();
        }
        if (name.value.toString().length < 5) {
            alert("za krótkie imię");
            event.preventDefault();
        }
        if (surname.value.toString().length < 5) {
            alert("za krótkie nazwisko");
            event.preventDefault();
        }
        if (!password1.value==password2.value) {
            alert("hasło nie zostało poprawie powtórzone");
            event.preventDefault();
        }

        var patt2 = /\d+/i;
        var patt3 = /[^\d\W]+/i;

        var test1 = patt2.test(password1.value);
        var test2 = patt3.test(password1.value);
        var test3 = (password1.value.length>4);

        if (!(test1*test2*test3)){
            alert("musi zawierać conajmnej jedną literę, jedną cyfrę i mieć conajmniej 5 znaków");
            event.preventDefault();
        }

        if (!agree.checked) {
            alert("aby przejść dalej należy wyrazić zgodę na warunki");
            event.preventDefault();
        }

    },true);

});