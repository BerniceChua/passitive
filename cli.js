#!/usr/bin/env node
'use strict';

const meow = require('meow');
const Conf = require('conf');
const toClipboard = require('to-clipboard');

// The store is where our encrypted passwords are permanently stored (persistent).
const store = new Conf();

var key = 'real secret keys should be long and random. Ours is the most private :)';
 
var encryptor = require('simple-encryptor')({
  key: key,
  hmac: false,
  debug: true
});

const cli = meow(`
  To set password:
    pass account password

  To get password:
    pass gmail
  `, {
  alias: {
    'v': 'version',
    'h': 'help'
  }
});


let input = cli.input;

// **************** Logic to decrypt and get the password on the clipboard
// when then user wants the password back only > 1 argument is needed
if (input.length == 1) {
  let account = input.join('').trim();
  // testing out account
  console.log(`account ${ account }, length: ${ account.length }`);

  if (store.has(account) ) {
    console.log('inside store logic');
    let plainTextPassword = store.get(account);
    // piping the plain password for only 5s then
    toClipboard.sync( plainTextPassword );
/*    setTimeout( function() {
      console.log('inside timeout');
      process.exit(1);
    }, 5 * 1000); */
    toClipboard('Nothing to see really.', function () { } );
  } else {
    // warn user then exit
    console.log(`
  Hey, it seems that you haven't set the password for that account yet.
  Do it like so:
  > pass gmail freakingStrongPasswordYaSee!
    `);
    process.exit(1);
  }
}


// *************** Logic to encrypt and store the password
let account = input[0];
let plainPassword = input[1];

// at this point we have to encrypt first then save
let encryptedPassword = encryptor.encrypt( plainPassword );

// storing encrypted pass
store.set(account, encryptedPassword);

console.log( plainPassword );

console.log("encrypted: ", encryptedPassword);

let test_store = store.get(account);

console.log('store retrieval: >', test_store);
