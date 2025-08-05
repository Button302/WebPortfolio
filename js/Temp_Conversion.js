const textBox =document.getElementById('Temp_Conversion_Text_Box');
const toFahrenheit =document.getElementById('Temp_Conversion_To_Fahrenheit');
const toCelsius =document.getElementById('Temp_Conversion_To_Celsius');
const result =document.getElementById('Temp_Conversion_Result');
let Temp;


function Convert(){

    if(toFahrenheit.checked){
        Temp = Number(textBox.value);
        Temp = Temp * 9/5 + 32;
        result.textContent = Temp +'°F';

    }
    else if(toCelsius.checked){
        Temp = Number(textBox.value);
        Temp = (Temp - 32) * 5/9;
        result.textContent = Temp +'°C';
    }
    else{
        result.textContent = 'Please select a conversion option.';
    }

}