const display = document.getElementById('display');
disp = "";
function append(input) {
    disp += input;
    display.textContent = disp;
}
function back() {
    disp = disp.substring(0, disp.length-1);
    display.textContent = disp;
}
function clearDisplay(inp) {
    disp = "";
    display.textContent = disp;
}
function calculate() {

    try{display.textContent = eval(disp);}
    catch(error) {
        display.textContent = 'ERROR';
    }
    disp = '';
}