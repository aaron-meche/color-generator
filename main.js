function keyClicked(event) {
    if (event.code === 'Space') {
        randomizeColor();
    }
    if (event.code === 'Backspace') {
        removeLayer();
    }
    // console.log(event.code);
}

sessionStorage['shell'] = 0;
var shellCount = sessionStorage['shell'];

var case0Locked = false;
var case1Locked = false;
var case2Locked = false;
var case3Locked = false;
var case4Locked = false;

var consecDigs = 0;

function pickColor() {
    var library = ['A','B','C','D','E','F','0','1','2','3','4','5','6','7','8','9'];
    var collection = '';
    for (var i = 0; i < 6; i++) {
        collection = collection + library[Math.floor(Math.random() * library.length)];
    }
    return collection;
}

function randomizeColor() {
    console.log(consecDigs);
    if (consecDigs > 0) {
        shellCount = shellCount + consecDigs;
    }
    for (var i = 0; i < 5; i++) {
        if (eval('case' + i + 'Locked')) {
            void(0);
        } else {
            var color = pickColor();
            document.getElementById('colorCase' + i).innerHTML = document.getElementById('colorCase' + i).innerHTML + "<div id='colorCase" + i + "Shell" + shellCount + "' class='color-display'></div>"
            document.getElementById("colorCase" + i + "Shell" + shellCount ).style.backgroundColor = '#' + color;
            document.getElementById('colorLabel' + i).innerHTML = color;
        }
    }
    shellCount++;
    consecDigs = 0;
    document.getElementById('shellCounter').innerHTML = shellCount;
}

function lockCase(caseNumber) {
    if (document.getElementById("colorCase" + caseNumber + "Lock").style.display == 'flex') {
        document.getElementById("colorCase" + caseNumber + "Lock").style.display = 'none';
        window['case' + caseNumber + 'Locked'] = false;
    } else {
        document.getElementById("colorCase" + caseNumber + "Lock").style.display = 'flex';
        window['case' + caseNumber + 'Locked'] = true;
    }
}

function rgbToHex(col)
{
    if(col.charAt(0)=='r')
    {
        col=col.replace('rgb(','').replace(')','').split(',');
        var r=parseInt(col[0], 10).toString(16);
        var g=parseInt(col[1], 10).toString(16);
        var b=parseInt(col[2], 10).toString(16);
        r=r.length==1?'0'+r:r; g=g.length==1?'0'+g:g; b=b.length==1?'0'+b:b;
        var colHex=r+g+b;
        return colHex.toUpperCase();
    }
}

function removeLayer() {
    consecDigs = consecDigs + 1;
    console.log(consecDigs);
    if (shellCount == 1) {
        alert("You've hit the bottom, you can't dig anymore!");
    } else {
        shellCount--;
        for (var i = 0; i < 5; i++) {
            if (eval('case' + i + 'Locked')) {
                void(0);
            } else {
                document.getElementById("colorCase" + i + "Shell" + shellCount).style.display = 'none';
                document.getElementById('colorLabel' + i).innerHTML = rgbToHex(document.getElementById("colorCase" + i + "Shell" + (shellCount - 1)).style.backgroundColor);
            }
        }
        if (consecDigs == 0) {
            document.getElementById('shellCounter').innerHTML = shellCount - 1;
        } else {
            document.getElementById('shellCounter').innerHTML = shellCount;
        }
    }
}