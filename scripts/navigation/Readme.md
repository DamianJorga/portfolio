# About  
Jest to skrypt który nadaje klase .active dla aktywnego linku nawigacji. Skrypt dziala ze stronami typu SPA (Single Page app). skrypt wymaga aby linki w menu dzialaly jako kotwice odnoszace sie do tresci w jednej stronie.

### Case 1: user lands on homepage  

* Test1: all menu links are inactive - their parents LIs elements don't have .active class and all links are dark grey (Hex #202020).

* Test2: user clicks menu link (projects) - what scrolls website to projects section (internal link - anchor) and menu link (projects) is orange (Hex #f7ac53); Parent element of clicked menu link (projects) gets .active class

* Test3: user clicks another link (not the previous one) - all links reset orange color and their LIs elements remove .active class. Next, newly clicked menu link is orange and its parent LI element gets .active class

### Case2: user lands on subsection (projects)  

* Test1: uzytkownik wchodzi w podsekcje (projects) przez (google) wszystkie linki poza (projects) sa ciemno szare(Hex #202020) a link (projects) jest pomaranczowy (hex #f7ac53).  

* Test2: uzytkownik przechodzi z podesekcji (projects) do (my-skills) - klasa .active jest resetowana z (projects) i dodawana do (my-skills). 