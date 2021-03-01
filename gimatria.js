const shave = document.getElementById("shave");
const plus = document.getElementById("plus");
const input = document.getElementById("input");
const limchok = document.getElementById("limchok");
const bitul = document.getElementById("bitul");
const output = document.getElementById("output");
const plusLibrary = document.getElementById("plus-library");
const library = document.getElementById("library");
const libraryDiv = document.getElementById("libraryDiv");
const downloadButton = document.getElementById("download-button");
const targetInput = document.getElementById("targetInput");
const targetP = document.getElementById("targetP");

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
let red = true;

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
    target();
});

document.addEventListener("keydown", (event) => {
    target();
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
        target();
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
    target();
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
    target();
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
    target();
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

libraryDiv.addEventListener("click", () => {
    if (red) {
        let answer = confirm("אתה בטוח שאתה רוצה למחוק את ההיסטוריה?");
        if (answer) {
            library.innerHTML = "";
        }
    }
});

libraryDiv.addEventListener("mouseover", () => {
    libraryDiv.style.background = "rgb(255, 205, 205)";
});

libraryDiv.addEventListener("mouseleave", () => {
    libraryDiv.style.background = "blanchedalmond";
});

function wiki() {
    window.open(
        "https://he.wikipedia.org/wiki/%D7%92%D7%99%D7%9E%D7%98%D7%A8%D7%99%D7%94"
    );
}

function info() {
    // window.open(
    //     "https://www.canva.com/design/DAEXPCyK22I/w3eo-6tftOKBlQHxCxayJA/view?website#2"
    // );
    window.open("help.html");
}

function download(filename, text) {
    var element = document.createElement("a");
    element.setAttribute(
        "href",
        "data:text/plain;charset=utf-8," + encodeURIComponent(text)
    );
    element.setAttribute("download", filename);

    element.style.display = "none";
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}

downloadButton.addEventListener("click", () => {
    let text = library.innerHTML;
    text = text.split("<br>").join("\n");
    download(`gimatria-${targetInput.value}.txt`, text);
});

downloadButton.addEventListener("mouseenter", () => {
    red = false;
    libraryDiv.style.background = "blanchedalmond";
});

downloadButton.addEventListener("mouseleave", () => {
    red = true;
});

function target() {
    let sum = 0;
    milim.forEach((e) => {
        sum += e.value;
    });
    targetP.innerHTML = sumOfGimatria(targetInput.value) - sum;
}

