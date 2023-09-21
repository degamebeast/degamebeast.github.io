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
                <li class="header__button"><a class="noTextDecoration" href="projects.html">Project</a></li>
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
    <footer class="stickyFooter flex flexFooter homeFooter">
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

class DA_Project extends HTMLElement {

    constructor() {
        super();
    }



    onHelperLoad() {
        var initialContenet = this.innerHTML;

        this.innerHTML = `
        <section class="projectHolder">

            <h3 class="projectTitle">Title</h3>
            <p class="projectInfo">
                Tincidunt integer eu augue augue nunc elit dolor, luctus placerat scelerisque euismod, iaculis eu lacus nunc mi elit, vehicula ut laoreet ac, aliquam sit amet justo nunc tempor, metus vel.
                Placerat suscipit, orci nisl iaculis eros, a tincidunt nisi odio eget lorem nulla condimentum tempor mattis ut vitae feugiat augue cras ut metus a risus iaculis scelerisque eu ac ante.
            </p>
            <img class="projectImage" src="../Media/TestingImages/Halo.png" alt="Alternate Text">
        </section>
    `;

        let img = this.getElementsByTagName("img")[0];
        img.setAttribute("src", this.getAttribute("src"));
        img.setAttribute("alt", img.src);
        this.getElementsByTagName("p")[0].innerHTML = img.src;

    }

    connectedCallback() {
        this.setAttribute("helperLoad", "");

    }
}



customElements.define('dsa-header', DA_Header);
customElements.define('dsa-footer', DA_Footer);
customElements.define('dsa-project', DA_Project);