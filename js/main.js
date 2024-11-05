const input = document.querySelector('.inputNum')
const desc = document.querySelector('.desc')
const hitBtn = document.querySelector('.hit')
const diffBtn = document.querySelector('.difficult')
const diffMenu = document.querySelector('.difficult-menu')
const diffDecs = document.querySelector('.diff-desc')
const cancelBtn = document.querySelector('.cancel')
const change = document.querySelector('.changes')
const background = document.querySelector('body')
const hexLetter = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f']

let color = '#'
for (let i = 0; i < 6; i++) {
    let random = Math.floor(Math.random() * 15)
    color += hexLetter[random]
}
background.style.backgroundColor = color


const numSet = {
    easy: 100,
    medium: 500,
    hard: 1000,
    extreme: 3000
}
const lifeByDiff = {
    easy: 15,
    medium: 12,
    hard: 10,
    extreme: 5
}

let difficult = "easy"
let life = +lifeByDiff[`${difficult}`]



let deadNum = Math.floor(Math.random() * numSet[`${difficult}`])
let minNum = 0
let maxNum = numSet[`${difficult}`]

function checkError() {
    const guess = +input.value
    guess == "" ? alert('masukkan angka')
        : guess >= minNum && guess <= maxNum ? check(guess) : alert('out of range')
}


input.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        checkError()
    }
});
hitBtn.addEventListener('click', () => {
    checkError()
})

let lastgame = false



function check(num) {
    input.value = ''
    life = life - 1
    console.log(num);
    console.log(deadNum + "bomb");

    if (life <= 0) {
        alert('you lose');
        change.textContent = `Kamu punya 0 kesempatan`
        reset()
    } else {
        if (num === deadNum) {
            alert('you win');
            reset()
        } else {
            change.textContent = `Kamu punya ${life} kesempatan`

            if (num >= deadNum) {
                maxNum = num
            } else {
                minNum = num
            }

            if (lastgame === false && (minNum + maxNum) / 2 == deadNum) {
                lastgame = true;
                console.log('last game yo...!');
                console.log(lastgame);
            }
            desc.textContent = `pilih angka antara ${minNum} sampai ${maxNum}`
        }
    }
}



diffBtn.addEventListener('click', () => {
    diffMenu.style.visibility = 'visible'
})
cancelBtn.addEventListener('click', () => {
    diffMenu.style.visibility = 'hidden'
})

function reset() {
    console.log('reset');
    life = +lifeByDiff[`${difficult}`]
    maxNum = numSet[`${difficult}`]
    minNum = 0
    change.textContent = `Kamu punya ${life} kesempatan`
    desc.textContent = `pilih angka antara ${minNum} sampai ${maxNum}`
    diffDecs.textContent = `difficulty ${difficult}`
    deadNum = Math.floor(Math.random() * numSet[`${difficult}`])
}

const button2 = document.querySelectorAll('.list-diff button');
button2.forEach((button) => {
    button.addEventListener('click', () => {
        console.log(button.value);
        diffMenu.style.visibility = 'hidden'
        difficult = button.value
        reset()
    });
});