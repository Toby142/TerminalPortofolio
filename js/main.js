var input = document.getElementById('text-input');
var terminal = document.getElementById('terminal');
var visitorName = userName;

document.getElementById('textInputLabel').innerHTML = visitorName + " ";


input.addEventListener('keyup', function(event) {
    if (input.value.length === 0) {
        return;
    } else if (event.keyCode === 13) {
        event.preventDefault();
        // console.log(input.value);
        checkCommand(input.value);
        input.value = "";
    }
}); 

function checkCommand(command) {
    switch (command) {
        case "help":
            fillTerminal(input.value);
            fillTerminalCommand (help);
            break;
        case "clear":
            clearTerminal();
            console.log("clear");
            break;
        case "about":
            fillTerminal(input.value);
            fillTerminalCommand (about);
            break;  
        case "projects":
            fillTerminal(input.value);
            fillTerminalCommand (projects);
            break;  
        case "find":
            fillTerminal(input.value);
            fillTerminalCommand (find);
            break;
        case "skills":
            fillTerminal(input.value);
            fillTerminalCommand (skills);
            break;
        case "banner":
            fillTerminal(input.value);
            fillTerminalCommand (banner);
            break;
        default:
            fillTerminal(input.value);
            fillTerminalCommand (notFound);
            console.log("command not found");
    }
}

// a function that sets the default text in the terminal
function setDefaultText() {
    fillTerminalCommand (banner);
}



function fillTerminal(text) {
    terminal.innerHTML += visitorName + " " + `<span class="user">` + text + `</span>` + `<br>`;
}

function fillTerminalCommand(text) {   
    text = text.join("<br>");
    terminal.innerHTML += `<div class="system">` + text + `</div>`;
}

function clearTerminal() {
    terminal.innerHTML = "";
}
