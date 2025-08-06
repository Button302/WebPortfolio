const TextArea = document.getElementById('Decode_Binary_Text_Box');
const TextToResult = document.getElementById('Decode_Binary_Result');
const Binary_To_Text = document.getElementById('Decode_Binary_B_To_T');
const Text_To_Binary = document.getElementById('Decode_Binary_T_To_B');



function convertToBinary(input) {
  if (!isNaN(input) && input.trim() !== '') {
    return numberToBinary(input);
  } else {
    return textToBinary(input);
  }
}

function numberToBinary(numStr) {
  const num = parseInt(numStr, 10);
  return num.toString(2);
}

function textToBinary(text) {
  let binaryResult = [];

  for (let i = 0; i < text.length; i++) {
    const charCode = text.charCodeAt(i);

    let binaryChar = charCode.toString(2).padStart(8, '0');

    binaryResult.push(binaryChar);
  }

  return binaryResult.join(' ');
}

function binaryToText(binaryString) {
    binaryString = String(binaryString);
    const binaryChunks = binaryString.trim().split(' ');

    let textResult = '';
    for (let chunk of binaryChunks) {
        const charCode = parseInt(chunk, 2);
        textResult += String.fromCharCode(charCode);
    }
    return textResult;
}


function Convert() {
    try {
        if (Binary_To_Text.checked) {
            if (!/^[01 ]+$/.test(TextArea.value)) {
                throw new Error("Invalid binary format");
            }

            TextToResult.textContent = binaryToText(TextArea.value);
        } 
        else if (Text_To_Binary.checked) {
            TextToResult.textContent = textToBinary(TextArea.value);
        }
    } 
    catch (error) {
        TextToResult.textContent = "Error: " + error.message;
    }
}
