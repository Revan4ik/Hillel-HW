//Task 1
function text1(){
var test1 = document.getElementsByClassName('zzz');
for (var i = 0; i < test1.length; i++){
  test1[i].innerHTML = i + 1;
}
}
text1()


//Task 2
// function changeColor(){
//   var text2 = document.body.children;
//   for (node of text2){
//     if (node.innerText.includes('www')){
//       node.style.color = 'blue'
//     }
//   }
// }
// changeColor();

//Task3
// function createlist(){
// var text3 = document.querySelectorAll('.zzz');
// var ul = document.createElement('ul');
// var bodyTag = document.body;
// bodyTag.prepend(ul);
// function createli(text3){
//   var li = document.createElement('li');
//   ul.append(li);
//   var textlist = text3.textContent;
//   li.textContent = textlist;
// }
// text3.forEach(createli);
// }

// createlist()
