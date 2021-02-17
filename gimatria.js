const shave = document.getElementById("shave");
const plus = document.getElementById("plus");
const input = document.getElementById("input");
const limchok = document.getElementById("limchok");
const bitul = document.getElementById("bitul");
const output = document.getElementById("output");
const plusLibrary = document.getElementById("plus-library");
const library = document.getElementById("library");

const milon = {
    א: 1,
    ב: 2,
    ג: 3,
    ד: 4,
    ה: 5,
    ו: 6,
    ז: 7,
    ח: 8,
    ט: 9,
    י: 10,
    כ: 20,
    ל: 30,
    מ: 40,
    נ: 50,
    ס: 60,
    ע: 70,
    פ: 80,
    צ: 90,
    ק: 100,
    ר: 200,
    ש: 300,
    ת: 400,
    ן: 50,
    ם: 40,
    ך: 70,
    ף: 80,
    ץ: 90,
};

let milim = [];

plus.addEventListener("click", () => {
    milim.push({ name: input.value, value: sumOfGimatria(input.value) });
    let dt1 = document.createElement("dt");
    dt1.innerHTML =
        milim[milim.length - 1]["name"] +
        "  -  " +
        String(milim[milim.length - 1]["value"]) +
        " + ";
    output.appendChild(dt1);
    input.value = "";
    plusLibrary.style.display = "block";
});

document.addEventListener("keydown", (event) => {
    if (event.keyCode === 13) {
        milim.push({ name: input.value, value: sumOfGimatria(input.value) });
        let dt1 = document.createElement("dt");
        dt1.innerHTML =
            milim[milim.length - 1]["name"] +
            " - " +
            String(milim[milim.length - 1]["value"]) +
            " + ";
        output.appendChild(dt1);
        input.value = "";
        plusLibrary.style.display = "block";
    }
});

shave.addEventListener("click", () => {
    plusLibrary.style.display = "block";
    milim.push({ name: input.value, value: sumOfGimatria(input.value) });
    const dt = document.createElement("dt");
    dt.innerHTML =
        milim[milim.length - 1]["name"] +
        "  -  " +
        String(milim[milim.length - 1]["value"]);
    output.appendChild(dt);
    let sum = 0;
    milim.forEach((mila1) => {
        sum += mila1["value"];
    });
    let dt2 = document.createElement("dt");
    dt2.innerHTML = " = " + String(sum);
    output.appendChild(dt2);
    input.value = "";
    output.innerHTML = myStr;
});

limchok.addEventListener("click", () => {
    milim = [];
    output.innerHTML = "";
    plusLibrary.style.display = "none";
});

bitul.addEventListener("click", () => {
    milim.pop();
    output.innerHTML = "";
    milim.forEach((mila) => {
        let dt1 = document.createElement("dt");
        dt1.innerHTML = mila["name"] + "  -  " + String(mila["value"]) + " + ";
        output.appendChild(dt1);
        input.value = "";
    });
    if (milim.length === 0) {
        plusLibrary.style.display = "none";
    }
});

function sumOfGimatria(str) {
    let sum = 0;
    for (let c of str) {
        if (c in milon) {
            sum += milon[c];
        }
    }
    return sum;
}

plusLibrary.addEventListener("click", () => {
    let sum = 0;
    let str = "";
    milim.forEach((mila) => {
        sum += mila["value"];
        str += " " + mila["name"];
    });
    let br = document.createElement("br");
    str += " - " + String(sum);
    library.innerHTML += str;
    library.appendChild(br);
});
