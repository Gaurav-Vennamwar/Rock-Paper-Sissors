let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");

const gntcompchoice = () => {
    const options = ["rock","paper","scissors"];
    const randomindx = Math.floor(Math.random() * 3);
    return options[randomindx];
}

const playgame = (userchoice) => {
    console.log("user choice =" , userchoice);
    const comptchoice = gntcompchoice();
    console.log("computer choice =" , comptchoice);

}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id");
        
    })
})
