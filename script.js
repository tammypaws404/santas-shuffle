
let clickStage = 1;
let presentsArray = []
function clickStar() {
    // 1st click to store user inputs
    if (clickStage == 1) {
        const input1 = document.getElementById("one");
        const input2 = document.getElementById("two");
        const input3 = document.getElementById("three");
        const input4 = document.getElementById("four");
        const input5 = document.getElementById("five");

        presentsArray.push(input1.value);
        presentsArray.push(input2.value);
        presentsArray.push(input3.value);
        presentsArray.push(input4.value);
        presentsArray.push(input5.value);

        alert(presentsArray);
    }

    // 2nd click after user choose 5 presents. Generate random integers (20% chance of getting a present)
    else if (clickStage == 2) {
        let randomArray = [];
        let presentsGotArray = [];
        for (let i = 0; i < 5; i++) {
            randomNum = Math.floor(Math.random() * 20);
            if (!(randomNum in randomArray)) {
                if (randomNum < 5) {
                    presentsGotArray.push(presentsArray[randomNum]);
                }
            }
        }
        alert(presentsGotArray);
    }

    clickStage++;
}

// make the presents move on click
let count = 0;
function choosePresent(clickedId) {
    if (count < 5) {
        document.getElementById(clickedId).style.top="-470px";
    }
    count++
}