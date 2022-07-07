//DOM Drilling
// document.body.children[1].children[0].href = 'https://www.google.com/';
// //this can also be done

// let anchorElement = document.getElementById('external-link');
// anchorElement.href = 'https://github.com/OraoCodes'

// this can also be done as follows

let anchorElement = document.querySelector('#external-link');
anchorElement.href = 'https://www.linkedin.com/feed/';

let h1Element = document.querySelector('h1');
h1Element.textContent = 'Hello I am changed';

//DOM manipulation
//INSERT
let newAnchorElement = document.createElement('a');
newAnchorElement.href = 'https://www.linkedin.com/feed/';
newAnchorElement.textContent =  ' try me'

let firstParagraph = document.querySelector('p');

firstParagraph.append(newAnchorElement);

//DELETE
let firstH1Element = document.querySelector('h1');

//new browser versions 
firstH1Element.remove();
//for older browsers Versions such as Internet Exploerer.
 firstH1Element.parentElement.removeChild(firstH1Element);