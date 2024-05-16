let inputName = document.getElementById("todo-Input-Name");
let inputAge = document.querySelector(".todoInputAge");
let times = document.getElementById("time");
let submitbtn = document.getElementById("addbtn");
let outP1 = document.getElementById("output");
let outP2 = document.getElementById("output2");
let outP3 = document.getElementById("output3");

let delinput = document.getElementById("delinput");
let tdDel = document.getElementById("idNumber");
function todo(){
    outP1.innerHTML = inputName.value;
    outP2.innerHTML = inputAge.value;
    outP3.innerHTML = times.value;
    localStorage.setItem("market", JSON.stringify(todo));
}
submitbtn.addEventListener("click", todo);

let bodyTD = document.getElementById("bodyTd");
let delStuddent = document.getElementById("delate");

delStuddent.addEventListener('click', () =>{
    inputName.forEach(input => input.value = '');

});

