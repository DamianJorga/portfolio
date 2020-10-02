(function() {

    const createButton = () => {
    const btn = document.createElement('button');
      btn.className = 'scrollToTop hidden';

      document.body.appendChild(btn);
      return btn;
    }

    const animateScroll = () => {
        if (document.documentElement.scrollTop > 0) {
            document.documentElement.scrollBy(0, -10);
            setTimeout(animateScroll, 5);
        }
    }

    const init = () => {
    const btn = createButton();

        btn.addEventListener('click', animateScroll);

        window.addEventListener('scroll', () => {
            if(document.documentElement.scrollTop > 100) {
                btn.classList.remove('hidden');
            } else {
                btn.classList.add('hidden');
            }
        }, false);
    }
    window.scr00lToTop = init;
})();