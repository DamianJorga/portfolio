const links = [...document.querySelectorAll(".nav-link")]; //pobranie wszystkich linkow z menu z uzyciem operatora REST (zamiana obiektu nodeList na obiekt tablicy)

const menuLIs = [...document.querySelectorAll(".nav-item")]; //pobranie wszystkich elementow LIs z menu

links.forEach((link) => {
  //sprawdzenie czy uzytkownik nie wczytal podsekcji strony na start
  // console.log(window.location.hash); //test ogolny
  if (window.location.hash) {
    const hash = window.location.linkshash;
    // console.log(hash, link.getAttribute("href")); //debugowanie
    // console.log(Boolean(link.getAttribute("href") === hash)); //debugowanie
    // console.log(link.getAttribute("href")); //test ogolny
    if (link.getAttribute("href") === hash) {
      link.parentElement.classList.add("active"); // dodaje klase active wczystanej podsekcji 
    }
  }

  link.addEventListener("click", function (e) {
    // console.log("kliknales link " + e.target); //test ogolny

    //sprawdzamy czy ktorykolwiek element listy linkow menu 'menuLIs' posiada klase active i jesli tak to ja resetujemy
    menuLIs.forEach((menuLI, index) => {
      //   console.log(
      //     menuLI.classList.contains("active"),
      //     `element o indeksie ${index}`
      //   ); // test
      if (menuLI.classList.contains("active")) { // sprawdza czy jest uzyta gdzies klasa active
        menuLI.classList.remove("active"); // jesli tak usuwa ja
      }
    });

    link.parentElement.classList.add("active"); // dodaje klase active dla rodzica kliknietego elementu navigacji 

    document.getElementById("navbarNav").classList.remove("show"); // zwraca element i usuwa klase show po kliknieciu w link
  });
});