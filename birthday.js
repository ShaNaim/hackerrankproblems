function birthday(s, d, m) {
	if (s.length < m) return 0;
	if (s.length == 1 && s[0] == d) return 1;
	let count = 0;
	for (let index = 0; index < s.length - 1; index++) {
		let sum = 0;
		console.log(`
        index : ${index}
        value of s[index] : ${s[index]}
        `);
		for (let indexOfD = index; indexOfD < m + index; indexOfD++) {
			console.log(`
            indexOfD : ${indexOfD}
            value of s[indexOfD] : ${s[indexOfD]}
            sum before : ${sum}
            `);
			sum = sum + s[indexOfD];
			console.log("sum after :", sum);
		}
		console.log("Tottal sum :", sum);
		if (sum == d) count++;
	}
	return count;
}
console.log(birthday([5, 3], 5, 2));
