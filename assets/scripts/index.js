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
