/*
 * Complete the 'breakingRecords' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY scores as parameter.
 */

function breakingRecords(scores) {
	let maxScore = scores[0];
	let minScore = scores[0];
	let maxCount = 0,
		minCount = 0;
	scores.forEach((element, index) => {
		if (element < minScore) {
			minScore = element;
			minCount++;
		}
		if (element > maxScore) {
			maxScore = element;
			maxCount++;
		}
	});
	return [maxCount, minCount];
}
console.log(breakingRecords([3, 4, 21, 36, 10, 28, 35, 5, 24, 42]));
