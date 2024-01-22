function helperLoad()
{
/*Gets all elements in the current document*/
    var elements = document.getElementsByTagName("*");
/*calls the 'onHelperLoad' function of an element.
Only if that element has the 'helperLoad' attribute.
Giving an element the 'helperLoad' attribute without it also having a 'onHelperLoad' function will lead to unexpexcted behavior and crashes.
*/
    for (var i = 0; i < elements.length; i++) {
        var elem = elements[i];
        if (elem.getAttribute("helperLoad") != null)
            elem["onHelperLoad"]();
    }

};

function LoadPageIn() {
    var waitingElements = document.getElementsByClassName("wait");
    var bodyLoadingElements = document.getElementsByClassName("bodyLoading");


    if (waitingElements == null || bodyLoadingElements == null)
        return;

    var mainBody = waitingElements[0];
    var loadingBody = bodyLoadingElements[0];


    if (mainBody == null || loadingBody == null)
        return;

    mainBody.style.opacity = 1;
    loadingBody.style.opacity = 0;
    mainBody.style.display = "block";
    loadingBody.style.display = "none";

}