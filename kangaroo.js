/*
 * Complete the 'kangaroo' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. INTEGER x1 // kangaroo 1 position
 *  2. INTEGER v1 // kangaroo 1 velocity
 *  3. INTEGER x2 // kangaroo 2 position
 *  4. INTEGER v2 // kangaroo 2 velocity
 */

function kangaroo(x1, v1, x2, v2) {
	if (x1 < x2 && v1 <= v2) return "NO";
	if (x1 > x2 && v1 >= v2) return "NO";
	if (x1 == x2 && v1 !== v2) return "NO";

	for (let index = 0; index < 10000; index++) {
		let x1Step = x1 + v1;
		let x2Step = x2 + v2;
		if (x1Step == x2Step) return "YES";
		x1 = x1Step;
		x2 = x2Step;
	}
	return "NO";
}
console.log(kangaroo(0, 10, 0, 20));
