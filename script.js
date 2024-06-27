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
    } else if (plusThree.innerHTML === '-') {
    plusThree.innerHTML = '+';
    educationText.style.display = 'none';
    } 
}

rowThree.addEventListener('click', showEducation);