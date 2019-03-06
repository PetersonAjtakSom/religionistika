$(function(){
    //document.getElementsByTagName('h1')[0].style.display = 'none';
    /* Změny zobrazení v sekci ustava */
    $('#odkazy h4').click(function(){
        if ($(this).nextUntil('h4').is(':hidden')) {
            $(this).css({'background-color':'#900'});
        } else {
            $(this).css({'background-color':'#982'});
        }
        $(this).nextUntil('h4').toggle(1000);
    });

})