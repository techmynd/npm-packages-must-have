// await is for a function that returns a promise

function fireMessage() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('This is message');
    }, 2000);
  });
}

async function msg() {
  const msg = await fireMessage();
  console.log(msg);
}
msg(); // Message: <-- after 2 seconds

/** 
/////////////////////////////////////////////////////////////////
*/

function one() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('one here...');
    }, 1000);
  });
}

function two() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('two here...');
    }, 500);
  });
}

function three() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('three here....');
    }, 4000);
  });
}

async function msgg() {
  const a = await one();
  const b = await two();
  const c = await three();

  console.log(`${a} ${b} ${c}`);
}
// this function will resolve all promises and then will output
msgg();

// await is a new operator used to wait for a promise to resolve or reject.
// It can only be used inside an async function.

// A word of caution however, in the above example each step is done sequentially, with each additional step waiting for the step before to resolve or reject before continuing. If you instead want the steps to happen in parallel, you can simply use  Promise.all to wait for all the promises to have fulfilled:

// promise.all() // all promises in parallel

async function msggg() {
  const [a, b, c] = await Promise.all([one(), two(), three()]);
  console.log(`PROMISE ALL ... ${a} ${b} ${c}`);
}
msggg();

/**
///////////////////////////////////////////////////////////////////////
 */

async function hello() {
  return 'Hello world!';
}
hello().then(x => console.log(x));

///////////////////////////////////////////////////////////////////////

/**
///////////////////////////////////////////////////////////////////////
 */

// not working //
function f1() {
  return new Promise(resolve => {
    resolve('this is async function expression!');
  });
}

const zz = async function() {
  const output = await f1();
  console.log(output);
};
console.log(zz);

///////////////////////////////////////////////////////////////////////

async function f() {
  let promise = new Promise((resolve, reject) => {
    resolve('f done');
  });

  let result = await promise; // wait till the promise resolves (*)

  console.log(result); // "f done!"
}

f();

////////////////////////////////////////////////////////////////

// https://alligator.io/js/async-functions/
// https://javascript.info/async-await
