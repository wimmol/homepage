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
    function showMen() {
        let game = document.getElementById('game');
        let manNum = Math.floor(game.offsetWidth / 30) * Math.floor(game.offsetHeight / 30);
        for (let i = 0; i < manNum; i++) {
            game.append(createElement({tagName: 'img', className: 'man'}));
        }
        let men = document.getElementsByClassName('man');
        for (let i = 0; i < men.length; i++) {
            men[i].setAttribute('src', `assets/images/0${Math.floor(Math.random() * 21 + 1)}.png`);
        }
        let resume = document.getElementsByTagName('article')[0];
        resume.style.visibility = 'hidden';
        return men;
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