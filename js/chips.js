function chips(message, time = 3000, color) {
    let chip = document.createElement('div');
    chip.classList.add('chips');
    chip.textContent = message;
    console.log(color);
    color = document.querySelector('#rgb').value;
    if (color != 'default') {
        chip.style.background = color;
    }
    addChipsField(chip);
    setTimeout(deleteChips, time);
}

document.querySelector('.btn2').addEventListener('click', function() {
    chips('Hello');
});
function deleteChips() {
    document.querySelector('.chips').remove();  
    let allChips = document.querySelectorAll('.chips');
    if (allChips.length == 0) document.querySelector('.chipsField').remove();
    
};

function addChipsField(chips) {
    let chipsField = document.querySelector('.chipsField');
    if (chipsField) {
        chipsField.appendChild(chips);
    } else {
        let chipsField = document.createElement('div');
        chipsField.classList.add('chipsField');
        document.querySelector('.btn2').after(chipsField);
        chipsField.appendChild(chips);
    }
    
}