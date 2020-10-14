# About  
Jest to kod napisany dla navigacji który pobiera wszystkie linki oraz elementy LIs (listy) i sprawdza żeby żaden link nie posiadal klasy "active", nastepnie gdy użytkownik kliknie na link w navigacji wtedy link zmieni kolor na (Hex #f7ac53).

### Case 1: user lands on homepage  

* Test1: all menu links are inactive - their parents LIs elements don't have .active class and all links are dark grey (Hex #202020).

* Test2: user clicks menu link (projects) - what scrolls website to projects section (internal link - anchor) and menu link (projects) is orange (Hex #f7ac53); Parent element of clicked menu link (projects) gets .active class

* Test3: user clicks another link (not the previous one) - all links reset orange color and their LIs elements remove .active class. Next, newly clicked menu link is orange and its parent LI element gets .active class

### Case2: user lands on subsection (skills)  

* Test1: uzytkownik wchodzi w podsekcje (projects) przez (google) wszystkie linki poza (projects) sa ciemno szare(Hex #202020) a link (projects) jest pomaranczowy (hex #f7ac53).  

* Test2: uzytkwonik klika link (my-skills) - w link (projects) resetowane sa kolory do ciemno szarego, traci klase (active) ktorą otrzymuje link (my-skills) i otrzymuje kolor pomaranczowy (Hex #f7ac53).