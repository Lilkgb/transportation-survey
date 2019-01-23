$(document).ready(function() {
  $('form#transportation_survey').submit(function(event) {
    event.preventDefault();
    $('#work-responses').show();
    $('input:checkbox[name=work-transportation]:checked').each(function() {
      var workTransportationMode = $(this).val();
      $('#work-responses').append(workTransportationMode + '<br>');
    });
    $("#fun-responses").show();
    $("input:checkbox[name=fun-transportation]:checked").each(function(){
      var funTransportationMode = $(this).val();
      $("#fun-responses").append(funTransportationMode + "<br>");
    });
    $('#transportation_survey').hide();
  });
});

//
//   var total = 5;
//   for (var currentNumber = 5; currentNumber <= 5; currentNumber += 1) {total += currentNumber; }
//   console.log(total)

// var total = 2;
// for (var currentNumber = 1; currentNumber <= 50; currentNumber *= 2) {
//   console.log(currentNumber)
// // }
// var quote = ("Believe you can and you're halfway there. Theodore Roosevelt");
// console.log(quote);
