$(document).ready(function(){

});
/* Main */
function findPosition(obj) {
    var navPosition = 37;
	if(window.innerWidth>=1000){
		navPosition = 0;
	}
    var currentTopPosition = 0 - navPosition;
    if (obj.offsetParent) {
        do {
            currentTopPosition += obj.offsetTop;
        } while (obj = obj.offsetParent);
    return [currentTopPosition];
    }
}

function scrollToContent(content){

	switch(content){ 
		case "pageSobreMi":
			window.scroll(0,findPosition(document.getElementById(content)));
			break;
		case "pageProyectos":
			window.scroll(0,findPosition(document.getElementById(content)));
			break;
		case "footer":
			window.scroll(0,findPosition(document.getElementById(content)));
			break;
		default:
			window.location.reload(true);
	}
}

/* NavBar */
function styleNavResponsive(){

	if(window.innerWidth<=700){ //Mobile
		
		for (var i =0; i < document.querySelectorAll(".navbar-icons").length; i++) {
        	document.querySelectorAll(".navbar-icons")[i].classList.add("c-white");

    	}
		for (var i =0; i < document.querySelectorAll(".navbar-addon").length; i++) {
        	document.querySelectorAll(".navbar-addon")[i].classList.add("bg-black");

    	}
	}
	if(window.innerWidth>700){ //Tablet
		
		for (var i =0; i < document.querySelectorAll(".navbar-icons").length; i++) {
        	document.querySelectorAll(".navbar-icons")[i].classList.remove("c-white");

    	}
		for (var i =0; i < document.querySelectorAll(".navbar-addon").length; i++) {
        	document.querySelectorAll(".navbar-addon")[i].classList.remove("bg-black");

    	}
	}
}

styleNavResponsive();
var mql = window.matchMedia("screen and (max-width: 700px)");
mql.addListener(styleNavResponsive);

/* Footer */
function copiarAlPortapapeles(id_elemento) {
	var aux = document.createElement("input");
	aux.setAttribute("value", document.getElementById(id_elemento).innerHTML);
	document.body.appendChild(aux);
	aux.select();
	document.execCommand("copy");
	document.body.removeChild(aux);
}

function toastCopied() {
	var message = document.getElementById('toastCopied');
	copiarAlPortapapeles('emailToCopy');
	message.style.display = "inline";
    setTimeout(function(){	message.style.visibility = "hidden";  }, 4000);
}

