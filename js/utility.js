const hexLetter = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f']
const buttonDiffDiv = document.querySelector('.list-diff')


const difficultList = {
    easy: '⭐',
    medium: '😎',
    hard: '🥵',
    extreme: '💀'
}

let color = '#'
for (let i = 0; i < 6; i++) {
    let random = Math.floor(Math.random() * 15)
    color += hexLetter[random]
}
background.style.backgroundColor = color

// console.log(Object.keys(lifeByDiff));
for (const item in difficultList) {
    const createBtn = document.createElement('button')
    createBtn.value = item
    buttonDiffDiv.appendChild(createBtn).innerText = item + ' ' + difficultList[item]
    console.log(item);
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


const cancelBtn = document.createElement('button')
cancelBtn.classList.add('cancel')


buttonDiffDiv.appendChild(cancelBtn).innerText = 'cancel'

diffBtn.addEventListener('click', () => {
    diffMenu.style.visibility = 'visible'
})
cancelBtn.addEventListener('click', () => {
    diffMenu.style.visibility = 'hidden'
})


