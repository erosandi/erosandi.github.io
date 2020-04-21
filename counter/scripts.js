let number = 0;


$("#first").click(function(){
    number++;

    $("h2").text(number);
});



$("#second").click(function(){
    number--;

    $("h2").text(number);
});
