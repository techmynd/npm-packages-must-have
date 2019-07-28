// create slug from string

const slug = require('slug');

function createSlug(title) {
  return slug(title, {
    // convert to lower case
    lower: true,
    /* 
    replacement charater
    seperator
    leave it empty for no seperators 
    */
    // replacement: '-',
  });
}

console.log(createSlug('this IS The Title of My Post'));
