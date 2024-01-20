/*
DOM - Document Object Model
when we want to manipulate HTML through JS
Add - Remove - get - ...
document is an object that we can access different proprties and methods through it. use them to interact with HTML pages
*/
// first step is to reach in(get) and select the element in HTML
//Query Selector
const para = document.querySelector('p'); //by tag name: it will grab the first p tag in HTML. but what if we want other p tag? use for example the class name:
const par = document.querySelector('.error'); //but what if we have more than one with class error:
const param = document.querySelector('div.error');

//for multiple elements 
const paras = document.querySelectorAll('p'); //node list: we can use [] operator and for each (it is not array.)
paras.forEach(parame =>{
    console.log(parame);
});
console.log(paras[2]);

const errors = document.querySelectorAll('.error'); //by class name(use # if it is an id)
console.log(errors);

//getting element by...
const title = document.getElementById('page-title');
console.log(title);

const errorss = document.getElementsByClassName('error'); //it is HTML collection. we can use [] but not foreach
console.log(errorss);

console.log(errorss[0]);

const pa = document.getElementsByTagName('p'); //it will return all
console.log(pa);
console.log(pa[0]); // to get exactly what we want

// to get the text of the element by innerText property
//const para = document.querySelector('p'); 
console.log(para.innerText);
// to update the text
para.innerText = 'Sam is a student' //override the text
para.innerText += 'Sam is a student' //to append it to the text already exist

//const paras = document.querySelectorAll('p'); 
paras.forEach(para => {
    console.log(para.innerText);
    para.innerText += ' new text'; //to add text to each p elemet text 
});

//change the HTML
const contentt = document.querySelector('.content');
console.log(contentt.innerHTML);  //out: <p>whatever it is</p>

contentt.innerHTML = '<h1>Hellooo</h1>'; //replace the whole HTML content with it or use += to add
//adding data to HTML content(updating HTML in the browser)
const people = ['Reyhan', 'Farah', 'Mahdi'];

people.forEach(person => {
    contentt.innerHTML += `<p>${person}</p>`;
});

//get the attribute
const link = document.querySelector('a');
console.log(link.getAttribute('href'));
//set attribude(override it or make a new attr if it doesn't already exist)
link.setAttribute('href', 'www.yahoo.com');
link.innerText = 'yahoo website';
//what if we want to keep the attribute that we already have
const message = document.querySelector('p');
console.log(message.getAttribute('class'));
//update the attribute of the element wo changing the existing attributes
message.setAttribute('style', 'color: green;'); //ading a new
//adding another style and also keep color
message.style.margin = '50px';
message.style.color = 'crimson';
// to remove the property
message.style.margin = '';

//CLASS **** add - remove - toggle *** using classList property
content.classList.add('error');
content.classList.remove('error');
content.classList.add('success');

//challenge: add error class to p where there is success in the text and error class where there is a error in the text of the element
/*
in HTML we have:
<p>this is an <span style="display: none;">error</span></p>
<p>hello world with success</p>
<p>hello world</p>
<p>always sucsess</p>
<p>nothing is here</p>
*/
const content = document.querySelectorAll('p'); //it is a node list 
content.forEach(para => {
    //inneText is for all visible text BUT textContent property is for all the content even the ones that are not visible
    if (para.textContent.includes('error')) {
        para.classList.add('error');
    }
    if (para.innerText.includes('success')) {
        para.classList.add('success');
    } 
});

//toggle class: if an element has the class remove it, and if it doesn't have it add it
const titlee = document.querySelector('.title');
titlee.classList.toggle('test');