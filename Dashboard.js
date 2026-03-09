let ganhos = 0
let entregas = 0
let km = 0
let combustivel = 0

function atualizar(){

document.getElementById("ganhos").innerText = "R$"+ganhos
document.getElementById("entregas").innerText = entregas
document.getElementById("km").innerText = km

let lucro = ganhos - combustivel

document.getElementById("lucro").innerText = "R$"+lucro

}

function addEntrega(){

let valor = parseFloat(document.getElementById("valorEntrega").value)

ganhos += valor
entregas++

atualizar()

}

function addKM(){

let valor = parseFloat(document.getElementById("kmRodado").value)

km += valor

atualizar()

}

function addCombustivel(){

let valor = parseFloat(document.getElementById("combustivel").value)

combustivel += valor

atualizar()

}
