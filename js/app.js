
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
    Host : "https://camggtu4.github.io/OverZ/",
    Username : "camGgtu",
    Password : "D5514CBBE39A4A0B29E1011345353BBDA30F",
    To : 'botoverz1@gmail.com',
    From : "camille.loisy@outlook.com",
    Subject : "This is the subject",
    Body : "And this is the body"
}).then(
  message => alert(message)
);
}
