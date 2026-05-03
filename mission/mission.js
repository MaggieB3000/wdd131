let selectElem = document.querySelector('#theme-select');
let pageContent = document.querySelector('body');
let collegeName = document.querySelector("#college-name");

selectElem.addEventListener('change', changeTheme);

function changeTheme() {
    let current = selectElem.value;
    if (current === 'dark-mode') {
        const image = document.querySelector('img');
        image.setAttribute('src', 'byui-logo-white.png');

        document.body.style.backgroundColor = "#242424";

        pageContent.style.color = "white";
        pageContent.style.borderColor = "white";

        collegeName.style.color = "#93d4ff";
    }
    else {
        const image = document.querySelector('img');
        image.setAttribute('src', 'image.png');

        document.body.style.backgroundColor = "white";

        pageContent.style.color = "black";
        pageContent.style.borderColor = "black";
        
        collegeName.style.color = "#1f75ae";
    }
}