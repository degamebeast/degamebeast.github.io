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
        //this.root = this.attachShadow({ mode: 'open' });
    }

    loaded()
    {
        console.log(this.tagName);
        console.log(this.innerHTML);
        console.log(this.textContent);
        console.log(this.innerText);
        let text = this.textContent;
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
        //this.innerHTML = "";
        //this.innerHTML = text;
        let temp = this.getAttribute("shift");
        if (temp == "Test") {

            console.log(this.innerHTML);
            console.log(this.textContent);
            console.log(this.innerText);
            console.log(text);
            this.getElementsByClassName("linkImage").item(0).setAttribute("src", text);
            //this.getElementsByClassName("linkImage").item(0).setAttribute("alt", "somting");
   /*         this.getElementsByTagName("div").item(0).innerHTML = text;

            this.innerHTML = text;*/
        }
    }

    connectedCallback() {
        //this.addEventListener("load", () => { this.loaded(); });

        //this.loaded();

        //this["loaded"]();

        this.setAttribute("helperRun", "loaded");

/*        this.addEventListener("fullyLoaded", );
        //onload = "setupSlides()"
        let document = this.ownerDocument;
        let body = document.body;
        let curLoad = body.getAttribute("onload");
        body["setupSlides"]();
        this.loaded();
        body.setAttribute("onload", "loaded()");*/
        //this.textContent;
    }

    disconnectedCallback() {
        //this.removeEventListener("load", this.loaded());
    }
}



customElements.define('deontae-header', DA_Header);
customElements.define('deontae-footer', DA_Footer);