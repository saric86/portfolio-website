let skillText = document.getElementById('skills');
let experienceText = document.getElementById('experience');
let educationText = document.getElementById('education');

let plusOne = document.getElementById('plus1');
let plusTwo = document.getElementById('plus2');
let plusThree = document.getElementById('plus3');

let rowOne = document.getElementById('row1');
let rowTwo = document.getElementById('row2');
let rowThree = document.getElementById('row3');

function showSkills () {
        if (plusOne.innerHTML === '+') {
        plusOne.innerHTML = '-';
        skillText.style.display = 'block';
    } else if (plusOne.innerHTML === '-') {
        plusOne.innerHTML = '+';
        skillText.style.display = 'none';
    } 
}
  
rowOne.addEventListener('click', showSkills);

function showExperience () {
    if (plusTwo.innerHTML === '+') {
    plusTwo.innerHTML = '-';
    experienceText.style.display = 'block';
    } else if (plusTwo.innerHTML === '-') {
    plusTwo.innerHTML = '+';
    experienceText.style.display = 'none';
    } 
}

rowTwo.addEventListener('click', showExperience);

function showEducation () {
    if (plusThree.innerHTML === '+') {
    plusThree.innerHTML = '-';
    educationText.style.display = 'block';
    educationText.style.borderBottom = '1px grey solid';
    rowThree.style.borderBottom = '0px grey solid';

    } else if (plusThree.innerHTML === '-') {
    plusThree.innerHTML = '+';
    educationText.style.display = 'none';
    rowThree.style.borderBottom = '1px grey solid';
    } 
}

rowThree.addEventListener('click', showEducation);


// Toggles mobile menu, opens menu when user clicks on the hamburger
// Closes when user click on one of the links

function toggleMenu() {
    const menu = document.getElementById('mobileMenu');
    menu.classList.toggle('show');
}

// Changes logo on mobile view to white or black depending on the screen size

function updateLogo() {
    const logoImage = document.querySelector('.logo img');
    
    if (window.innerWidth <= 660) {
        logoImage.src = './resources/logo-white-transparent.png';
    } else {
        logoImage.src = './resources/logo-black-transparent.png';
    }
}

// Updates logo when the page loads initially
updateLogo();

// Listen for window resize and update the logo. resize is the event listener, updateLogo is the executed function
window.addEventListener('resize', updateLogo);