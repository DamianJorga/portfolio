const links = [...document.querySelectorAll(".nav-link")]; //pobranie wszystkich linkow z menu z uzyciem operatora REST (zamiana obiektu nodeList na obiekt tablicy)

const menuLIs = [...document.querySelectorAll(".nav-item")]; //pobranie wszystkich elementow LIs z menu

links.forEach((link) => {
    // console.log(window.location.hash); // sprawdzenie hash'u strony otwartej przez wpisanie podsekcji za hash
    if (window.location.hash) {
        const hash = window.location.linkshash;

    if (link.getAttribute("href") == hash) {
        link.parentElement.classList.add("active"); // ma dodac klase active po wlaczeniu strony z google. ???? nie dziala
    }
}
    link.addEventListener("click", function (e) {
        // console.log("klikneles w link " + e.target); // test klikniecia
        menuLIs.forEach((menuLI, index) => {
            if (menuLI.classList.contains("active")); 
            menuLI.classList.remove("active"); // usuwa klase active z poprzednio kliknietego elementu
        });
        link.parentElement.classList.add("active"); // dodaje klase active do kliknietego elementu
    });
});