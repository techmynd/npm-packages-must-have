// Create Token after login for user session

const jwt = require('jwt-simple');
const config = require('config');

/**
 ****************
 * Get Token
 ****************
 */

function getToken() {
  const payload = { id: 1, name: 'Javed' };
  const token = jwt.encode(payload, config.get('jwtSecret'));
  return { token };

  // Output Difference
  // return token; // 12345
  // return { token }; // { token: '12345' }
  // in jwt case, doesnot matter, use any of two return from above

  /* 
  actual output: 
  { token:
   'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwibmFtZSI6IkphdmVkIn0.hZr4cSJbIxrIXbjjJrhQZQNiSEgpX-dwwjdfDBoRIsY' 
   }
   */
}
console.log(getToken());

/**
 ****************
 * Validate Token
 ****************
 */

function validateToken(token) {
  const decoded = jwt.decode(token, config.get('jwtSecret'));
  return decoded;
}
console.log(
  validateToken(
    'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwibmFtZSI6IkphdmVkIn0.hZr4cSJbIxrIXbjjJrhQZQNiSEgpX-dwwjdfDBoRIsY',
  ),
);
