let formRegistrazione = document.querySelector(".registrationForm");

let persona = {
	nome: "",
	cognome: "",
};

formRegistrazione.addEventListener("submit", function (e) {
	e.preventDefault();

	let nome = document.querySelector(".forNome").value;
	let cognome = document.querySelector(".forCognome").value;

	persona.nome = nome;
	persona.cognome = cognome;

	setTimeout("pageRedirect()", 2500);

	console.log(`nome della persona --> ${persona.nome}`);
	console.log(`cognome della persona --> ${persona.cognome}`);

	localStorage.setItem("person", JSON.stringify(persona));
	console.log(persona);
});

function pageRedirect() {
	window.location.replace("domanda.html");
}