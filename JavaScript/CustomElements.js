class Header extends HTMLElement
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

        <nav class="fillContainer">
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




customElements.define('deontae-header', Header);