const startButton = document.getElementById("start-button");

const createButtons = () => {
    for (let i =1; i <=10; i++) {
        let button = document.createElement("cliquer moi");
        button.id = `${i}`;
        button.textContent = `Button #${i}`
        button.click(buttonEvent(i));
        buttonDiv.appendChild(button);
    }
}

const buttonEvent = i => {
    document.body.addEventListener( 'start-button', (event) => {
        if(event.target.id === i.toString()) alert(event.target.id);
        event.preventDefault();
    });
}