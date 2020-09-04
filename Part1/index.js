let arr = [];

const play = (clickedId) => {
    let playerSpan = document.getElementById('player');
    let clickedElement = document.getElementById(clickedId);

    if(playerSpan.innerText==="X"){
        playerSpan.innerText="O";

        clickedElement.innerText = "X";
        arr[clickedId] ="X"
        console.log(arr);
    }
    else{
        playerSpan.innerText="X";
        clickedElement.innerText = "O";
        arr[clickedId] = "O"
        console.log(arr);
    }

    if( arr[0]==="X"&&arr[1]==="X"&&arr[2]==="X" ||
    arr[0]==="X"&&arr[3]==="X"&&arr[6]==="X" ||
    arr[0]==="X"&&arr[4]==="X"&&arr[8]==="X" ||
    arr[3]==="X"&&arr[4]==="X"&&arr[5]==="X" ||
    arr[6]==="X"&&arr[7]==="X"&&arr[8]==="X" ||
    arr[6]==="X"&&arr[7]==="X"&&arr[8]==="X" ||
    arr[6]==="X"&&arr[4]==="X"&&arr[2]==="X" ||
    arr[1]==="X"&&arr[4]==="X"&&arr[7]==="X" ||
    arr[2]==="X"&&arr[5]==="X"&&arr[8]==="X" ){
    alert("Player X won!");
    return;
    }

    if( arr[0]==="O"&&arr[1]==="O"&&arr[2]==="O" ||
    arr[0]==="O"&&arr[3]==="O"&&arr[6]==="O" ||
    arr[0]==="O"&&arr[4]==="O"&&arr[8]==="O" ||
    arr[3]==="O"&&arr[4]==="O"&&arr[5]==="O" ||
    arr[6]==="O"&&arr[7]==="O"&&arr[8]==="O" ||
    arr[6]==="O"&&arr[7]==="O"&&arr[8]==="O" ||
    arr[6]==="O"&&arr[4]==="O"&&arr[2]==="O" ||
    arr[1]==="O"&&arr[4]==="O"&&arr[7]==="O" ||
    arr[2]==="O"&&arr[5]==="O"&&arr[8]==="O" ){
        alert("Player O won!");
        return;
    }

    let boardFull = true;
    for (let i = 0; i < 8; i++) {
        if(arr[i]==undefined){
            boardFull=false;
        }
    }
    if(boardFull==true){
        alert("CAT's game!");
        return;
    }

}

// const reset = () => {
//     id0 = document.getElementById("0");
//     id1 = document.getElementById("1");
//     id2 = document.getElementById("2");
//     id3 = document.getElementById("3");
//     id4 = document.getElementById("4");
//     id5 = document.getElementById("5");
//     id6 = document.getElementById("6");
//     id7 = document.getElementById("7");
//     id8 = document.getElementById("8");
//     id9 = document.getElementById("9");

//     if(id0.innerText!==null){
//     id0.innerText=null;
//     }
    
//     if(id1.innerText!==null){
//         id1.innerText=null;
//     }

//     if(id2.innerText!==null){
//         id2.innerText=null;
//     }
    
//     if(id3.innerText!==null){
//         id3.innerText=null;
//     }
    
//     if(id4.innerText!==null){
//         id4.innerText=null;
//     }

//     if(id5.innerText!==null){
//         id5.innerText=null;
//     }

//     if(id6.innerText!==null){
//         id6.innerText=null;
//     }
        
//     if(id7.innerText!==null){
//         id7.innerText=null;
//     }

//     if(id8.innerText!==null){
//         id8.innerText=null;
//     }

//     if(id9.innerText!==null){
//         id9.innerText=null;
//     }

//     let playerSpan = document.getElementById('player');
//     if((playerSpan.innerText)!=="X"){
//         (playerSpan.innerText) = "X";
//     }

    
// }



