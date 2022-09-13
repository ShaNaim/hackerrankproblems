/*
 * Complete the 'countApplesAndOranges' function below.
 *
 * The function accepts following parameters:
 *  1. INTEGER s start of house
 *  2. INTEGER t end of house
 *  3. INTEGER a apple tree position
 *  4. INTEGER b orange tree position
 *  5. INTEGER_ARRAY apples
 *  6. INTEGER_ARRAY oranges
 */

function countApplesAndOranges(s, t, a, b, apples, oranges) {
	let appleCount = 0;
	let orangeCount = 0;
	apples.forEach((element) => {
		if (element + a >= s && element + a <= t) appleCount++;
	});
	oranges.forEach((element) => {
		if (element + b >= s && element + b <= t) orangeCount++;
	});
	console.log(appleCount);
	console.log(orangeCount);
}
// 7 11
// 5 15
// 3 2
// [-2 2 1]
// [5 -6]
countApplesAndOranges(7, 11, 5, 15, [-2, 2, 1], [5, -6]);
