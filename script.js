let myPoint = 0;
let compPoint = 0;

function iconClick(userVal) {
    let options = ["rock", "paper", "scissor"];
    let randomSelect = Math.floor(Math.random() * options.length);
    // console.log(options[randomSelect]);

    let result = document.getElementById("result");
    let myScore = document.getElementById("myScore");
    let compScore = document.getElementById("compScore");

    if (userVal == "rock" && options[randomSelect] == "rock" || userVal == "paper" && options[randomSelect] == "paper" || userVal == "scissor" && options[randomSelect] == "scissor") {
        result.innerHTML = "<p>It's a Draw</p>"
    } else if (userVal == "rock" && options[randomSelect] == "scissor" || userVal == "paper" && options[randomSelect] == "rock" || userVal == "scissor" && options[randomSelect] == "paper") {
        result.innerHTML = `<p style='color:green;'>You Won, ${userVal} win over ${options[randomSelect]}</p>`
        myPoint++;
        myScore.innerText = `My Score : ${myPoint}`;
    } else {
        result.innerHTML = `<p style='color:red;'>You Lose, ${options[randomSelect]} win over ${userVal}</p>`
        compPoint++;
        compScore.innerText = `Computer Score : ${compPoint}`;
    }
}