var buttons = [];
var text = [];
var poging = 0;
var randomNumber = Math.ceil(Math.random() * words.length);
var chosenWordSplit = words[randomNumber].split("");

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

function wordCheck(){
	if(poging != 4){
		var guessedWord = document.getElementById("input").value.split("");
		for(i = 0; i < buttons[poging].length; i++){
			document.getElementById("Text" + i + "Row" + poging).innerHTML = guessedWord[i];
			var yellowBoxChecker = chosenWordSplit.indexOf(guessedWord[i]);
			if(guessedWord[i] == chosenWordSplit[i]){
				document.getElementById("Button" + i + "Row" + poging).style.backgroundColor = "green";
				for(a = poging; a < buttons.length; a++){
					document.getElementById("Text" + i + "Row" + a).innerHTML = guessedWord[i];
					document.getElementById("Button" + i + "Row" + a).style.backgroundColor = "green";
				}
			}else if(guessedWord[i] == chosenWordSplit[yellowBoxChecker]){
				for(a = 0; a < i + 1; a++){
					if(guessedWord[i] == guessedWord[a]){
						document.getElementById("Button" + i + "Row" + poging).style.backgroundColor = "red";
					}else{
						document.getElementById("Button" + i + "Row" + poging).style.backgroundColor = "yellow";
					}
				}
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
document.getElementById("Text0Row0").innerHTML = chosenWordSplit[0];
console.log(words[randomNumber]);