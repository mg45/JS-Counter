let result = document.getElementById("result")

function addOne(){
    result.innerText = Number(result.innerText) + 1
}

function subOne(){
    result.innerText = Number(result.innerText) - 1
}

function addTen(){
    result.innerText = Number(result.innerText) + 10
}

function subTen(){
    result.innerText = Number(result.innerText) - 10
}

function addOneHun(){
    result.innerText = Number(result.innerText) + 100
}

function subOneHun(){
    result.innerText = Number(result.innerText) - 100
}

function reset(){
    result.innerText = Number(result.innerText) * 0
}

function multiTwo(){
    result.innerText = Number(result.innerText) * 2
}
