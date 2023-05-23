const start_btn = document.getElementById('start');
const logo = document.getElementById('logo');
const header = document.getElementById('header');
const line = document.getElementById('line');
const lists = document.querySelectorAll('.list');
const eveRef = document.getElementById("eveRef");
const eveRef1 = document.getElementById("eveRef1");
const eveRef2 = document.getElementById("eveRef2");
const l_three = document.getElementById("l-three");
const infoBox = document.getElementById("information");

let boxCount = 0
l_three.addEventListener("click", () =>{
  boxCount++ ;
  if (boxCount % 2 != 0) {
    infoBox.setAttribute("style", "display:block;")
  } else if(boxCount%2 == 0) {
    infoBox.setAttribute("style", "display: none;")
  }
})



start_btn.addEventListener('click', () => {
  logo.style.animationName = 'resize';
  header.style.animationName = 'transform';
  start_btn.style.display = "none";
  line.style.animationName = 'line';

});

lists.forEach(list => {
  list.addEventListener('click', function handleClick(event) {
    document.getElementById('select').style.animationName = "Animelist"
    setTimeout(() => {
      document.getElementById('main').style.width = '30vw'
    }, 2000);

  });
});

let count = 0;

// document.getElementById('a').addEventListener('drop', ()=> {
//   count++
//   
// })
const item1 = document.getElementById('drag1');
const item2 = document.getElementById("drag2");
const container = document.querySelectorAll(".xImg");

item1.addEventListener("click", ()=>{
  item1.setAttribute("style", "display: none;");
  for (let i = 0; i < 2; i++) {
    container[i].style.display = "block"
  }
  reUse();
  reset();

});

item2.addEventListener("click", ()=>{
  
  item2.setAttribute("style", "display: none;");
  for (let i = 0; i > 1; i++) {
    container[i].style.display = "block"
  }
  reUse();
  document.getElementById('src').src = "./eve2.png"
  reset();

});


function allowDrop(ev) {
  ev.preventDefault();
}


function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text", ev.target.id);
  console.log(count)
  ev.target.appendChild(document.getElementById(data));
  reUse();
  reset();

}

function reUse() {
  count++
  if (count < 2) {
    document.getElementById('Tic-tac').style.pointerEvents = "none";
  }
  if (count == 1) {
    console.log();
    document.getElementById('drag2').draggable = true;
    document.getElementById('div2').ondragover = allowDrop;
    document.getElementById('div1').style = "border: 0px gold solid"
    document.getElementById('div2').style = "border: 5px gold solid; opacity: 1; background-color: transparent;"
    document.getElementById('Tic-tac').style.pointerEvents = "none";
    
  }else if (count == 2) {
    document.getElementById('drag1').draggable = false;
    document.getElementById('drag2').draggable = false;
    document.getElementById('div2').style = "border: 0px gold solid; opacity: 1; background-color: transparent;"
    // alert(' ')
    document.getElementById('Tic-tac').style.opacity = '1'
    document.getElementById('Tic-tac').style.pointerEvents = "all"
  }
}

const boxes = Array.from(document.getElementsByClassName('row'));
let counter = 0;
boxes.forEach(box => {
  box.addEventListener('click', function handleClick(event) {
    counter++
    if (counter%2 != 0) {
      // box.disabled = true
      box.setAttribute('style', 'background-color: aqua;');
    } else if (counter%2 != 1) {
      // box.disabled = true
      box.setAttribute('style', 'background-color: yellow;');

    }
    
  });
});


let counter2 = 0
const boxe = Array.from(document.getElementsByClassName('imgg'));

boxe.forEach(boxx => {
  boxx.addEventListener('click', function handleClick(event) {
    counter2++
    if (counter2 %2 != 0) {
      boxx.src = "./eve1.png"
      boxx.style.opacity = '1'

    } else if (counter2 %2 != 1) {
      boxx.src = "./eve2.png"
      boxx.style.opacity = '1'
    }
    
  });
});

const row1 = document.getElementById("row1")
const row2 = document.getElementById("row2")
const row3 = document.getElementById("row3")
const row4 = document.getElementById("row4")
const row5 = document.getElementById("row5")
const row6 = document.getElementById("row6")
const row7 = document.getElementById("row7")
const row8 = document.getElementById("row8")
const row9 = document.getElementById("row9")

const ticTacBox = document.getElementById('Tic-tac')
const gridItem = document.querySelectorAll(".imgg").forEach(gridItem => gridItem.addEventListener("click", algo));
let programCounter = 0;
const wLine = document.getElementById("wLine");
const wLine2 = document.getElementById("wLine2");
const wLine3 = document.getElementById("wLine3");


