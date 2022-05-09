//Task 1
var array = [2, 3, 4, 5, 6, 7]
function summ(array, sum) {
	sum = sum || 0
	if (array.length) {
		return summ(array, sum + array.pop())
	} else {
		return sum
	}
}
console.log(summ(array))


//Task 2
function getSum(start, end, step) {
	if (!start || start < 0 || !end || end < 0 || !step || step < 0) {
	  return "error";
	} else if (start > end) {
	  return 0;
	} else {
	  return start + getSum(start + step, end, step);
	}
  }
  console.log("summ =>", getSum(1, 10, 2));
