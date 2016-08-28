const {clipboard} = require('electron')
clipboard.writeText('Example String', 'selection')
console.log(clipboard.readText('selection'))

$('#submit-words').submit(function(event) {
  event.preventDefault();
  console.log("submitted")
  $.ajax({
    type: "POST",
    data: $('#submit-words').serialize()
  }).done(function(data) {
      console.log("Inside")
      console.log( $('#answer').val() )
      console.log( $('input').val() )

      clipboard.write({text: $('input').val() })
  }).fail(function(responseError){
    console.error(responseError)
  })

});

