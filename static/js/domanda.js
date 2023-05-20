let punteggio = 0;

let questions = [
	{
		question: "Al mattino:",
		answers: [
			{
				text: "Mangio molto per colazione",
				value: 10,
			},
			{
				text: "Quando capita",
				value: 0,
			},
			{
				text: "Non mangio mai",
				value: -10,
			},
		],
	},
	{
		question: "Ti piace il sugo?",
		answers: [
			{
				text: "Tanto",
				value: -10,
			},
			{
				text: "Preferisco mangiare in bianco",
				value: 5,
			},
			{
				text: "Solo se da pomodori napoletani",
				value: 20,
			},
		],
	},
	{
		question: "Cosa preferisci tra: ",
		answers: [
			{
				text: "Gioranta al mare",
				value: -10,
			},
			{
				text: "Giornata in montagna",
				value: 5,
			},
			{
				text: "Me ne sto a casa",
				value: 20,
			},
		],
	},
	{
		question: "Qual è l'attività che più preferisci",
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
				text: "divano olimpionico",
				value: 20,
			},
		],
	},
	{
		question: "Cosa ti rende più felice?",
		answers: [
			{
				text: "La parmigiana della nonna",
				value: -10,
			},
			{
				text: "Le sgagliozze a Bari vecchia",
				value: 5,
			},
			{
				text: "Le popizze del fast food",
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

	let checkedInput = document.querySelector('input[name="question-1"]:checked');

	if (checkedInput) {
		let selectedValue = parseInt(checkedInput.value);
		console.log("Selected value:", selectedValue);
		punteggio = punteggio + selectedValue;
	} else {
		console.log("No input selected");
	}

	arrayQuestions.shift();

	//devi anche registrare nella variabile punteggio, il punteggio della singola domanda che sei andato a cliccare
}

cambiaDomanda.addEventListener("click", function (e) {
	e.preventDefault();

	document.querySelector("h2").classList.remove("fuoriTitolo");
	let labels = document.querySelectorAll("label");
	labels.forEach(function (label) {
		label.classList.remove("fuori");
	});

	if (questions.length === 0) {
		cambiaDomanda.remove();
		//inserire funzione che fa apparire il pulsante di submit
		let buttonSubmit = document.querySelector('#btn')
		buttonSubmit.classList.remove('nascosto')
	} else {
		showQuestions(questions);
	}
});

let formFood = document.querySelector("form");

formFood.addEventListener("submit", function (e) {
	e.preventDefault();

	localStorage.setItem("punteggio", punteggio);
	setTimeout("pageRedirect()", 3000);
});

function pageRedirect() {
	window.location.replace("risultato.html");
}
