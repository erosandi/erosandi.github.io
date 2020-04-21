$('.first').on('click', () => {
    console.log('Yeah, you clicked me')
  });

  $('.second').on('click', () => {
    $('.first').text('Hey!');
});  

$('.third').on('click', () => {
    $('button').css('background-color', 'blue');
});  


    $(".third").on('click', () => {
      var szin = $('.color').val();
$('button').css('background-color', szin);
});   