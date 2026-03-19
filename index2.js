const form = document.getElementById("contactForm");
const msg = document.getElementById("successMsg");

if(form){
form.addEventListener("submit", function(e){
e.preventDefault();

msg.style.display = "block";

form.reset();
});
}