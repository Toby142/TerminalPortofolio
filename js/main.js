var input = document.getElementById('text-input');
var terminal = document.getElementById('terminal');

// console log the value of input when pressed enter
input.addEventListener('keyup', function(event) {
    if (input.value.length === 0) {
        return;
    } else if (event.keyCode === 13) {
        event.preventDefault();
        console.log(input.value);
        checkCommand(input.value);
        input.value = "";
    }
});

// check the command
function checkCommand(command) {
    switch (command) {
        case "help":
            console.log("command help called");
            break;
        case "clear":
            clearTerminal();
            console.log("clear");
            break;
        default:
            console.log("command not found");
            fillTerminal(input.value);
    }
}


function fillTerminal(text) {
    terminal.innerHTML += text + `<br>`;
}

function clearTerminal() {
    terminal.innerHTML = "";
}
