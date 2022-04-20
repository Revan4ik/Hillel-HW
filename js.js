// HW3

for (;;) {
  op = prompt("Выбери действие (+,-,*,/)");
  if (
    op === "+" || op === "-" || op === "/" || op === "*"
  )
    break;
}

for (;;) {
  countoper = +prompt("Введите количество операндов");
  if (countoper > 1) break;
}

for (var i = 0; i < countoper; i++) {
  var oper = +prompt("Введите ваши операнды");
  if (i === 0) {
    result = oper;
    continue;
  }
  switch (op) {
    case "+":
      result += oper;
      break;
    case "-":
      result -= oper;
      break;
    case "*":
      result *= oper;
      break;
    case "/":   
      result /= oper;
      break;
  }
}

alert("Ваш результат " + result);