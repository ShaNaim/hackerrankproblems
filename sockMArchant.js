function sockMerchant(n, ar) {
	let memo = {};
	if (n <= 1) return 0;
	ar.forEach((element) => {
		if (element in memo) {
			memo[element]++;
		} else {
			memo[element] = 1;
		}
	});
	let pairCount = 0;
	for (var sock in memo) {
		if (memo[sock] > 1) {
			pairCount = pairCount + Math.floor(memo[sock] / 2);
		}
	}
	return pairCount;
}
console.log(sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]));
