let slideIndex = 1;
let slideshowIntervalId = null;

//Sets the default index to 1 and shows the first slide
function setupSlides() {
    slideIndex = 1;
    showSlides(slideIndex);
}

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";

    resetSlideShowInterval();
}

function slideshowTick()
{
    plusSlides(1);
}

function resetSlideShowInterval() {
    if (slideshowIntervalId != null)
        clearInterval(slideshowIntervalId);
    slideshowIntervalId = setInterval(slideshowTick, 5000);

    return slideshowIntervalId;
}

class DA_Slideshow extends HTMLElement {

    constructor() {
        super();
    }



    onHelperLoad() {
        var slides = [...(this.getElementsByTagName("dsa-slide"))];
        //console.log(slides.length);
        
        var templateHTML = `
        <!--        Html Layout Sample for a slideshow-->
        <!--onload="setupSlides()" will need to be placed in the body element containing these slides-->
        <!--                 Slideshow container -->
        <div class="slideshow-container">
            <!--                     Full-width images with number and caption text -->
            <div class="mySlides fade">
                <!--<div class="numbertext">1 / 3</div>-->
                <img src="../Media/TestingImages/jojoMoji.jpg" style="width:100%">
                <div class="slideCaption">Caption Text</div>
            </div>
            <!--                     Next and previous buttons -->
            <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
            <a class="next" onclick="plusSlides(1)">&#10095;</a>


            <br>
            <!--                 The dots/circles -->
            <div class="dotHolder">
                <span class="dot" onclick="currentSlide(1)"></span>
            </div>
        </div>
    `;

        this.innerHTML = templateHTML;

        var slidesContainer = this.getElementsByClassName("slideshow-container")[0];
        var dotHolder = this.getElementsByClassName("dotHolder")[0];
        var dotTemplate = this.getElementsByClassName("dot")[0];
        var slideTemplate = this.getElementsByClassName("mySlides")[0];
        slideTemplate.getElementsByTagName("img")[0].remove();
        var slideCaption = slideTemplate.getElementsByClassName("slideCaption")[0];
        var prevButton = this.getElementsByClassName("prev")[0];
        var nextButton = this.getElementsByClassName("next")[0];
        var breakElement = this.getElementsByTagName("br")[0];
        //breakElement.remove();

        prevButton.remove();
        nextButton.remove();
        slideCaption.remove();
        slideTemplate.remove();
        dotTemplate.remove();
        dotHolder.remove();


        for (var i = 0; i < slides.length; i++) {
            //console.log("slide " + i);
            var curSlide = slides[i];
            var curCaption = curSlide.getElementsByTagName("dsa-caption")[0];
            var elementCheck = curCaption;
            if (elementCheck != null) {
                slideCaption.innerHTML = curCaption.innerHTML;
            }
            elementCheck = curSlide.getElementsByTagName("img")[0];
            var curImage = elementCheck;
            if (elementCheck != null)
                curImage = slideTemplate.insertAdjacentElement("beforeend", curImage);
            var curCaption = slideTemplate.insertAdjacentElement("beforeend", slideCaption);
            var slideClone = slideTemplate.cloneNode(true);
            slidesContainer.appendChild(slideClone);

            if (curImage != null)
                curImage.remove();
            if (curCaption != null)
                curCaption.remove();
        }
        slidesContainer.insertAdjacentElement("beforeend", prevButton);
        slidesContainer.insertAdjacentElement("beforeend", nextButton);
        slidesContainer.insertAdjacentElement("beforeend", breakElement);

        for (var i = 0; i < slides.length; i++) {
            //console.log("dot " + i);
            dotTemplate.setAttribute("onClick", "currentSlide(" + (i+1) + ")");
            var curDot = dotTemplate.cloneNode(true);
            dotHolder.appendChild(curDot);

        }

        slidesContainer.insertAdjacentElement("beforeend", dotHolder);
/*        let img = this.getElementsByTagName("img")[0];
        img.setAttribute("src", this.getAttribute("src"));
        img.setAttribute("alt", img.src);
        this.getElementsByTagName("h3")[0].innerHTML = title;
        this.getElementsByTagName("p")[0].innerHTML = initialContenet;
        this.insertAdjacentElement("beforeend")*/



        //this.insertAdjacentElement("beforeend", slidesContainer);


        //console.log("Slides load complete");

    }





    connectedCallback() {
        this.setAttribute("helperLoad", "");
        resetSlideShowInterval();
    }


    disconnectedCallback() {
        if (slideshowIntervalId != null)
            clearInterval(slideshowIntervalId);
    }
    
}





customElements.define('dsa-slideshow', DA_Slideshow);