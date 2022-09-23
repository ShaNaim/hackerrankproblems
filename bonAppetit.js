/*
 * Complete the 'bonAppetit' function below.
 *
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY bill
 *  2. INTEGER k
 *  3. INTEGER b
 */

function bonAppetit(bill, k, b) {
	bill.splice(k, 1);
	let result = bill.reduce((a, b) => a + b);
	if (result / 2 == b) console.log("Bon Appetit");
	else console.log(Math.abs(result / 2 - b));
}
console.log(bonAppetit([3, 10, 2, 9], 1, 12));
