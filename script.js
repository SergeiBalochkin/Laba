const buttonClosedOkno1 = document.querySelector('.btnClosedOkno1')
const buttonOpenedOkno1 = document.querySelector('.btnOpenedOkno1')
const buttonClosedOkno2 = document.querySelector('.btnClosedOkno2')
const buttonOpenedOkno2 = document.querySelector('.btnOpenedOkno2')

const buttonOpenedDelete1 = document.querySelector('.btnOpenedDelete1')
const buttonClosedDelete1 = document.querySelector('.btnClosedDelete1')
const buttonOpenedDelete2 = document.querySelector('.btnOpenedDelete2')
const buttonClosedDelete2 = document.querySelector('.btnClosedDelete2')
const buttonOpenedDelete3 = document.querySelector('.btnOpenedDelete3')
const buttonClosedDelete3 = document.querySelector('.btnClosedDelete3')

const buttonClosedChange1 = document.querySelector('.btnClosedChange1')
const buttonOpenedChange1 = document.querySelector('.btnOpenedChange1')
const buttonClosedChange2 = document.querySelector('.btnClosedChange2')
const buttonOpenedChange2 = document.querySelector('.btnOpenedChange2')
const buttonClosedChange3 = document.querySelector('.btnClosedChange3')
const buttonOpenedChange3 = document.querySelector('.btnOpenedChange3')

const okno = document.querySelector('.okno')
const deleted = document.querySelector('.deleted')
const changed = document.querySelector('changed')

function closedOkno() {
    document.getElementById('okno').style.display = 'none';
}
function openedOkno() {
    document.getElementById('okno').style.display = 'block';
}
function closedDelete() {
    document.getElementById('deleted').style.display = 'none';
}
function openedDelete() {
    document.getElementById('deleted').style.display = 'block';
}
function closedChange() {
    document.getElementById('changed').style.display = 'none';
}
function openedChange() {
    document.getElementById('changed').style.display = 'block';
}

buttonClosedOkno1.addEventListener('click', closedOkno);
buttonOpenedOkno1.addEventListener('click', openedOkno);
buttonClosedOkno2.addEventListener('click', closedOkno);
buttonOpenedOkno2.addEventListener('click', openedOkno);

buttonClosedDelete1.addEventListener('click', closedDelete);
buttonOpenedDelete1.addEventListener('click', openedDelete);
buttonClosedDelete2.addEventListener('click', closedDelete);
buttonOpenedDelete2.addEventListener('click', openedDelete);
buttonClosedDelete3.addEventListener('click', closedDelete);
buttonOpenedDelete3.addEventListener('click', openedDelete);

buttonClosedChange1.addEventListener('click', closedChange);
buttonOpenedChange1.addEventListener('click', openedChange);
buttonClosedChange2.addEventListener('click', closedChange);
buttonOpenedChange2.addEventListener('click', openedChange);
buttonClosedChange3.addEventListener('click', closedChange);
buttonOpenedChange3.addEventListener('click', openedChange);

    
