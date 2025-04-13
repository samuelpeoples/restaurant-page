import "./style.css";
import generateMain from "./main-content";
import generateMenu from "./menu-content";
import generateContact from "./contact-content";

function generate(){
	const contentWrapper = document.getElementById("content");
	contentWrapper.innerHTML = "";
	const homeButton = document.getElementById("nav-home-button");
	
	generateMenu();
}

generate();