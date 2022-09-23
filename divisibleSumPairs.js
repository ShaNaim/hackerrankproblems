let result = divisibleSumPairs(6, 3, [1, 3, 2, 6, 1, 2]);
console.log(result);
function divisibleSumPairs(n, k, ar) {
	const uniqueArray = ar;
	for (let iCount = 0; iCount < uniqueArray.length; iCount++) {
		for (let jCount = iCount + 1; jCount < uniqueArray.length; jCount++) {
			console.log(` ${uniqueArray[iCount]} + ${uniqueArray[jCount]} = ${uniqueArray[iCount] + uniqueArray[jCount]}`);
			if ((uniqueArray[iCount] + uniqueArray[jCount]) % k === 0) {
				console.log(
					`(${iCount} , ${jCount}) => ${uniqueArray[iCount]} + ${uniqueArray[jCount]} = ${uniqueArray[iCount] + uniqueArray[jCount]} / ${k} = ${
						(uniqueArray[iCount] + uniqueArray[jCount]) % k
					}  `
				);
			}
		}
	}
}
// FOR HACKER RANK (SLIMED DOWN)
function divisibleSumPairs(n, k, ar) {
	let count = 0;
	for (let iCount = 0; iCount < ar.length; iCount++) {
		for (let jCount = iCount + 1; jCount < ar.length; jCount++) {
			if ((ar[iCount] + ar[jCount]) % k === 0) count++;
		}
	}
	return count;
}
