const formlInput = [...document.querySelectorAll(".form-group")];

const formItem = [...document.querySelectorAll(".form-control")];

formInput.addEventListener("submit", e => {
    e.preventDefault();

    //jeżeli wszystko ok to wysyłamy
    if (formItem.value.length >= 3) {
        e.target.submit();
    } else {
        //jeżeli nie to pokazujemy jakieś błędy
        alert("Kolego wypełniłeś błędnie nasz super formularz");
    }
})