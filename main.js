function keyClicked(event) {
    if (event.code === 'Space') {
        randomizeColor();
    }
    // console.log(event.code);
}

function pickColor() {
    var library = ['A','B','C','D','E','F','0','1','2','3','4','5','6','7','8','9'];
    var collection = '';
    for (var i = 0; i < 6; i++) {
        collection = collection + library[Math.floor(Math.random() * library.length)];
    }
    return collection;
}

function randomizeColor() {
    for (var i = 0; i < 5; i++) {
        var color = pickColor();
        document.getElementById('colorCase' + i).style.backgroundColor = '#' + color;
        document.getElementById('colorLabel' + i).innerHTML = color;
    }
}

function copyColor(self) {

    console.log('copying text');
    /* Get the text field */
    var copyText = self;

    /* Select the text field */
    copyText.select(); 
    copyText.setSelectionRange(0, 99999); /* For mobile devices */

    /* Copy the text inside the text field */
    navigator.clipboard.writeText(copyText.value);

    /* Alert the copied text */
    alert("Copied the text: " + copyText.value);
}