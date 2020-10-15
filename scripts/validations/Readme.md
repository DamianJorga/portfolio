 # opisac jak dzialac:
* Skrypt ma na celu sprawdzenie czy uzytkownik podal wszystkie wymagane pola oraz czy odpowiadaja swojej wartosci.


## cele co to ma robic:
* pola nie moge byc puste
* pola maja odpowiadac wlasciwej wartosci (email ma byc podany jako email, name jako name, number jako number).
* brak wymaganego pola (komunikat o braku wymaganego pola).
* zle podana wartosc pola ( komunikat o zlej wartosci pola).
* dobrze wypelnione pola powoduja wyslanie wiadomosci.
* akceptacja RODO 
* po wyslaniu uzytkownik otrzyma wiadomosc zwrotna np. (Dziekuje za wiadomosc)

## testy: 
	wysylanie wiadomosci przez uzytkownika

* uzytkownik nie wprowadza zadnego z wymaganych pol - wyskakuje komunikat o braku wymagancyh pol, wiadomosci nie zostaje wyslana
* uzytkownik blednie wprowadza (email) - wyskakuje komunikat o blednie wprowadzonym polu (email), wiadomosc nie zostaje wyslana
* uzytkownik blednie wprowadza (number) - wyskakuje komunikat o blednie wprowadzonym polu (number), wiadomosc nie zostaje wyslana
* uzytkownik wypelnia prawidlowo wszystkie pola, pomija przycisk z RODO (wiadomosc nie wyslana komunikat o akceptacji RODO)
* uzytkownik wypelnia prawidlowo wszystkie pola, akceptuje przycisk z RODO (wiadomosc wyslana uzytkownik otrzymuje komunikat z 		wiadomoscia zwrotna)