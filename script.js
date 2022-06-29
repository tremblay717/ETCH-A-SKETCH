var bigBox = document.querySelector("#bigBox");


// 606
//31

for (let i = 1; i <= 16; i++) {
    var gridDiv = document.createElement('div');
    gridDiv.setAttribute('style', 'display:flex;flex-display:row;border-bottom: 1px solid black;width:100%; height:100%;');
    bigBox.appendChild(gridDiv);

    for (let j = 1; j <= 16; j++) {
        var smallDiv = document.createElement('smallDiv');
        smallDiv.setAttribute('style', 'border:solid; border-width:1px;width:100%; height:100%;cursor:pointer')
        gridDiv.appendChild(smallDiv)
    }
}


