class DA_Header extends HTMLElement
{
    constructor()
    {
        super();


    }

    
    connectedCallback()
    {

        this.innerHTML = `
    <header class="stickyHeader flex flexHeader homeHeader">
        <h1 class="header_h1">
            Deontae Albertie
        </h1>

        <nav class="fillRow">
            <ul class="header__list grid noBullets">
                <li></li>
                <li class="header__button"><a class="noTextDecoration" href="home_page.html">Home</a></li>
                <li class="header__button"><a class="noTextDecoration" href="resume.html">Resume</a></li>
                <li class="header__button"><a class="noTextDecoration" href="about_me.html">About Me</a></li>
                <li></li>
            </ul>
        </nav>


    </header>
    `;

    }
}

class DA_Footer extends HTMLElement {

    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
    <footer class="fixedFooter flex flexFooter homeFooter">
        <h1 class="footer_h1">Links: </h1>
        <a href="https://github.com/degamebeast">
            <img class="linkImage" src="../Media/OtherLinkImages/github-mark.png" alt="My Github Link">
        </a>
        <a href="https://degamebeast.itch.io/">
            <img class="linkImage" src="../Media/OtherLinkImages/itchio-logo-textless-black.png" alt="My itch.io Link">
        </a>
        <a href="https://www.linkedin.com/in/deontaealbertie/">
            <img class="linkImage" src="../Media/OtherLinkImages/LI-In-Bug.png" alt="My LinkedIn Link">
        </a>

    </footer>
    `;
    }
}



customElements.define('dsa-header', DA_Header);
customElements.define('dsa-footer', DA_Footer);
customElements.define('dsa-projectsection', DA_Footer);