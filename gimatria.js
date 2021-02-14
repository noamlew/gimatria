const shave = document.getElementById("shave");
const plus = document.getElementById("plus");
const input = document.getElementById("input");
const limchok = document.getElementById("limchok");
const bitul = document.getElementById("bitul");
const output = document.getElementById("output");

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
    " ": 0,
};

let milim = [];

plus.addEventListener("click", () => {
    milim.push(sumOfGimatria(input.value));
    let myStr = "";
    milim.forEach((mila) => {
        myStr += String(mila);
        myStr += " + ";
    });
    input.value = "";
    output.innerHTML = myStr;
});

document.addEventListener("keydown", (event) => {
    if(event.keyCode === 13) {
        milim.push(sumOfGimatria(input.value));
        let myStr = "";
        milim.forEach((mila) => {
            myStr += String(mila);
            myStr += " + ";
        });
        input.value = "";
        output.innerHTML = myStr;
    }
})

shave.addEventListener("click", () => {
    milim.push(sumOfGimatria(input.value));
    let myStr = "";
    if (milim.length === 1) {
        output.innerHTML = sumOfGimatria(input.value);
        input.value = "";
    } else {
        milim.forEach((mila) => {
            if (mila === milim[milim.length - 1]) {
                myStr += String(mila);
                myStr += " = ";
                let sum = 0;
                milim.forEach((mila1) => {
                    sum += mila1;
                })
                myStr += String(sum);
            } else {
                myStr += String(mila);
                myStr += " + ";
            }
        });
        input.value = "";
        output.innerHTML = myStr;
    }
});

limchok.addEventListener("click", () => {
    milim = [];
    output.innerHTML = "";
})

bitul.addEventListener("click", () => {
    milim.pop();
    let myStr = "";
    milim.forEach((mila) => {
        myStr += String(mila);
        myStr += " + ";
    });
    input.value = "";
    output.innerHTML = myStr;
})

function sumOfGimatria(str) {
    let sum = 0;
    for (let c of str) {
        if(c in milon) {
            sum += milon[c];
        }
    }
    return sum;
}

