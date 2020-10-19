/**
 * Menu Active Script
 * author: Damian Jorga
 * Freeware 2020 but keep Author note when use
 */
/**
 * How to use:
 * 1.) Create menu structure in HTML document with below structure (standard menu)
 * <ul>
 *     <li><a hef="">Link</a></li>
 *     <li><a hef="">Link</a></li>
 *     <li><a hef="">Link</a></li>
 * </ul>
 *
 * 2.) Add 'Menu Active Script' js file to your project (in HTML, suggested place - before </body> tag end but over your main js file)
 *
 * 3.) Create CSS name for ACTIVE class and style it, example:
 *     .active > .MENU_LINK ELEMENT_CSS_SELECTOR(a) {
 *        color: $accent-color;
 *     }
 *
 * 4.) In your main js file execute 'Menu Active Script'
 * window.m3nu("MENU LINK ELEMENT CSS SELECTOR (a)", "MENU LI CSS SELECTOR (li)", "NAME OF ACTIVE CLASS");
 */


(function () {
    //get all elements and put to the array
    const getElementsToArray = (el) => [...document.querySelectorAll(el)];
  
    //check if homepage and return location.hash
    const isNotHomePage = () => {
      if (window.location.hash) return window.location.hash;
      else return false;
    };
  
    //check if element contains provided class
    const isActive = (el, activeClass) => el.classList.contains(activeClass);
  
    //add | remove provided class on selected element
    //operation = 'add' | 'remove'
    const activeClass = (el, activeClass, operation) => {
      if (operation === "add") el.parentElement.classList.add(activeClass);
      else if (operation === "remove") {
        el.classList.remove(activeClass);
      } else {
        throw new Error(
          "Incorrect type of operation. Possible 2 values: add | remove"
        );
      }
    };
  
    //aggregation all functions and prepare structure of the script
    const init = (menuLink, menuElement, activeMenuClass) => {
      //get all menu links and put them to the array
      const menuLinks = getElementsToArray(`.${menuLink}`);
  
      //get all menu items (LIs elements of menu links) and put them to the array
      const menuNavItems = getElementsToArray(`.${menuElement}`);
  
      //check if user lands on subsection
      if (isNotHomePage()) {
        const hash = isNotHomePage();
  
        menuLinks.forEach((link) => {
          if (link.getAttribute("href") == hash) {
            activeClass(link, activeMenuClass, "add");
          }
        });
      }
  
      //user lands on homepage
      menuLinks.forEach((link) => {
        link.addEventListener("click", function (e) {
            console.log("menu nav: ",menuNavItems);
          //reset active class from selected elements
          menuNavItems.forEach((navItem) => {
            if (isActive(navItem, activeMenuClass)) {
              activeClass(navItem, activeMenuClass, "remove");
            }
          });
          //add provided active class to clicked element
          activeClass(link, activeMenuClass, "add");
        });
      });
    };
  
    //add menu script to window object
    window.m3nu = init;
  })();

  // TODO: extend the script to be used for standard navigation (with external and internal links), not only anchor links.