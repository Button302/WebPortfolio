const minNum = 1;
const maxNum = 100;

document.getElementById("Number_Guess_start_btn").onclick = function() {
    let randomNum = Math.floor(Math.random() * (maxNum - minNum + 1));
    document.getElementById("number_guess_btn").onclick = function() {
        let guess = document.getElementById("number_guess_input").value;
        if (guess == randomNum) {
           document.getElementById("number_guess_p").textContent = "Congratulations! You guessed the correct number. Press the start button to play again.";
        }
        else if (guess < randomNum) {
            document.getElementById("number_guess_p").textContent = "Too low. Try again.";
        }
        else{
            document.getElementById("number_guess_p").textContent = "Too high. Try again.";
        }
    }
}