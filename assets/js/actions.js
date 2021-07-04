////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////// Language ///////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
document.addEventListener('click', function (event) {
    if (!event.target.matches('.navigation-button')) return;

	event.preventDefault();
    console.log(event.target);

    var menu = $( ".navigation-section" );
    console.log(menu);
    menu.toggleClass("shown");
}, false);
////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////// Language ///////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
const languages = ["Eng", "Esp", "Cat"];
const defaultLanguage = "Eng";

$( window ).on("load", function() {
    watchLanguage();

    resetLanguage();
});
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
        console.log("New target language: " + selector);
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
    console.log("Initial lnaguage detecte: " + lang);

    for (i = 0; i < languages.length; i++){
        if (lang == languages[i]) {
            langElement = $('.lang-element.'+languages[i]);
            console.log(langElement);
            langElement.click();
            break;
        }
    }
};
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
    var query = $(object).attr('href');
    // console.log(query);
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
