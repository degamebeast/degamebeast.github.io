let slideIndex = 1;
let slideshowIntervalId = null;
let shouldTick = true;
let activeCover = null;
let activeClip = null;

let intervalTimeLength = 10;//In seconds



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
    activeCover = null;
    activeClip = null;
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        slides[i].removeEventListener("mouseover", slideshowTickStop);
        slides[i].removeEventListener("mouseout", slideshowTickStart);
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    slides[slideIndex - 1].addEventListener("mouseover", slideshowTickStop);
    slides[slideIndex - 1].addEventListener("mouseout", slideshowTickStart);
    dots[slideIndex - 1].className += " active";

    var images = slides[slideIndex - 1].getElementsByTagName("img");

    for (var imageInd = 0; imageInd < images.length; imageInd++) {
        var curImage = images[imageInd];
        if (curImage.hasAttribute("dsa_cover")) {
            activeCover = curImage;
            //activeCover.classList.add("slideCover");
            activeCover.style.position = "absolute"
            
        }
        if (curImage.hasAttribute("dsa_clip")) {
            //activeCLip.classList.add("slideCover");
            activeClip = curImage;
            //activeClip.style.position = "absolute"
        }
    }

    initCoverAndClip();

    //resetSlideShowInterval();
}

function initCoverAndClip() {
    if (activeCover == null || activeClip == null)
        return;

    activeClip.parentElement = activeCover;
    activeCover.style.opacity = 1;
    activeClip.style.opacity = 0;
    activeCover.classList.remove("ccShowSlideImg");
    activeCover.classList.remove("ccHideSlideImg");
    activeClip.classList.remove("ccShowSlideImg");
    activeClip.classList.remove("ccHideSlideImg");

    LoadPageIn();
}

function showCover()
{
    if (activeCover == null || activeClip == null)
        return;

    activeClip.parentElement = activeCover;
    activeCover.classList.add("ccShowSlideImg");
    activeCover.classList.remove("ccHideSlideImg");
    activeClip.classList.remove("ccShowSlideImg");
    activeClip.classList.add("ccHideSlideImg");
}

function showClip()
{
    if (activeCover == null || activeClip == null)
        return;

    activeClip.parentElement = activeCover;
    activeCover.classList.remove("ccShowSlideImg");
    activeCover.classList.add("ccHideSlideImg");
    activeClip.classList.add("ccShowSlideImg");
    activeClip.classList.remove("ccHideSlideImg");
}

function slideshowTickStop() {
    shouldTick = false;
    showClip();
    console.log("stop");
}

function slideshowTickStart() {
    shouldTick = true;
    showCover();
    console.log("start");
}

function slideshowTick()
{
    if (shouldTick) {
        plusSlides(1);
    }
}

function resetSlideShowInterval() {
    //console.log("reset");
    clearSlideShowInterval();
    slideshowIntervalId = setInterval(slideshowTick, intervalTimeLength * 1000);



    return slideshowIntervalId;
}

function clearSlideShowInterval() {
    //console.log("clear");
    if (slideshowIntervalId != null)
        clearInterval(slideshowIntervalId);
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
            <dsa-slide class="mySlides fade">
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
            else
                slideCaption.innerHTML = "";

            var curCover = null;
            var curClip = null;
            var images = curSlide.getElementsByTagName("img");

            for (var imageInd = 0; imageInd < images.length; imageInd++)
            {
                var curImage = images[imageInd];
                if (curImage.hasAttribute("dsa_cover"))
                {
                    curCover = curImage;
                }
                if (curImage.hasAttribute("dsa_clip"))
                {
                    curClip = curImage;
                }
            }


            var coverImageElement = null;
            var clipImageElement = null;

            elementCheck = curCover;

            if (elementCheck != null)
                coverImageElement = slideTemplate.insertAdjacentElement("beforeend", curCover);

            elementCheck = curClip;

            if (elementCheck != null)
                clipImageElement = slideTemplate.insertAdjacentElement("beforeend", curClip);

/*            else {
                var curVideo = curSlide.getElementsByTagName("video")[0];
                elementCheck = curVideo;
                if (elementCheck != null) {
                    videoElement = slideTemplate.insertAdjacentElement("beforeend", curVideo);
                }
            }*/
            var curCaption = slideTemplate.insertAdjacentElement("beforeend", slideCaption);
            var slideClone = slideTemplate.cloneNode(true);



            slidesContainer.appendChild(slideClone);

/*            var currentSlides = slidesContainer.getElementsByTagName("dsa-slide");
            var slide = currentSlides[currentSlides.length - 1];
            var vids = slide.getElementsByTagName("video");

            for (var j = 0; j < vids.length; j++) {
                console.log("vidNum" + j);
                slide.addEventListener("mouseenter", () => { vids[j].play(); });
                slide.addEventListener("mouseout", () => { vids[j].pause(); });
            }*/

            if (coverImageElement != null)
                coverImageElement.remove();
            if (clipImageElement != null)
                clipImageElement.remove();
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
        //console.log("connected");
    }


    disconnectedCallback() {
        if (slideshowIntervalId != null)
            clearInterval(slideshowIntervalId);

/*        this.removeEventListener("mouseenter", clearInterval);
        this.removeEventListener("mouseout", resetSlideShowInterval);*/
    }
}





customElements.define('dsa-slideshow', DA_Slideshow);