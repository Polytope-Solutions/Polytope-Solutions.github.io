document.addEventListener('click', function (event) {
    if (!event.target.matches('.navigation-button')) return;

	event.preventDefault();
    console.log(event.target);

    var menu = $( ".navigation-section" );
    console.log(menu);
    menu.toggleClass("shown");
}, false);
