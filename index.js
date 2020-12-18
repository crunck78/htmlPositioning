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
                    <input class="input mr-6" id="top-${index}" type="number">
                </div>
                <div class="input-field">
                    <label for="bottom-${index}">Bottom: </label>
                    <input class="input mr-6" id="bottom-${index}" type="number">
                </div>
                <div class="input-field">
                    <label for="left-${index}">Left: </label>
                    <input class="input mr-6" id="left-${index}" type="number">
                </div>
                <div class="input-field">
                    <label for="right-${index}">Right: </label>
                    <input class="input mr-6" id="right-${index}" type="number">
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
    allContainers[index].style.top = document.getElementById('top-'+index).value + 'px';
}