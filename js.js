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