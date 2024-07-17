function changeHeadingColor() {
    const headingElement = document.getElementById('heading');
    headingElement.style.color = 'red';
}

function changeParagraphContent() {
    const paragraphElement = document.getElementById('paragraph');
    paragraphElement.innerHTML = 'The content has changed!';
}

function showHiddenContent() {
    const hiddenElement = document.querySelector('.hidden');
    hiddenElement.classList.remove('hidden');
}

const heading = document.getElementById('heading');
heading.addEventListener('mouseover', function () {
    this.classList.add('highlighted');
});

heading.addEventListener('mouseout', function () {
    this.classList.remove('highlighted');
});

const changeColorButton = document.getElementById('change-color');
changeColorButton.addEventListener('click', changeHeadingColor);