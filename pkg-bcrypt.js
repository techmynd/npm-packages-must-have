/**
 *********************************
 * Encrypt Password // Create Hash
 *********************************
 */

const bcrypt = require('bcryptjs');

async function encryptPassword(secret) {
  const user = {
    name: 'Javed',
    email: 'someemail@domain.com',
    password: secret,
  };

  /* Salt is random data that is used as an additional input to a one-way function that "hashes" data, a password or passphrase. Salts are used to safeguard passwords in storage. */
  // They use call back but we use async await that is cleaner

  // Create random phrase // salt
  const salt = await bcrypt.genSalt(10);
  // create hash by giving secret and created salt to bcrypt
  // and store it back in object
  user.password = await bcrypt.hash(secret, salt);
  //console.log(user);
  console.log(user.password);
}

// pass string password to function and create hash
encryptPassword('thIs_isMyPassword');

/**
 ***********************************
 * Compare Password by Decrypting it
 ***********************************
 */

// It will take original secret (user input) and our created hash (stored hashed password in DB)
async function comparePassword(originalSecret, storedHashedPassword) {
  // call compare method that triggers a promise and returns a bool
  const isMatch = await bcrypt.compare(originalSecret, storedHashedPassword);
  if (isMatch) {
    console.log('Matched');
  } else {
    console.log('Not a Match... Sorry!');
  }
}

comparePassword(
  'thIs_isMyPassword',
  '$2a$10$L3T1QsOHWEJ1umz.PE8Qt.zM9L1pRWNZM2QHxSremMnL0wVktvJgm',
);
