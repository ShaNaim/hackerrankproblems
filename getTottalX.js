const getTotalX = (a, b) => {
	let count = 0;
	for (let i = a.slice(-1)[0]; i <= b[0]; i++) {
		if (a.every((e) => i % e === 0) && b.every((e) => e % i === 0)) count++;
	}
	return count;
};
