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

let infCount = 1;
function startGame() {
    let men = showMen();
    let menMask = new Array(men.length);

    let dayTime = 1000;
    let deathCounter = 0;
    let infCoef = 0.2;
    let startInfCount = 10;

    for (let i = 0; i < startInfCount; i++){
        getSickRandMan();
    }
    infCount--;

    function getSickRandMan() {
        if(infCount === 0) {
            alert('The infection has been stopped');
        } else {
            let randomIndex = Math.floor(Math.random() * men.length);
            let j = 0;
            while (menMask[randomIndex] && j < men.length) {
                if (randomIndex === men.length)
                    randomIndex = -1;
                randomIndex++;
                j++;
            }
            if(men[randomIndex]) {
                let deathTime = (Math.random() * 4 + 10);
                let preInfectTime = (Math.random() * 2 + 2);
                men[randomIndex].style.backgroundColor = 'red';
                menMask[randomIndex] = true;
                infCount++;
                console.log(infCount);
                men[randomIndex].addEventListener('click', () => {
                    if (men[randomIndex].style.backgroundColor === 'red') {
                        men[randomIndex].style.backgroundColor = 'white';
                        infCount--;
                        console.log(infCount);
                        if (infCount === 0) {
                            alert('The infection has been stopped\n' +
                                `We lost ${deathCounter} people`);
                        }
                    }
                }, {once: true});
                setTimeout(() => {
                    if (men[randomIndex].style.backgroundColor === 'red') {
                        men[randomIndex].style.backgroundColor = 'black';
                        infCount--;
                        console.log(infCount);
                        deathCounter++;
                        if (infCount === 0) {
                            alert('The infection has been stopped\n' +
                                `We lost ${deathCounter} people`);
                        }
                        infCoef = 0.25 * (1 - deathCounter / men.length);
                    }
                }, deathTime * dayTime);
                for (let i = 1; i <= (deathTime - preInfectTime) * infCoef; i++) {
                    setTimeout(() => {
                        if (men[randomIndex].style.backgroundColor === 'red') getSickRandMan();
                    }, (1 / infCoef * i * Math.random()) * dayTime);
                }
            }
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