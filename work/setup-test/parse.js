const path = require('path');
const parser = require('node-html-parser');
const fs = require('fs');

// Note: We're using JS here to make sure NodeJS is properly installed.
// This isn't very informative or representative of web development

const html = fs.readFileSync('./people.html', {encoding:'utf8', flag:'r'});
const root = parser.parse(html);

const ulCheck = root.querySelectorAll('ul');
const liCheck = root.querySelectorAll('li');
const structureCheck = root.querySelectorAll('ul > li > span');

if( !ulCheck[0] ) {
  console.error("ERROR: you are missing a '<ul>' element");
  process.exit(1);
}

if( !ulCheck.length > 1 ) {
  console.error("ERROR: you have too many '<ul>' elements");
  process.exit(1);
}

if( !html.match(/<\/ul>/) ) {
  console.log("ERROR: You are missing a closing tag for the '<ul>' element");
  process.exit(1);
}

if( !liCheck[0] ) {
  console.error("ERROR: You are missing a '<li>' element");
  process.exit(1);
}

if( !liCheck.length > 1 ) {
  console.error("ERROR: you have too many '<li>' elements");
  process.exit(1);
}

if( !html.match(/<\/li>/) ) {
  console.log("ERROR: You are missing a closing tag for the '<li>' element");
  process.exit(1);
}

if( !structureCheck[0]) {
  console.error("ERROR: your HTML does not match the request structure (a ul that has one li, and the li has many span elements)");
  process.exit(1);
}

const peopleEl = root.querySelectorAll('ul.person');
if( !peopleEl[0] ) {
  console.error("ERROR: You are missing the class of 'person'");
  process.exit(1);
}
if( peopleEl.length !== 1 ) {
  console.error("ERROR: You have too many elements with the class of 'person'");
  process.exit(1);
}

const parts = ['name', 'neuid', 'slackhandle', 'github'];
const elements = {};
let hasErrors = false;

parts.forEach( part => {
  elements[part] = root.querySelectorAll(`ul.person li span.${part}`);
  if(!elements[part][0]) {
    console.error(`ERROR: You are missing an element with the appropriate class for ${part}`);
    hasErrors = true;
  }
  if( elements[part].length > 1 ) {
    console.error(`ERROR: You have too many elements with the class of ${part}`);
    hasErrors = true;
  }
});

if(hasErrors) {
  process.exit(1);
}

parts.forEach( part => {
  console.log(`${part} is: ${elements[part][0].textContent}`);
});
