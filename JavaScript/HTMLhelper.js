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