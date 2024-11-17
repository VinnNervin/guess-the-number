const input = document.querySelector('.inputNum')
const desc = document.querySelector('.desc')
const hitBtn = document.querySelector('.hit')
const diffBtn = document.querySelector('.difficult')
const diffMenu = document.querySelector('.difficult-menu')
const diffDecs = document.querySelector('.diff-desc')
// const cancelBtn = document.querySelector('.cancel')
const change = document.querySelector('.changes')
const background = document.querySelector('body')



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

let theNumber = Math.floor(Math.random() * numSet[`${difficult}`])
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



function check(num = 0) {
    input.value = ''
    life = life - 1
    console.log(num);
    console.log(theNumber + " target");

    if (life <= 0) {
        alert('you lose');
        change.textContent = `Kamu punya 0 kesempatan`
        reset()
    } else {
        if (num === theNumber) {
            alert('you win');
            reset()
        } else {
            change.textContent = `Kamu punya ${life} kesempatan tersisa`

            if (num >= theNumber) {
                maxNum = num
            } else {
                minNum = num
            }

            if (lastgame === false && (minNum + maxNum) / 2 == theNumber) {
                lastgame = true;
                console.log('last game yo...!');
                console.log(lastgame);
            }
            desc.textContent = `pilih angka antara ${minNum} sampai ${maxNum}`
        }
    }
}




function reset() {
    console.log('reset');
    life = +lifeByDiff[`${difficult}`]
    maxNum = numSet[`${difficult}`]
    minNum = 0
    change.textContent = `Kamu punya ${life} kesempatan`
    desc.textContent = `pilih angka antara ${minNum} sampai ${maxNum}`
    diffDecs.textContent = `difficulty ${difficult}`
    theNumber = Math.floor(Math.random() * numSet[`${difficult}`])
}


reset()