function algo() {
  programCounter++
 if ( programCounter > 1) {

  if ( row1.src != eveRef.src && row1.src == row4.src && row4.src == row7.src ) {
    ticTacBox.style.pointerEvents = "none";
    wLine.setAttribute("style", "left: 15%; display: block;")
    setTimeout(() => {
      callBack1();
      
    }, 1600);
      
  } else if ( row2.src != eveRef.src && row2.src == row5.src && row5.src == row8.src ) {
    ticTacBox.style.pointerEvents = "none"
    wLine.setAttribute("style", "left: 50%; display: block;")
    setTimeout(() => {
      callBack2();
    }, 1600);

  } else if ( row3.src != eveRef.src && row3.src == row6.src && row6.src == row9.src ) {
    ticTacBox.style.pointerEvents = "none"
    wLine.setAttribute("style", "left: 85%; display: block;")
    setTimeout(() => {
      callBack3();
    }, 1600);
  
  } else if ( row1.src != eveRef.src && row1.src == row2.src && row2.src == row3.src ) {
    ticTacBox.style.pointerEvents = "none"
    wLine2.setAttribute("style", "display: block;")
    setTimeout(() => {
      callBack1();
    }, 1600);
  
  } else if ( row4.src != eveRef.src &&  row4.src == row5.src && row5.src == row6.src ) {
    ticTacBox.style.pointerEvents = "none"
    wLine2.setAttribute("style", "display: block; top: 50%;")
    setTimeout(() => {
      callBack4();
    }, 1600);
  
  }else if ( row7.src != eveRef.src && row7.src == row8.src && row8.src == row9.src ) {
    ticTacBox.style.pointerEvents = "none"
    wLine2.setAttribute("style", "display: block; top: 85%;")
    setTimeout(() => {
      callBack7();
    }, 1600);
  
  }else if ( row1.src != eveRef.src && row1.src == row5.src && row5.src == row9.src ) {
    ticTacBox.style.pointerEvents = "none"
    wLine3.setAttribute("style", "display: block;")
    setTimeout(() => {
      callBack1();
    }, 1600);
  
  }else if ( row3.src != eveRef.src && row3.src == row5.src && row5.src == row7.src ) {
    ticTacBox.style.pointerEvents = "none"
    wLine3.setAttribute("style", "display: block; transform: rotate(45deg);")
    setTimeout(() => {
      callBack7();
    }, 1600);
  
  }

  
} 
  
}

const scores = {
  player1: document.getElementById('Player1-score'),
  player2: document.getElementById('Player2-score'),
}

let sPlay1 = parseInt(scores.player1.innerHTML);
let sPlay2 = parseInt(scores.player2.innerHTML);


function scaleFunc() {
  document.getElementById("score-board").setAttribute("style", "animation-name: ;")
  document.getElementById("score-board").setAttribute("style", "animation-name: scale;")
  console.log(document.getElementById("score-board").style.animationName);
}

function callBack1(params) {
    if (row1.src == eveRef1.src) {
      alert("Player 1 is the winner!!!")
      sPlay1++;
      scaleFunc();
      scores.player1.innerHTML = sPlay1

    } else if (row1.src == eveRef2.src) {
      alert("Player2 is ther winner");
      sPlay2++;
      scaleFunc();
      scores.player2.innerHTML = sPlay2
    }
    console.log(sPlay1);
}

function callBack2(params) {

    // alert('condition1 has been met')
    if (row2.src == eveRef1.src) {
      alert("Player 1 is the winner!!!")
      sPlay1++;
      scaleFunc()
      scores.player1.innerHTML = sPlay1

    } else if (row2.src == eveRef2.src) {
      alert("Player2 is ther winner")
      sPlay2++;
      scaleFunc();
      scores.player2.innerHTML = sPlay2

    }

}

function callBack3(params) {
    // alert('condition1 has been met')
    if (row3.src == eveRef1.src) {
      alert("Player 1 is the winner!!!")
      sPlay1++;
      scaleFunc();
      scores.player1.innerHTML = sPlay1

    } else if (row3.src == eveRef2.src) {
      alert("Player2 is ther winner")
      sPlay2++;
      scaleFunc();
      scores.player2.innerHTML = sPlay2
    }

}

function callBack4(params) {

    // alert('condition1 has been met')
    if (row4.src == eveRef1.src) {
      alert("Player 1 is the winner!!!")
      sPlay1++;
      scaleFunc();
      scores.player1.innerHTML = sPlay1
    } else if (row4.src == eveRef2.src) {
      alert("Player2 is ther winner")
      sPlay2++;
      scaleFunc();
      scores.player2.innerHTML = sPlay2

    }

}

function callBack5(params) {

    // alert('condition1 has been met')
    if (row5.src == eveRef1.src) {
      alert("Player 1 is the winner!!!")
      sPlay1++;
      scaleFunc();
      scores.player1.innerHTML = sPlay1

    } else if (row5.src == eveRef2.src) {
      alert("Player2 is ther winner")
      scores.player2++;
      scaleFunc();
      scores.player2.innerHTML = sPlay2
    }

}

function callBack7(params) {

    // alert('condition1 has been met')
    if (row7.src == eveRef1.src) {
      alert("Player 1 is the winner!!!")
      sPlay1++;
      scaleFunc();
      scores.player1.innerHTML = sPlay1

    } else if (row7.src == eveRef2.src) {
      alert("Player2 is ther winner")
      sPlay2++;
      scaleFunc();
      scores.player2.innerHTML = sPlay2

    }

}

const nodeList= document.querySelectorAll(".imgg");
const list = document.querySelectorAll(".row");
const wLineList = document.querySelectorAll(".wLine");

function reset(params) {
  counter = 0
  counter2 = 0
  console.log(programCounter);
  for (let i = 0; i < nodeList.length; i++) {
    nodeList[i].src = eveRef.src;
    nodeList[i].style.opacity = "0";
  }

  for (let f = 0; f < list.length; f++) {
    list[f].setAttribute("style", "background-color: #fff;")
  }

  for (let p = 0; p < wLineList.length; p++) {
    wLineList[p].style.display = 'none';
  }
  console.log(row1.src);
  ticTacBox.style.pointerEvents = "all";
  algo();

}

//debugger0
function countt(params) {
  console.log("counter: ", counter);
  console.log("counter2: ", counter2);
}
addEventListener("click", countt);

//debugger1
function bool(params) {
  var x = Boolean( row1.src == eveRef.src)
  var y = Boolean(row1.src == "eve.png")
  console.log("x:", x)
  console.log("y:",  y);
  console.log(row1.src);
}
addEventListener("click", bool);

