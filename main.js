let myInput = document.querySelector('form input[type=number]');
let myDiv = myInput.nextElementSibling;

document.body.style.cssText = 'font-family: Arial, Helvetica, sans-serif'
myInput.parentElement.style.cssText = 'height: 100vh; display: flex; flex-direction: column; justify-content: center; align-items: center; gap: 25px';
myInput.style.cssText = 'padding: 10px; font-size: 20px';
myDiv.style.cssText = 'font-size: 20px; text-align: center';

function convert() {
    myDiv.innerHTML = `${myInput.value} USD Dollar = ${myInput.value * 48} Egyptian Pound`;
}

myInput.addEventListener('change', convert);
myInput.addEventListener('input', convert);
