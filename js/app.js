
const form = document.querySelector(".add-to-cart")
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

function sendMsg(){	
Email.send({
    Host : "smtp.elasticemail.com",
    Username : "camGgtu",
    Password : "0e8518d9-8032-4b34-8495-950e0e98c9d8",
    To : 'botoverz1@gmail.com',
    From : "you@isp.com",
    Subject : "This is the subject",
    Body : "And this is the body"
}).then(
  message => alert(message)
);
}
