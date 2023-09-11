function helperLoad()
{
    console.log("loaded");
    var footers = document.getElementsByTagName("deontae-footer");

    for (var i = 0; i < footers.length; i++) {
        var footer = footers[i];
        var fMethod = footer.getAttribute("helperRun");
        console.log(fMethod);
        footer[fMethod]();
    }
};