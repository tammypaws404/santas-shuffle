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

        document.getElementById("one").value = "";
        document.getElementById("two").value = "";
        document.getElementById("three").value = "";
        document.getElementById("four").value = "";
        document.getElementById("five").value = "";
    }

    // 2nd click after user choose 5 presents. Generate random integers
    else if (clickStage == 2) {
        let randomArray = [];
        let presentsGotArray = [];
        for (let i = 0; i < 10; i++) {
            randomNum = Math.floor(Math.random() * 20);
            randomArray.push(randomNum);
            if (!(randomNum in randomArray)) {
                if (randomNum < 5) {
                    presentsGotArray.push(presentsArray[randomNum]);
                }
            }
        }
        if (!presentsGotArray.length) {
            alert("You got nothing. Maybe there's coal if you look closer.")
            location.reload()
        }
        else {
            alert("You got stuff yay: " + presentsGotArray);
            location.reload()
        }
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