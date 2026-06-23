```javascript
/* ==========================
   RBT ASSOCIATES SCRIPT
========================== */

/* GST CALCULATOR */

function calculateGST() {

let amount =
parseFloat(
document.getElementById("amount").value
);

let rate =
parseFloat(
document.getElementById("gstRate").value
);

if(isNaN(amount)){

document.getElementById("gstResult").innerHTML =
"Please enter amount";

return;

}

let gst =
(amount * rate) / 100;

let total =
amount + gst;

document.getElementById("gstResult").innerHTML =

`
GST Amount : ₹${gst.toFixed(2)}
<br>
Total Amount : ₹${total.toFixed(2)}
`;

}


/* SMOOTH SCROLL */

document
.querySelectorAll('a[href^="#"]')
.forEach(anchor => {

anchor.addEventListener("click", function(e){

e.preventDefault();

document.querySelector(
this.getAttribute("href")
).scrollIntoView({

behavior:"smooth"

});

});

});


/* HEADER SHADOW */

window.addEventListener("scroll", function(){

const header =
document.querySelector(".header");

if(window.scrollY > 50){

header.style.boxShadow =
"0 10px 25px rgba(0,0,0,.12)";

}else{

header.style.boxShadow =
"0 2px 20px rgba(0,0,0,.08)";

}

});


/* COUNTER ANIMATION */

const counters =
document.querySelectorAll(".counter");

const speed = 200;

counters.forEach(counter => {

const updateCount = () => {

const target =
+counter.getAttribute("data-target");

const count =
+counter.innerText;

const increment =
target / speed;

if(count < target){

counter.innerText =
Math.ceil(count + increment);

setTimeout(updateCount,15);

}else{

counter.innerText =
target;

}

};

updateCount();

});


/* SCROLL REVEAL */

const revealElements =
document.querySelectorAll(

'.service-card,.value-box,.profile-card'

);

function revealOnScroll(){

revealElements.forEach(el=>{

const position =
el.getBoundingClientRect().top;

const screenPosition =
window.innerHeight / 1.2;

if(position < screenPosition){

el.style.opacity = "1";
el.style.transform = "translateY(0px)";

}

});

}

revealElements.forEach(el=>{

el.style.opacity = "0";
el.style.transform =
"translateY(40px)";
el.style.transition =
"all .8s ease";

});

window.addEventListener(
"scroll",
revealOnScroll
);

revealOnScroll();


/* WHATSAPP BUTTON */

const whatsapp =
document.createElement("a");

whatsapp.href =
"https://wa.me/917666955185";

whatsapp.target =
"_blank";

whatsapp.innerHTML =
'<i class="fa-brands fa-whatsapp"></i>';

whatsapp.classList.add(
"whatsapp-float"
);

document.body.appendChild(
whatsapp
);


/* BACK TO TOP BUTTON */

const topButton =
document.createElement("button");

topButton.innerHTML =
"↑";

topButton.classList.add(
"back-to-top"
);

document.body.appendChild(
topButton
);

window.addEventListener(
"scroll",
function(){

if(window.scrollY > 500){

topButton.style.display =
"block";

}else{

topButton.style.display =
"none";

}

});

topButton.addEventListener(
"click",
function(){

window.scrollTo({

top:0,
behavior:"smooth"

});

});


/* CURRENT YEAR */

const year =
new Date().getFullYear();

const footerYear =
document.getElementById(
"currentYear"
);

if(footerYear){

footerYear.innerHTML =
year;

}


/* LOADING EFFECT */

window.addEventListener(
"load",
function(){

document.body.classList.add(
"loaded"
);

});


console.log(
"RBT Associates Website Loaded Successfully"
);
```
