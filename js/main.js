
$(' h4').css({'border-bottom':'1px solid black'})
.addClass('mt-4 p-3 bg-info');

$('#krest h4').css({'border-bottom':'1px solid black'})
.addClass('mt-4 p-3 bg-warning');

$('#hind h4').css({'border-bottom':'1px solid black'})
.addClass('mt-4 p-3 bg-warning');

$('#budha h4').css({'border-bottom':'1px solid black'})
.addClass('mt-4 p-3 bg-warning');

$('#sikh h4').css({'border-bottom':'1px solid black'})
.addClass('mt-4 p-3 bg-warning');

$('#dzin h4').css({'border-bottom':'1px solid black'})
.addClass('mt-4 p-3 bg-warning');



$(function(){
    $('#odkazy h4').click(function(){
        if ($(this).nextUntil('h4').is(':hidden')) {
            $(this).css({'background-color':'#900'});
        } else {
            $(this).css({'background-color':'#982'});
        }
        $(this).nextUntil('h4').toggle(1000);
    });
});

$(function(){
    $('#odkazy h4').on('click',function(){
        $('#rozdeleni').text(krestan.text)
     });
});

$(function(){
    $('#odkazy h4').on('click',function(){
        $('#bible').text(krestan.text)
     });
});

$(function(){
  $('h1').text('Náboženství na kontinentech');
  $('.objekt').attr({'style':'fill:rgba(0,0,0,0);'});

  $('.objekt').on('click',function(){
      $('.objekt').attr({'style':'fill:rgba(150,100,0,0);'});
      $(this).attr({'style':'fill:rgba(250,90,60,0.7);stroke:black'});
      $('#text h2').text($(this).data('nazev'));
      $('#text p').text($(this).data('popis'));
      $('#text figcaption').text($(this).data('nazev'));
  })
})
