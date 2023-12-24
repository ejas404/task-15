const count = 8
const chessBoard = document.querySelector('.board')


function generateBoard(){
    let row = ""
    let flag;
    let check = ""
    for(let i = 1 ; i<=count; i++){
        flag = i%2 === 0 ? true : false;
        let cells = ""
        for(let j= 1 ; j<=count; j++){
            if(!flag){
                check = j%2 === 1 ? 'black' : 'white';
            }else{
                check = j%2 === 0 ? 'black' : 'white';
            }
            cells+=`<div id="${i}${j}" class="cell ${check}"></div>`
        }

        row += `<div class="row">${cells}</div>`
    }

    chessBoard.innerHTML = row
}

function addOpponents(){
    // only adding elephant for now and finding its move
    document.getElementById('83').innerHTML = '<p onclick="checkMove(`83`)" id="black">Elef</p>'

}

function checkMove(id){
    let path = id.split('')
    let k = Number(path[1])
    let inc = k
    let dec = k
    let f = 1
    for(let i = Number(path[0]) - 1; i>0 ; i--){
        console.log(i)
        inc+= f
        dec -= f

        console.log(inc,dec)
       if(inc <= 8 ){
        document.getElementById(`${i}${inc}`).style.background = 'green'
       }
       if(dec > 0){
        document.getElementById(`${i}${dec}`).style.background = 'green'
       }
    }
}

generateBoard()
addOpponents()
