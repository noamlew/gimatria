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
const type = document.getElementById("type");

const milon_r = {
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

const milon_m = {
    א: 111,
    ב: 412,
    ג: 83,
    ד: 434,
    ה: 6,
    ו: 22,
    ז: 67,
    ח: 418,
    ט: 419,
    י: 20,
    כ: 100,
    ל: 74,
    מ: 80,
    נ: 106,
    ס: 170,
    ע: 130,
    פ: 81,
    צ: 104,
    ק: 186,
    ר: 510,
    ש: 360,
    ת: 416,
    ן: 106,
    ם: 80,
    ך: 100,
    ף: 81,
    ץ: 104,
};

const milon_K = {
    א: 1,
    ב: 2,
    ג: 3,
    ד: 4,
    ה: 5,
    ו: 6,
    ז: 7,
    ח: 8,
    ט: 9,
    י: 1,
    כ: 2,
    ל: 3,
    מ: 4,
    נ: 5,
    ס: 6,
    ע: 7,
    פ: 8,
    צ: 9,
    ק: 1,
    ר: 2,
    ש: 3,
    ת: 4,
    ן: 5,
    ם: 4,
    ך: 7,
    ף: 8,
    ץ: 9,
};

const milon_Ki = {
    א: 1,
    ב: 3,
    ג: 6,
    ד: 10,
    ה: 15,
    ו: 21,
    ז: 28,
    ח: 36,
    ט: 45,
    י: 55,
    כ: 75,
    ל: 105,
    מ: 145,
    נ: 195,
    ס: 255,
    ע: 325,
    פ: 405,
    צ: 495,
    ק: 595,
    ר: 795,
    ש: 1095,
    ת: 1495,
    ן: 195,
    ם: 145,
    ך: 75,
    ף: 405,
    ץ: 495,
};

let milim = [];
let red = true;
let typeG = "ragular";

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
    setTimeout(target, 1);
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

document.addEventListener("click", () => {
    if (milim.length === 0) {
        switch (type.value) {
            case "ragular":
                typeG = "ragular";
                break;
            case "miluy":
                typeG = "miluy";
                break;
            case "kodem":
                typeG = "kodem";
                break;
            case "katan":
                typeG = "katan";
                break;
            case "kidmi":
                typeG = "kidmi";
                break;
            case "square":
                typeG = "square";
                break;
        }
    }
});

function sumOfGimatria(str) {
    let sum = 0;
    if(typeG === "ragular") {
        for (let c of str) {
            if (c in milon_r) {
                sum += milon_r[c];
            }
        }
    }
    else if(typeG === "miluy") {
        for (let c of str) {
            if (c in milon_m) {
                sum += milon_m[c];
            }
        }
    }
    else if (typeG === "kodem") {
        let allC = [];
        console.log(allC);
        for (let c of str) {
            if (c in milon_r) {
                allC.push(c);
                console.log(allC)
                allC.forEach((oneC) => {
                    sum += milon_r[oneC]
                })
            }
        }
    }
    else if (typeG === "katan") {
        for (let c of str) {
            if (c in milon_K) {
                sum += milon_K[c];
            }
        }
    }
    else if (typeG === "kidmi") {
        for (let c of str) {
            if (c in milon_Ki) {
                sum += milon_Ki[c];
            }
        }
    }
    else if (typeG === "square") {
        for (let c of str) {
            if (c in milon_r) {
                sum += milon_r[c] * milon_r[c];
            }
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
