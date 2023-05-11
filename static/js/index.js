let formRegistrazione = document.querySelector(".registrationForm");

let persona = {
	nome: "",
	cognome: "",
};

try {
	formRegistrazione.addEventListener("submit", function (e) {
		e.preventDefault();

		let nome = document.querySelector(".forNome").value;
		let cognome = document.querySelector(".forCognome").value;

		persona.nome = nome;
		persona.cognome = cognome;

		setTimeout("pageRedirect()", 2500);
		console.log(persona.nome);
		console.log(persona.cognome);
	});
} catch {
	console.log("form non in questa pagina");
}

function pageRedirect() {
	window.location.replace("domanda.html");
}

let piatti = [
	{
		nome: "Parmigiana di melenzane",
		foto: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fricette.giallozafferano.it%2FParmigiana-di-melanzane.html&psig=AOvVaw0KfbbONFYZTOIfKfg4yYfv&ust=1683917314265000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCOjvkov37f4CFQAAAAAdAAAAABADF",
		descrizione: "Sei una parmigiana",
		valore: 50,
	},
	{
		nome: "Popizze",
		foto: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pugliainesclusiva.it%2Fpopizze-baresi-pettole-pugliesi%2F&psig=AOvVaw3yUH8NdARXewqL-lukf2pR&ust=1683917381411000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCLC1rKL37f4CFQAAAAAdAAAAABAD",
		descrizione: "Sei una bella popizza",
		valore: 30,
	},
	{
		nome: "Sgagliozze",
		foto: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fblog.giallozafferano.it%2Ffablesucre%2Fsgagliozze%2F&psig=AOvVaw1dqcFqO4OUvWzzHKAsfKv2&ust=1683917408750000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCNj536337f4CFQAAAAAdAAAAABAD",
		descrizione: "Sei proprio una sgagliozza",
		valore: 20,
	},
];

let questions = [
	{
		question: "Che colore ti piace?",
		answers: [
			{
				text: "Rosso",
				value: 10,
			},
			{
				text: "Blu",
				value: 0,
			},
			{
				text: "Giallo",
				value: -10,
			},
		],
	},
	{
		question: "Che ne pensi delle cozze?",
		answers: [
			{
				text: "Meglio cotte",
				value: -10,
			},
			{
				text: "Troppo cozzale",
				value: 5,
			},
			{
				text: "La colazione del campione",
				value: 20,
			},
		],
	},
];

//function showQuestions() {}
