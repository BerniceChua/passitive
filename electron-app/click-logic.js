const {dialog} = require('electron')

$('#bulk-add-pw').click(function(event) {
  event.preventDefault();
  console.log("clicked 'bulk-add-pw")

  console.log(dialog.showOpenDialog({properties: ['openFile', 'openDirectory', 'multiSelections']}))
  // $.ajax({
  //   type: "POST",
  //   data: $('#submit-words').serialize()
  // }).done(function(data) {
  //     console.log("Inside")
  //     console.log( $('#answer').val() )
  //     console.log( $('input').val() )

  //     clipboard.write({text: $('input').val() })
  // }).fail(function(responseError){
  //   console.error(responseError)
  // })

});