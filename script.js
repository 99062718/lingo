const pogingen = document.getElementById("pogingen");
var buttons = [];
var text = [];
var poging = 0;
var chosenRandomWord = randomWord();
var chosenRandomWordSplit = chosenRandomWord.split("");

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
	var randomNumber = Math.ceil(Math.random() * 7)
	switch(randomNumber){
		case 1:
			return "gebak";
			break;
		case 2:
			return "taart";
			break;
		case 3:
			return "vader";
			break;
		case 4:
			return "ouder";
			break;
		case 5:
			return "tenen";
			break;
		case 6:
			return "frans";
			break;
		case 7:
			return "duits";
			break;
	}
}

function wordCheck(){
	if(poging != 4){
		var guessedWord = document.getElementById("input").value.split("");
		for(i = 0; i < buttons[poging].length; i++){
			document.getElementById("Text" + i + "Row" + poging).innerHTML = guessedWord[i];
			var yellowBoxChecker = chosenRandomWordSplit.indexOf(guessedWord[i]);
			if(guessedWord[i] == chosenRandomWord[i]){
				document.getElementById("Button" + i + "Row" + poging).style.backgroundColor = "green";
				for(a = poging; a < buttons.length; a++){
					document.getElementById("Text" + i + "Row" + a).innerHTML = guessedWord[i];
					document.getElementById("Button" + i + "Row" + a).style.backgroundColor = "green";
				}
			}else if(guessedWord[i] == chosenRandomWord[yellowBoxChecker]){
				document.getElementById("Button" + i + "Row" + poging).style.backgroundColor = "yellow";

			}else{
				document.getElementById("Button" + i + "Row" + poging).style.backgroundColor = "red";
			}
		}
	}else{
		alert("U heeft geen pogingen meer over!");
		document.location.reload(true);
	}
	poging++;
}

buttonCreate(5, 5);