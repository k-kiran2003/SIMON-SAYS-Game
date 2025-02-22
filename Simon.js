let gameSeq = [];
let userSeq = [];
let started = false;
let level = 0;
let h2 = document.querySelector("h2");
let btns = ["red", "yellow", "green", "purple"]
window.addEventListener("keypress", function () {
    //starting game
    if (started == false) {
        console.log("game started");
        started = true;
        levelUp();
    }




});
function buttonFlash(btn) {

    btn.classList.add("background");
    setTimeout(function () {
        btn.classList.remove("background");
    }, 250);
}

function levelUp() {
    userSeq = [];
    level++;
    h2.innerText = `level : ${level}`;
    //random color
    let randIdx = Math.floor((Math.random() * 4));

    let randcolor = btns[randIdx];
    gameSeq.push(randcolor);
    console.log(gameSeq);
    let randbtn = document.querySelector(`.${randcolor}`);

    buttonFlash(randbtn);

}
function reset() {
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}
function checkSeq(index) {
    // console.log("curr level =", level);

    if (userSeq[index] === gameSeq[index]) {
        if (userSeq.length == gameSeq.length) {
            // console.log("correct seq");
            setTimeout(levelUp, 1000);
        }

    }
    else {
        h2.innerHTML = `Game over! your score was <bold>${level}</bold>.<br>Press any key to restart`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function () {
            document.querySelector("body").style.backgroundColor = "white";

        }, 150);
        reset();
    }


}
function btnPress() {

    let btn = this;
    buttonFlash(btn);
    let color = btn.getAttribute("id");
    userSeq.push(color);
    console.log(userSeq);
    checkSeq(userSeq.length - 1);
}

let allbtns = document.querySelectorAll(".btn");
for (b of allbtns) {
    b.addEventListener("click", btnPress);
}


