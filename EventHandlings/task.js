// today code
const submitBtn = document.getElementById("submitBtn");
const output = document.getElementById("output");
console.log(userName)

//input event
submitBtn.addEventListener("click",(e) =>{
    const userName = document.getElementById("userName").Value;
    e.preventDefault();
    output.innerHTML=userName


})

