
$('body').on('keypress', 'input', function(e) {
  var inputVal = $('#fizzbuzz-input').val();
  if (e.which < 48 || e.which > 57) {
    e.preventDefault();
  }

  if (e.which === 13 && inputVal!="") {
    function fizzBuzz() {
      setTimeout(function(){
        checkNum()
      },50)
    }
    function checkNum() {
      if (i % 15 === 0) {
      $('.fizzbuzz').append('<li>FizBuzz</li>');
      } else if(i % 5 === 0) {
        $('.fizzbuzz').append('<li>Buzz</li>');
      } else if(i % 3 === 0) {
        $('.fizzbuzz').append('<li>Fiz</li>');
      } else {
        $('.fizzbuzz').append('<li>'+i+'</li>');
      }
      i++;
      if(i <= inputVal) {
        fizzBuzz()
      }
    }
    var i = 1;
    fizzBuzz(inputVal);
    console.log(i)
  }
});
$('#fizzbuzz-input').on('keyup', function(e){
  if ($(this).val() == '') {
    $('.fizzbuzz li').each(function(){
      $(this).remove();
    })
  }
})


