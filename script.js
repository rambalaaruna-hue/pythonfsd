//const header = document.getElementById('header');
  //  console.log(header);
    //header.style.color = 'blue';
    //ader.style.background = "red"
    //const classSelector = document.getElementsByClassName('classSelector');
    //console.log(classSelector);
  // classSelector[0].style.color = 'blue';
  // classSelector[1].style.color = 'blue';
   //classSelector[2].style.color = 'blue';
   //const arr = Array.from(classSelector);
   //console.log(classSelector);
   //arr.forEach((ele) => {
    //ele.style.color = 'blue';
   //})
   //const h3 = document.getElementsByTagName("h3");
   //console.log(h3)
  // arr.forEach((ele)=>{
  //  ele.style.color='blue';
  //  ele.style.background="red";
  // })
  //const classSelector = document.querySelector(".classSelector");
  //console.log(classSelector);
  //classSelector.style.color = 'blue';

  //const h3 = document.querySelector("h3");
  //console.log(h3)
 // h3.style.color = 'blue';


 //const classSelector = document.querySelectorAll(".classSelector");
 //console.log(classSelector)
 //classSelector.forEach((ele) =>//

//{
//    ele.style.color = 'blue'
//})

//const h3 = document.querySelectorAll('h3')
//h3.forEach((ele) =>{
  //  ele.style.color = "blue"//
//})


const header = document.querySelector("#header")
const main = document.getElementById("main")


//const outer = document.getElementById("outer")
//const inner = createElement("div")
header.textContent = "Hello adam!,how are you?"
main.innerHtml = "<p> This is the innerHtml text</p>"

const outer = document.getElementById("outer")
const inner = document.createElement("div")
inner.setAttribute("class","inner")
inner.innerHtml = "<p>heelo</p>"
outer.appendChild(inner)