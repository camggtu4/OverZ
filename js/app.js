const cart = document.querySelector('.cart');
const BuyBtn = document.querySelector(".add-to-cart")
const minerais = document.querySelector(".minerais");
const menu = document.querySelector(".menu");
const shopTitle = document.querySelector(".shop-title");
const backBtn = document.querySelector(".go-back");
const palaIngot = document.querySelector('.cart-paladium');
const titaneIngot = document.querySelector('.cart-titane');
const titaneOre = document.querySelector('.cart-titane-ore');
const palaOre = document.querySelector('.cart-paladium-ore');
const amethystOre = document.querySelector('.cart-amethyst-ore');
const amethystIngot = document.querySelector('.cart-amethyst-ingot');
const paladiumIngotQuantity = document.querySelector('#paladium-ingot-quantity');
const paladiumOreQuantity = document.querySelector('#paladium-ore-quantity');
const titaneOreQuantity = document.querySelector('#paladium-ore-quantity');
const titaneIngotQuantity = document.querySelector('#titane-ingot-quantity');
const amethystIngotQuantity = document.querySelector('#amethyst-ingot-quantity');
const amethystOreQuantity = document.querySelector('#amethyst-ore-quantity');
// const outils = document.querySelector(".minerais");
// const minerais = document.querySelector(".minerais");
titaneIngotQuantity
function accueil() {
	minerais.classList.add("hide");
	menu.classList.remove("hide");
	shopTitle.classList.remove("hide");
	backBtn.classList.add("hide");
	cart.classList.add("hide");
}

function mineraisBox() {
	minerais.classList.remove("hide");
	menu.classList.add("hide");
	backBtn.classList.remove("hide");
	cart.classList.add("hide");
	shopTitle.classList.remove("hide");

}

function goBack() {
	minerais.classList.add("hide");
	menu.classList.remove("hide");
	backBtn.classList.add("hide");
	cart.classList.add("hide");
	shopTitle.classList.remove("hide");
}
function OpenCart() {
	minerais.classList.add("hide");
	menu.classList.add("hide");
	backBtn.classList.add("hide");
	cart.classList.remove("hide");
	shopTitle.classList.add("hide");
}
function AddPalaIngot() {
 	palaIngot.classList.remove("hide");
 	alert("Lingot de paladium correctement ajouté au panier");
 }
function RemovePalaIngot() {
	palaIngot.classList.add("hide");
}

function AddTitaneIngot() {
 	titaneIngot.classList.remove("hide");
 	alert("Lingot de titane correctement ajouté au panier");
 }
function RemoveTitaneIngot() {
	titaneIngot.classList.add("hide");
}

function AddPalaOre() {
 	palaOre.classList.remove("hide");
 	alert("Paladium Ore correctement ajouté au panier");
 }
function RemovePalaOre() {
	palaOre.classList.add("hide");
}

function AddTitaneOre() {
 	titaneOre.classList.remove("hide");
 	alert("Titane Ore correctement ajouté au panier");
 }
function RemoveTitaneOre() {
	titaneOre.classList.add("hide");
}

function AddAmethystOre() {
 	amethystOre.classList.remove("hide");
 	alert("Amethyst Ore correctement ajouté au panier");
 }
function RemoveTitaneOre() {
	amethystOre.classList.add("hide");
}

function AddAmethystIngot() {
 	amethystIngot.classList.remove("hide");
 	alert("Amethyst Ingot correctement ajouté au panier");
 }
function RemoveTitaneOre() {
	amethystIngot.classList.add("hide");
}
const palaOreX = paladiumOreQuantity.value;
 



// const mailBody ="Voici la commande de l'utilisateur : " + "<br>" +
// "Paladium ingot :" + parseInt(paladiumIngotQuantity.value) + "<br>" + 
// "Paladium Ore :" + paladiumOreQuantity.value;

function sendMsg(){		
Email.send({
    Host : "smtp.elasticemail.com",
    Username : "botoverz1@gmail.com",
    Password : "D5514CBBE39A4A0B29E1011345353BBDA30F",
    To : 'botoverz1@gmail.com',
    From : "camille.loisy@outlook.com",
    Subject : "Nouvelle commande !!",
    Body :"Paladium Ingot : " + parseInt(paladiumIngotQuantity.value) + "<br>" + 
    	  "Paladium Ore : " +  parseInt(paladiumOreQuantity.value) + "<br>" +
    	  "Titane Ingot : " + parseInt(titaneIngotQuantity.value) + "<br>" + 
    	  "Titane Ore : " + parseInt(titaneOreQuantity.value) + "<br>" + 
    	  "Amethyst Ingot : " + parseInt(amethystIngotQuantity.value) + "<br>" + 
    	  "Amethyst Ore : " + parseInt(amethystOreQuantity.value)
}).then(message => alert(message));
}


//  const TypeMinerais = document.querySelectorAll("button");

//  TypeMinerais.forEach(TypeMinerais => {
// 	TypeMinerais.addEventListener("click", choisirMinerais);
//  });

//  function choisirMinerais() {
//  	this.dataset.choisi = this.dataset.choisi == "true" ? "false" : "true";
// }
// if(document.querySelectorAll("button[data-choisi == "true"]")) {
// 	this.classList.remove("hide")
// }
