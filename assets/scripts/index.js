let avaCounter = 0;

setTimeout(()=>{
    let ava = document.getElementById('p-ava')
    ava.addEventListener('click', avaOnClick);
}, 2000);

function avaOnClick() {
    avaCounter++;
    setTimeout(()=>avaCounter--, 2000);
    if (avaCounter > 5) {
        startGame();
    }
}
function createElement({ tagName, className, attributes = {} }) {
    const element = document.createElement(tagName);


    if (className) {
        const classNames = className.split(' ').filter(Boolean);
        element.classList.add(...classNames);
    }
    Object.keys(attributes).forEach((key) => element.setAttribute(key, attributes[key]));
    return element;
}