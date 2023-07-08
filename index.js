let themeButton = document.getElementById("theme-button");

let animation = {
  revealDistance: 150,
  initialOpacity: 0,
  transitionDelay: 0,
  transitionDuration: '2s',
  transitionProperty: 'all',
  transitionTimingFunction: 'ease'
};

let revealableContainers = document.querySelectorAll('.revealable');

function reveal() {
  for (let i = 0; i < revealableContainers.length; i++) {
    let windowHeight = window.innerHeight;
    let topOfRevealableContainer = revealableContainers[i].getBoundingClientRect().top;

    if (topOfRevealableContainer < windowHeight - animation.revealDistance) {
      revealableContainers[i].classList.add('active');
    } else {
      revealableContainers[i].classList.remove('active');
    }
  }
}

window.addEventListener('scroll', reveal);


const toggleDarkMode = () => {
  document.body.classList.toggle("dark-mode");
};

themeButton.addEventListener("click", toggleDarkMode);

const addSignature = (event) => {
  event.preventDefault(); 
  
  const nameInput = document.querySelector('#name-input');
  const hometownInput = document.querySelector('#hometown-input');

  const signaturesSection = document.querySelector('#signatures');

  const newSignature = document.createElement('p');

  newSignature.textContent = `${nameInput.value}, ${hometownInput.value}`;

  signaturesSection.appendChild(newSignature);

  nameInput.value = "";
  hometownInput.value = "";
};

const signNowButton = document.querySelector('#sign-now-button');
signNowButton.addEventListener('click', addSignature);

