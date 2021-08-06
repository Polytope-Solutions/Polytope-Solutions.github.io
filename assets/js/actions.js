$( window ).on("load", function() {
    watchLanguage();
    watchScroll();

    resetLanguage();
});
////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////// Language ///////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
document.addEventListener('click', function (event) {
    if (!event.target.matches('.navigation-button')) return;

	event.preventDefault();
    // console.log(event.target);

    toggleMenu();
}, false);

function toggleMenu(){
    var menu = $( ".navigation-section" );
    // console.log(menu);
    menu.toggleClass("shown");

    var menuButton = $( ".navigation-button" );
    menuButton.toggleClass("disabled");
}
////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////// Language ///////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
const languages = "";
const defaultLanguage = "Eng";
// Watch for toggling of language switch.
function watchLanguage() {
    var lang_element = $('.lang-element');
    lang_element.on('click', function toggle_language() {
        var $this = $(this),
            selector,
            target_section,
            links = $('a');

        $this.addClass('active');
        $this.siblings().removeClass('active');
        selector = $('.lang-element.active').text().replace(/\s+/g, "");
        if (selector == "")
            selector = defaultLanguage;
        // console.log("New target language: " + selector);
        target_section = $('.lang-section.'+selector);

        target_section.addClass('lang-active');
        target_section.siblings().removeClass('lang-active');

        for (i = 0; i < links.length; i++) {
            setLinkParameter(links[i], 'lang', selector);
        };
        setUrlParameter('lang', selector);
    });
};
// Add or extract language from URL.
function resetLanguage() {
    var lang = getUrlParameter('lang'),
        i,
        langElement;
    if (lang == "Null")
        lang = defaultLanguage;
    // console.log("Initial lnaguage detected: " + lang);

    langElement = $('.lang-element.'+lang);
    // console.log("LangElement: "+langElement);
    if (langElement)
        langElement.click();
};

////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////// General ////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
// Scroll variables.
var xDown = null, yDown = null;
// Watch for scrolling.
function watchScroll() {
    document.addEventListener('touchstart', handleTouchStart, false);
    document.addEventListener('touchmove', handleTouchMove, false);
};
// Swipe detection handlers.
function handleTouchStart(event) {
    xDown = event.touches[0].clientX;
    yDown = event.touches[0].clientY;
};
function handleTouchMove(event) {
    if ( !xDown || !yDown ) { return; }

    var xUp = event.touches[0].clientX,
        yUp = event.touches[0].clientY,
        xDiff = xDown - xUp,
        yDiff = yDown - yUp;

    if (Math.abs(xDiff) > Math.abs(yDiff)) {
        if (xDiff > 0)  { scrollLeft(); }
        else            { scrollRight(); }
    } else {
        if (yDiff > 0)  { scrollUp(); }
        else            { scrollDown(); }
    };

    xDown = null;
    yDown = null;
};
function scrollLeft(){
    var menu = $( ".navigation-section" );
    // console.log(menu);
    if (!menu.hasClass("shown"))
        toggleMenu();

}
function scrollRight(){
    var menu = $( ".navigation-section" );
    // console.log(menu);
    if (menu.hasClass("shown"))
        toggleMenu();
}
function scrollUp(){

}
function scrollDown(){

}
////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////// General ////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

// Get value of given parametr from URL.
function getUrlParameter(param) {
    var query = window.location.search.substring(1),
        variables = query.split('?'),
        pair,
        i;
    for (i = 0; i < variables.length; i++) {
        pair = variables[i].split('=');
    if (pair[0] == param) { return pair[1];}
    };
    return "Null";
};
// Set given value of given parametr in URL.
function setUrlParameter(param, value) {
    if (value != "Null") {
        var query = window.location.search.substring(1),
            valueCurrent = getUrlParameter(param),
            sign = '?',
            newUrl;

        if (valueCurrent == "Null") {
            newUrl = window.location.href + sign + param + "=" + value;
        }
        else {
            newUrl = window.location.href.replace(
                param+"="+valueCurrent,
                param+"="+value);
        };
        window.history.replaceState("","", newUrl);
    };
};
// Get value of given parametr from URL.
function getLinkParameter(object, param) {
    var query = $(object).attr('href'),
        variables = query.split('?'),
        pair,
        i;
    for (i = 0; i < variables.length; i++) {
        pair = variables[i].split('=');
        // console.log(pair);
        if (pair[0] == param) {
            return pair[1];
        }
    };
    return "Null";
};
// Set given value of given parametr in URL.
function setLinkParameter(object, param, value) {
    var query = $(object).attr('href'),
        baseLink = window.location.hostname;
    // console.log(query);
    // console.log(baseLink);

    if (query.includes(baseLink) || query.startsWith("/")){ // second is for testing locally
        if (value != "Null" && query != null) {
            var valueCurrent = getLinkParameter(object, param),
                sign = '?',
                newUrl;

            if (valueCurrent == "Null") {
                newUrl = query + sign + param + "=" + value;
            }
            else {
                newUrl = query.replace(
                    param + "=" + valueCurrent,
                    param + "=" + value);
            };

            $(object).attr('href', newUrl);
        };
    };
};
