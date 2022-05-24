var fields = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
var ships = ['1-a', '3-a', '4-a', '6-b', '2-c', '6-c', '2-d', '2-e', '6-f', '7-f', '8-f', '1-h', '2-h', '3-h', '4-h'];

function createBtn(tagName, clName, text) {
    var btn = document.createElement(tagName);
    btn.className = clName;
    btn.innerHTML = text;
    btn.setAttribute("data-id", text);
    var wrap = document.querySelector(".wrap");
    wrap.append(btn);
  }
  for (var i = 0; i < fields.length; i++) {
    for (var j = 0; j < fields.length; j++) {
      createBtn("button", "btn", j + 1 + "-" + fields[i]);
    }
  }
  
  var buttons = document.querySelectorAll(".btn");
  var resultText = document.querySelector(".field-result");

function checkingship(e) {
    var elem = e.target;
    var shipcoor = elem.dataset.id;
    var IsThatShip = ships.includes(shipcoor);
    if (IsThatShip) {
        elem.classList.add('damaged');
        elem.innerHTML = " ";
        resultText.textContent = 'Попал';
    }
    else {
        elem.classList.add('missed');
        elem.innerHTML = " ";
        resultText.textContent = 'Промах';
    }

    console.log(elem.classList.value)
    
}

buttons.forEach(function (button) {
    button.addEventListener('click', checkingship, {'once': true})
});

// Задание со здвездочкой


// var fields = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
// var ships = ['1-a', '3-a', '4-a', '6-b', '2-c', '6-c', '2-d', '2-e', '6-f', '7-f', '8-f', '1-h', '2-h', '3-h', '4-h'];

// function createBtn(tagName, clName, text) {
//     var btn = document.createElement(tagName);
//     btn.className = clName;
//     btn.innerHTML = text;
//     btn.setAttribute("data-id", text);
//     var wrap = document.querySelector(".wrap");
//     wrap.append(btn);
//   }
//   for (var i = 0; i < fields.length; i++) {
//     for (var j = 0; j < fields.length; j++) {
//       createBtn("button", "btn", j + 1 + "-" + fields[i]);
//     }
//   }
  
//   var buttons = document.querySelectorAll(".btn");
//   var resultText = document.querySelector(".field-result");

// function checkingship(e) {
//     var elem = e.target;
//     var shipcoor = elem.dataset.id;
//     var IsThatShip = ships.includes(shipcoor);
//     if ((elem.classList.value === 'btn missed') || (elem.classList.value === 'btn damaged')){
//         resultText.textContent = 'Занято'
//     }
//     else if (IsThatShip) {
//         elem.classList.add('damaged');
//         elem.innerHTML = " ";
//         resultText.textContent = 'Попал';
//     }
//     else {
//         elem.classList.add('missed');
//         elem.innerHTML = " ";
//         resultText.textContent = 'Промах';
//     }

//     console.log(elem.classList.value)
    
// }

// buttons.forEach(function (button) {
//     button.addEventListener('click', checkingship, {'once': false})
// });


