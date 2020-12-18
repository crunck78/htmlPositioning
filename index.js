// function Container(pos){
//     this.pos = pos;
//     this.htmlElement = document.getElementById(pos);
//     this.htmlElement.setAttribute('position', pos);
// };

// console.log(static);

function getControlePanel(index) {
    return `<div class="controle-panel mr-6">
                <div class="input-field">
                    <label for="top-${index}">Top: </label>
                    <input oninput="setTop(${index})" class="input mr-6" id="top-${index}" type="number">
                </div>
                <div class="input-field">
                    <label for="bottom-${index}">Bottom: </label>
                    <input oninput="setBottom(${index})" class="input mr-6" id="bottom-${index}" type="number">
                </div>
                <div class="input-field">
                    <label for="left-${index}">Left: </label>
                    <input oninput="setLeft(${index})" class="input mr-6" id="left-${index}" type="number">
                </div>
                <div class="input-field">
                    <label for="right-${index}">Right: </label>
                    <input oninput="setRight(${index})" class="input mr-6" id="right-${index}" type="number">
                </div>
            </div>`;
}

let allContainers = document.getElementsByClassName('container');
let panelInputs = document.getElementsByClassName('input');
console.log(allContainers);
console.log(panelInputs);

for (let index = 0; index < allContainers.length; index++) {
    let controlePanel = getControlePanel(index);
    allContainers[index].insertAdjacentHTML("beforeend", controlePanel);
}

function setTop(index){
	allContainers[ index ].style.top = document.getElementById('top-'+index).value+'px';
}

function setBottom(index){
	allContainers[ index ].style.bottom = document.getElementById('bottom-'+index).value+'px';
}

function setLeft(index){
	allContainers[ index ].style.left = document.getElementById('left-'+index).value+'px';
}

function setRight(index){
	allContainers[ index ].style.right = document.getElementById('right-'+index).value+'px';
}
