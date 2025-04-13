import "./style.css";
import generateMain from "./main-content";
import generateMenu from "./menu-content";
import generateContact from "./contact-content";

function generate(){
	const contentWrapper = document.getElementById("content");
	contentWrapper.innerHTML = "";
	const homeButton = document.getElementById("nav-home-button");
	homeButton.addEventListener('click', generateMain);
	const menuButton = document.getElementById("nav-menu-button");
	menuButton.addEventListener('click', generateMenu);
	const contactButton = document.getElementById("nav-contact-button");
	contactButton.addEventListener('click', generateContact);
}

generate();
generateMain();