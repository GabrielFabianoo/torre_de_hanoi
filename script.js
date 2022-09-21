// --------------------- win condition
let winner = document.getElementById('winner');

// --------------------- tower 1
let main = document.getElementById('main')

let box1 = document.createElement('div');
box1.classList.add('boxes')
main.appendChild(box1)

let divTower1 = document.createElement('div');
divTower1.classList.add('tower')
box1.appendChild(divTower1);

let divLargePiece = document.createElement('div');
divLargePiece.classList.add('piece')
divLargePiece.id = 'largePiece'
divTower1.appendChild(divLargePiece);

let divBigPiece = document.createElement('div');
divBigPiece.id = 'bigPiece'
divBigPiece.classList.add('piece')
divTower1.appendChild(divBigPiece);

let divMediumPiece = document.createElement('div');
divMediumPiece.id = 'mediumPiece'
divMediumPiece.classList.add('piece')
divTower1.appendChild(divMediumPiece);

let divSmallPiece = document.createElement('div');
divSmallPiece.id = 'smallPiece'
divSmallPiece.classList.add('piece')
divTower1.appendChild(divSmallPiece);

let divBar1 = document.createElement('div');
divBar1.classList.add('bar')
box1.appendChild(divBar1)

let divPhases1 = document.createElement('div');
divPhases1.classList.add('phases')
divPhases1.textContent = 'Start'
box1.appendChild(divPhases1)

// --------------------- tower 2
let box2 = document.createElement('div');
box2.classList.add('boxes')
main.appendChild(box2)

let divTower2 = document.createElement('div');
divTower2.classList.add('tower')
box2.appendChild(divTower2);

let divBar2 = document.createElement('div');
divBar2.classList.add('bar')
box2.appendChild(divBar2)

let divPhases2 = document.createElement('div');
divPhases2.classList.add('phases')
divPhases2.textContent = 'Offset'
box2.appendChild(divPhases2)


//--------------------- tower 3
let box3 = document.createElement('div');
box3.classList.add('boxes')
main.appendChild(box3)

let divTower3 = document.createElement('div');
divTower3.id = 'endGame'
divTower3.classList.add('tower')
box3.appendChild(divTower3);

let divBar3 = document.createElement('div');
divBar3.classList.add('bar')
box3.appendChild(divBar3)

let divPhases3 = document.createElement('div');
divPhases3.classList.add('phases')
divPhases3.textContent = 'End'
box3.appendChild(divPhases3)

// -------- LOGICA 


let discoAtual = null
let towers = document.querySelectorAll('.tower')
let endGame = document.getElementById('endGame')

for (let i of towers) {
    i.addEventListener('click', function () { mvDisk(i) })
}

function mvDisk(disk) {

    if (discoAtual !== null) {

        if (disk.childElementCount == 0) {
            discoAtual.style.bottom='0%'
            disk.appendChild(discoAtual)


        }
        if (disk.childElementCount > 0 && discoAtual.clientWidth < disk.lastElementChild.clientWidth) {
            discoAtual.style.bottom='0%'
            disk.appendChild(discoAtual)

        }
    }
    if (discoAtual == null) {
        discoAtual = disk.lastElementChild
        if (discoAtual == disk.lastElementChild) {
            discoAtual.style.bottom = '100%'
        }
    } else {
        discoAtual.style.bottom='0%'
        discoAtual = null
        
    }

    if (endGame.childElementCount == 4) {
        winner.textContent = 'Parabéns, você venceu!'
    }
}

