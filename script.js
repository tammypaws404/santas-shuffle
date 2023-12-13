function storeInput() {
    const input1 = document.getElementById("one");
    const input2 = document.getElementById("two");
    const input3 = document.getElementById("three");
    const input4 = document.getElementById("four");
    const input5 = document.getElementById("five");

    const value1 = input1.value;
    const value2 = input2.value;
    const value3 = input3.value;
    const value4 = input4.value;
    const value5 = input5.value;

    const presentsArray = [value1, value2, value3, value4, value5];
}

let count = 0;
function choosePresent(clickedId) {
    if (count < 5) {
        document.getElementById(clickedId).style.top="-470px";
    }
    count++
}