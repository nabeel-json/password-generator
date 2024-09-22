const rangeInput = document.getElementById("myRange");
const rangeValue = document.getElementById("rangeValue");
const passwordAppear = document.getElementById("password-appear");
const btn = document.getElementById("generate-button");

rangeInput.addEventListener("input", function () {
  rangeValue.textContent = rangeInput.value;
});

const uppercaseAlphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercaseAlphabets = "abcdefghijklmnopqrstuvwxyz";
const symbols = "!@#$%^&*()_+[]{}|;:,.<>?-`!";

// Shuffle function
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

btn.addEventListener("click", () => {
  const password = [];
  const totalLength = parseInt(rangeInput.value, 10);

  for (let i = 0; i < totalLength; i++) {
    const randomType = Math.floor(Math.random() * 3);
    if (randomType === 0) {
      password.push(
        uppercaseAlphabets.charAt(
          Math.floor(Math.random() * uppercaseAlphabets.length)
        )
      );
    } else if (randomType === 1) {
      password.push(
        lowercaseAlphabets.charAt(
          Math.floor(Math.random() * lowercaseAlphabets.length)
        )
      );
    } else {
      password.push(symbols.charAt(Math.floor(Math.random() * symbols.length)));
    }
  }

  const shuffledPassword = shuffleArray(password).join("");
  passwordAppear.textContent = shuffledPassword;
});

// Copy password to clipboard
const copyButton = document.getElementById("copy-button");
copyButton.addEventListener("click", () => {
  const passwordText = passwordAppear.textContent;
  navigator.clipboard
    .writeText(passwordText)
    .then(() => {
      // Change button text to "Copied!" and color
      copyButton.textContent = "Copied!";
      setTimeout(() => {
        copyButton.textContent = "Copy"; // Reset to original text after 2 seconds
      }, 2000);
    })
    .catch((err) => {
      console.error("Failed to copy: ", err);
    });
});
