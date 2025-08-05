function rollDice(){

    const numOfDice = document.getElementById("Dice_Roll_Input").value;
    const diceResult = document.getElementById("Dice_Roll_Dice_Result");;
    const diceImages = document.getElementById("Dice_Roll_Dice_Images");;
    const values = [];
    const Images = [];

    for(let i = 0; i < numOfDice; i++){
        const value = Math.floor(Math.random() * 6) + 1;
        values.push(value);
        Images.push(`<img src="images/Dice_Images/${value}.png" alt="Dice With Number ${value}">`);
    }

    diceResult.textContent = `Dice: ${values.join(", ")}`;
    diceImages.innerHTML = Images.join("");
}