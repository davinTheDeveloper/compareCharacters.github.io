var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

let numberList = ['1','2','3','4','5','6','7','8','9','10'];


function generateRandomElements() {

    let randomLetter = Math.floor(Math.random() * (alphabet.length));
    document.getElementById('letterDisplay').innerHTML = alphabet[randomLetter];

    let randomNumber = Math.floor(Math.random() * (numberList.length));
    document.getElementById('numberDisplay').innerHTML = numberList[randomNumber];

}

function matchUserCharacters() {
    let computerLetter = (document.getElementById('letterDisplay').innerHTML);
    let userLetter = document.getElementById('userInput').value;
    let computerNumber = document.getElementById('numberDisplay').innerHTML;
    let userInputTwo = document.getElementById('userNumber').value;

    if (userLetter === computerLetter && userInputTwo === computerNumber){
        alert("Correct!");
    } else {
    alert("Try again");
}
}

function clearInputs() {
    document.getElementById('userInput').value = '';
    document.getElementById('userNumber').value = '';
}


