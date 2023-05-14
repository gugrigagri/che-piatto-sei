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
	{
		question: "Qual è il tuo genere musicale preferito?",
		answers: [
			{
				text: "Pop",
				value: -10,
			},
			{
				text: "Rock",
				value: 5,
			},
			{
				text: "Rap",
				value: 20,
			},
		],
	},
	{
		question: "Qual è la tua attività preferita da fare all'aperto?",
		answers: [
			{
				text: "Camminata",
				value: -10,
			},
			{
				text: "Corsa",
				value: 5,
			},
			{
				text: "Ciclismo",
				value: 20,
			},
		],
	},
	{
		question: "Cosa ti rende più felice?",
		answers: [
			{
				text: "Spade laser",
				value: -10,
			},
			{
				text: "Lego",
				value: 5,
			},
			{
				text: "Il grande fratello",
				value: 20,
			},
		],
	},
];

let questionSpan = document.querySelector(".question");
let answer1 = document.querySelector(".answer-1");
let answer2 = document.querySelector(".answer-2");
let answer3 = document.querySelector(".answer-3");
let cambiaDomanda = document.querySelector(".button-74");

/*
nella funzione showQuestions:

    - generare casualmente un numero casuale in base alla lunghezza dell'array, per scelgliere una domanda casuale
    - a questo punto scrivere la domanda e le 3 risposte
    - eliminare l'oggetto dall'array
    - ripetere la sequenza
*/

function showQuestions(arrayQuestions) {
	questionSpan.innerHTML = arrayQuestions[0].question;
	answer1.innerHTML = arrayQuestions[0].answers[0].text;
	answer2.innerHTML = arrayQuestions[0].answers[1].text;
	answer3.innerHTML = arrayQuestions[0].answers[2].text;

	arrayQuestions.shift();

	//devi anche registrare nella variabile punteggio, il punteggio della singola domanda che sei andato a cliccare
}

cambiaDomanda.addEventListener("click", function (e) {
	e.preventDefault();

	if (questions.length === 0) {
		cambiaDomanda.remove();
	} else {
		showQuestions(questions);
	}
});
