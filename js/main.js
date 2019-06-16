
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
  $('h1').text('Religionistika');
  $('.objekt').attr({'style':'fill:rgba(0,0,0,0);'});
  $('.objekt').on('click',function(){
      $('.objekt').attr({'style':'fill:rgba(0,0,0,0);'});
      $(this).attr({'style':'fill:rgba(250,90,60,0.7);stroke:black'});
      $('#text h2').text($(this).data('nazev'));
      $('#text p').text($(this).data('popis'));
      $('#text figcaption').text($(this).data('nazev'));
  })
})

//Node.js

$(function(){
    function getAll(){
        $.ajax({
            url: 'http://localhost:3000/api/movies',
            type: 'GET',
            dataType: 'json',
            cache: false,
            success: function(data, textStatus, xhr) {
                console.log(textStatus);
                console.log(data);
                list(data);
                $('.update').on('click', function(){
                    getById($(this).data('id'));
                });
                $('button.delete').on('click', function(){
                    deleteById($(this).data('id'));
                });            
            },
            error: function(xhr, textStatus, err) {
                console.log(err);
            }
        });
    }

    function getById(id){
        $.ajax({
            url: 'http://localhost:3000/api/movies/'+id,
            type: 'GET',
            dataType: 'json',
            cache: false,
            success: function(data, textStatus, xhr) {
                console.log(textStatus);
                $('#id').val(data.id);
                $('#name').val(data.name);
                $('#count').val(data.count);
                $('#year').val(data.year);
                $('#modelId').modal('show');
            },
            error: function(xhr, textStatus, err) {
                console.log(err);
            }
        });
    }

    function deleteById(id){
        $.ajax({
            url: 'http://localhost:3000/api/movies/'+id,
            type: 'DELETE',
            dataType: 'json',
            cache: false,
            success: function(data, textStatus, xhr) {
                console.log(textStatus);
                getAll();
            },
            error: function(xhr, textStatus, err) {
                console.log(err);
            }
        });
    }

    function update(id, data){
        $.ajax({
            url: 'http://localhost:3000/api/movies/'+id,
            type: 'PUT',
            data: data,
            dataType: 'json',
            contentType: 'application/json',
            success: function(data, textStatus, xhr) {
                console.log(textStatus);
                getAll();
            },
            error: function(xhr, textStatus, err) {
                console.log(err);
            }
        });
    }

    function create(data){
        $.ajax({
            url: 'http://localhost:3000/api/movies',
            type: 'POST',
            data: data,
            dataType: 'json',
            contentType: 'application/json',
            success: function(data, textStatus, xhr) {
                console.log(textStatus);
                getAll();
            },
            error: function(xhr, textStatus, err) {
                console.log(err);
            }
        });
    }


    $('button#create').on('click', function(){
        $('#id').val('');
        $('#name').val('');
        $('#count').val('');
        $('#year').val('');
    });

    $('button#submit').on('click', function(){
        var json = {};
        json.name = $('#name').val();
        json.count = $('#count').val();
        json.year = $('#year').val();
        var data = JSON.stringify(json);
        if($('#id').val()){
            update($('#id').val(), data);
        }
        else{
            create(data);
        }
    });

    function list(data) {
        $('#list').html('');
        data.forEach(function(film){
            $('#list').append('<tr><td>'+film.id+'</td><td><a href="#" class="update" data-id="'+film.id+'">'
            +film.name+'</a></td><td>'+film.count+'</td><td>'+film.year+'</td><td><button class="btn btn-danger delete" data-id="'+film.id+'">Smazat</button></td></tr>');
        });
    }


    getAll();
})
