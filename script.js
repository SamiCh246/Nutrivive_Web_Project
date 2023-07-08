// TODO: Remove the click event listener that calls addSignature()
signNowButton.removeEventListener('click', addSignature);

// TODO: Complete validation form

function validateForm(event) {
  event.preventDefault(); // Prevent the default form submission behavior
  let containsErrors = false;
  const petitionInputs = document.querySelectorAll('.petition-input');

  for (let i = 0; i < petitionInputs.length; i++) {
    if (petitionInputs[i].value.length < 2) {
      containsErrors = true;
      petitionInputs[i].classList.add('error');
    } else {
      petitionInputs[i].classList.remove('error');
    }
  }

  if (!containsErrors) {
    addSignature(event);
    for (let i = 0; i < petitionInputs.length; i++) {
      petitionInputs[i].value = "";
    }
  }
}
