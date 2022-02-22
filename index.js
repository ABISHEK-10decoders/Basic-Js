let Apple = 10
if (Apple === 5) {
    console.log("Yes Apple was 5")
}
else if (Apple !== 5) {
    console.log("No Apple was 5")
};
function multiply (num1,num2){
    let result = (num1 + num2);
    return console.log(result);
}
multiply(12,50)

// let myButton = document.querySelector('button');
// let myHeading = document.querySelector('h1');
// function setUserName() {
//     let myName = prompt('Please enter your name.');
//     localStorage.setItem('name', myName);
//     myHeading.textContent = 'This is your name, ' + myName;
//   }
//   if(!localStorage.getItem('name')) {
//     setUserName();
//   } else {
//     let storedName = localStorage.getItem('name');
//     myHeading.textContent = 'Mozilla is cool, ' + storedName;
//   }
//   myButton.onclick = function() {
//     setUserName();
//   }
//   let Buuton = document.querySelector("button");
//   let heading = document.querySelector('h1');
//   function Nameset (){
//       let Namemy = prompt('Enter ypur name.');
//       localStorage.setItem('name', Namemy.value);
//       heading.textContent='This is my Name'+ Namemy.value;
//   }
//   if(!localStorage.getItem('name')){
//       Nameset();
//   }else{
//       let storedName= localStorage.getItem('name');
//       heading.textContent = 'Other Name'+ storedName;
//   }
//   Buuton.onclick = function(){
//       Nameset();
//   }
     
function FormValidation(){
    const Name = document.form.name.value;
    const Email = document.form.email.value;
    const Phone = document.form.phone.value;
    const Address = document.form.address.value;
    const password = document.form.password.value;
    if (Name === "") {
        alert("Please enter your name");
        Name.focus();
        console.log(Name);
        return false
    }
    if (Email === ""){
        alert("Please enter your email");
        Email.focus();
        return false;
    }
    if(Phone === ""){
        window.alert("Please enter your phone number");
        Phone.focus();
        return false;
    }
    if(Address === ""){
        window.alert("Please enter your address");
        Address.focus();
        return false;
    }
    if (password === ""){
        window.alert("Please enter your password");
        password.focus();
        return false;
    }
    return true;
}
// const Button = document.getElementById("submit");
// const cancel = document.getElementById("cancel");
    
