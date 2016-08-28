const {clipboard} = require('electron')
clipboard.writeText('Example String', 'selection')
console.log(clipboard.readText('selection'))

$('#submit-words').submit(function(event) {
  event.preventDefault();
  console.log("submitted")
  console.log($('#submit-words').serialize())
  $.ajax({
    type: "POST",
    data: $('#submit-words').serialize()
  }).done(function(data) {
      console.log("Inside")
      // console.log( $('#answer').val() )
      console.log( $('input').val() )
      console.log('using $(body).find()')
      console.log( $('body').find( $('#submit-words').serialize() ) )

      clipboard.write({text: $('#answer').val() })
  }).fail(function(responseError){
    console.error(responseError)
  })

});

