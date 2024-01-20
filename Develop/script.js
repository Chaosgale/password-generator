
let generateBtn = document.querySelector("#generate");

function generatePassword() {
  let lengthPass = prompt("Choose a length of at least 8 characters and no more than 128 characters")

  let pass = '';
  let str = '';

  if (lengthPass < 8 || lengthPass > 128 || isNaN(lengthPass)) {
    alert("Enter a valid lenght between 8 characters and no more than 128 characters");
    return;
  } else {
    let chosenLength = parseInt(lengthPass);
  
    let lowerPass = confirm('Do you want to include lowercase?')
    if (lowerPass === true) {
      let LP = 'abcdefghijklmnopqrstuvwxyz';
      str += LP;
    }

    let upperPass = confirm('Do you want to include uppercase?')
    if(upperPass === true) {
      let UP = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      str += UP;
    }

    let numPass = confirm('Do you want to include numbers?')
    if(numPass === true) {
      let NP = '0123456789';
      str += NP;
    }

    let specialPass = confirm('Do you want to include special characters?')
    if(specialPass === true) {
      let SP = "!#$%&()*+,-./:;<=>?@[\]^_`{|}~";
      str += SP;
    }

    if (!lowerPass && !upperPass && !numPass && !specialPass) {
      alert("Enter at least one of the options");
      return;
    }

    for (let i = 1; i <= chosenLength; i++) {
      let char = Math.floor(Math.random() * str.length + 1);

      pass += str.charAt(char);
    }

    alert("Generated Password: " + pass);
  }
}

generateBtn.addEventListener("click", generatePassword);


