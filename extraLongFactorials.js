function extraLongFactorials(n) {
	let cache = {};
	function factorial(n) {
		let num = BigInt(n);
		if (num == 1) return 1n;
		if (num in cache) {
			return cache[num];
		} else {
			cache[num] = num * BigInt(factorial(num - 1n));
			return cache[num];
		}
	}
	console.log(factorial(n).toString());
}
extraLongFactorials(45);
