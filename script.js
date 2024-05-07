const checkButtonElement = document.getElementById("check-btn");
const textInputElement = document.getElementById("text-input");
const resultElement = document.getElementById("result");

const palindromeCheck = () => {
  const textInput = textInputElement.value;
  const correctedInput = textInput.toLowerCase().replace(/[\W_]/g, '');
  

  if (textInput=="") {
    alert("Please input a value");
    return;
  } else {
    const reversedInput = correctedInput.split("").reverse().join("");
    
    if (correctedInput===reversedInput) {
      resultElement.textContent = `${textInput} is a palindrome`;
    } else {
      resultElement.textContent = `${textInput} is not a palindrome`;
    }
  }





};

checkButtonElement.addEventListener("click",palindromeCheck);

