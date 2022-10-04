const textInput = document.querySelector("#validation-input");

const length = textInput.dataset.length;

textInput.addEventListener("blur", onInputBlur);

function onInputBlur(event) {
  
  textInput.className = "";
  console.log(typeof length, typeof event.currentTarget.value.length);
  if (event.currentTarget.value.length === parseInt(length)) {
    textInput.classList.add("valid");
  } else {
    textInput.classList.add("invalid");
  }
}
