const loginForm = document.getElementById("loginForm");

if(loginForm){
loginForm.addEventListener("submit", function(e){
e.preventDefault();

alert("Welcome back!");

});
}