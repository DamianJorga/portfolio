# About  
It is for .active class singing scripts for navigation link feedback. The script works with SPA pages (single page application). the script requires the links in the menu to act as anchors to the content on one page.

### Case 1: user lands on homepage  

* Test1: All menu links are inactive - their parents LIs elements don't have .active class and all links are dark grey (Hex #202020).

* Test2: User clicks menu link (projects) - what scrolls website to projects section (internal link - anchor) and menu link (projects) is orange (Hex #f7ac53); Parent element of clicked menu link (projects) gets .active class

* Test3: user clicks another link (not the previous one) - all links reset orange color and their LIs elements remove .active class. Next, newly clicked menu link is orange and its parent LI element gets .active class

### Case2: user lands on subsection (projects)  

* The user enters the subsections (projects) via (google) all links except (projects) are dark gray (Hex # 202020) and the link (projects) is orange (hex # f7ac53).

* User moves from (projects) to (my-skills) - the .active class is reset from (projects) and added to (my-skills).