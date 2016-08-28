
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


}); 

$('#retrieve-pw').click(function(event) {
  event.preventDefault();
  console.log("clicked 'add-pw")
}); 

