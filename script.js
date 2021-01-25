const pogingen = document.getElementById("pogingen");
var buttons = [];
var text = [];
var poging = 0;
var chosenRandomWord = randomWord();
chosenRandomWord = chosenRandomWord.split;

function buttonCreate(amountPogingen, amountButtons){
	for(a = 0; a < amountPogingen; a++){
		for(i = 0; i < amountButtons; i++){
			buttons[a] = [];
			buttons[a][i] = document.createElement("BUTTON");
			buttons[a][i].id = "Button" + i + "Row" + a;
			document.getElementById("buttonContainer").appendChild(buttons[a][i]);
			text[a] = [];
			text[a][i] = document.createElement("P");
			text[a][i].id = "Text" + i + "Row" + a;
			document.getElementById("Button" + i + "Row" + a).appendChild(text[a][i]);
			document.getElementById("Text" + i + "Row" + a).innerHTML = "O";
		}
	}
}

function randomWord(){
	var randomNumber = Math.ceil(Math.random())
	switch(randomNumber){
		case 1:
			return "taart";
			break;
	}
}

function wordCheck(poging){
	var guessedWord = document.getElementById("input").value.split;
	for(i = 0; i < buttons[poging].length; i++){
		document.getElementById("Text" + i + "Row" + poging).innerHTML = guessedWord[i];
		if(guessedWord[i] == chosenRandomWord[i]){
			document.getElementById("Button" + i + "Row" + poging).style.backgroundColor = "green";
			for(a = poging; a < buttons.length; a++){
				document.getElementById("Text" + i + "Row" + a).innerHTML = guessedWord[i];
				document.getElementById("Button" + i + "Row" + a).style.backgroundColor = "green";
			}
		}else if(guessedWord[i] == 18){

		}else{
			document.getElementById("Button" + i + "Row" + poging).style.backgroundColor = "red";
		}
	}
	poging++;
}

buttonCreate(5, 5);