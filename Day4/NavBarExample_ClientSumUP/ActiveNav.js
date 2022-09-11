const ActivePage = window.location.pathname;
console.log(ActivePage)

//choose all element a in nav
const ActiveNav = document.querySelectorAll('nav a').forEach(
    MyLinks => {
        if (MyLinks.href.includes(`${ActivePage}`)) {
            MyLinks.classList.add('Active');            
        }
    }
)
