
const form = document.querySelector("add-to-cart")
const minerais = document.querySelector(".minerais");
const menu = document.querySelector(".menu");
const backBtn = document.querySelector(".go-back")
// const outils = document.querySelector(".minerais");
// const minerais = document.querySelector(".minerais");

function accueil() {
	minerais.classList.add("hide");
	menu.classList.remove("hide");
	backBtn.classList.add("hide");
}

function mineraisBox() {
	minerais.classList.remove("hide");
	menu.classList.add("hide");
	backBtn.classList.remove("hide");

}

function goBack() {
	minerais.classList.add("hide");
	menu.classList.remove("hide");
	backBtn.classList.add("hide")
}

function sendMsg(e){
	e.preventDefault();
	
	Email.send({
    SecureToken : "0e8518d9-8032-4b34-8495-950e0e98c9d8",
    To : 'botoverz@gmail.com',
    From : "you@isp.com",
    Subject : "This is the subject",
    Body : "And this is the body"
}).then(
  message => alert(message)
);
}

form.addEventListener('submit', SendMsg);

