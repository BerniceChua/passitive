var fs = require('fs'); // Load the File System to execute our common tasks (CRUD)

const {dialog} = require('electron').remote

$('#bulk-add-pw').click(function(event) {
  event.preventDefault();
  console.log("clicked 'bulk-add-pw")

  dialog.showSaveDialog(function (fileName) {
    if (fileName === undefined){
      console.log("You didn't save the file");
      return;
    }
    // fileName is a string that contains the path and filename created in the save file dialog.  
    fs.writeFile(fileName, content, function (err) {
      if(err){
        alert("An error ocurred creating the file "+ err.message)
      }
                    
      alert("The file has been succesfully saved");
    });
  });
});

$('#add-pw').click(function(event) {
  event.preventDefault();
  console.log("clicked 'add-pw")

  addPWOverlay()

  let $closePopup = $('body').find('.material-icons')
  console.log( $closePopup )
  $closePopup.click(function(event) {
    event.preventDefault()

    console.log('clicked close this popup')
    
    $('#addDiv').remove()
  })
}); 

$('#retrieve-pw').click(function(event) {
  event.preventDefault();
  console.log("clicked 'retrieve-pw")

  retrievePWOverlay()

  let getPWs = JSON.parse(fs.readFileSync('../exampleJson.json'));

    /*
    , function (err, data) {
    if (err) {
      return console.error(err);
    }
    */


  console.log("Asynchronous read: " + getPWs);

  
  console.log( $('#retrieveDiv') )
  for( let key in getPWs) {
    $("#retrieveDiv").append("<li class='larger-font left-margin'>" + key + "<i class='material-icons w3-xxxlarge'>edit</i><i class='material-icons w3-xxxlarge'>delete</i></li>");
  }


  let $closePopup = $('body').find('.material-icons')
  console.log( $closePopup )
  $closePopup.click(function(event) {
    event.preventDefault()

    console.log('clicked close this popup')
    
    $('#retrieveDiv').remove()
  })

}); 


function addPWOverlay() {
  $('body').append( $addPWDiv )
}

let $addPWDiv = $( 
  "<div id='addDiv' class='overlay'><p class='center-words'>Put Password Here</p><p><i class='material-icons w3-xxxlarge put-at-bottom-middle'>close</i></p><form class='center-words' id='submit-words' method='get'><label>login  <input id='login' type='text' name='login'/></label><br /><label>password  <input id='password' type='text' name='password'/></label><br /><input type='submit' value='Submit' /></form></div>" )

function retrievePWOverlay() {
  $('body').append( $retrievePWDiv )
}

let $retrievePWDiv = $( 
  "<div id='retrieveDiv' class='overlay'><p class='center-words larger-font'>All Passwords</p><p><i class='material-icons w3-xxxlarge put-at-bottom-middle'>close</i></p></div>" )