function migratoryBirds(arr) {
	let memo = {};
	arr.forEach((element) => {
		if (element in memo) {
			memo[element]++;
		} else {
			memo[element] = 1;
		}
	});
	let sortable = [];
	for (var vehicle in memo) {
		sortable.push([vehicle, memo[vehicle]]);
	}

	sortable.sort(function (a, b) {
		return b[1] - a[1];
	});
	if (sortable[0][1] == sortable[1][1]) {
		return sortable[0][0] < sortable[1][0] ? sortable[0][0] : sortable[1][0];
	}
	return sortable[0][0];
}
console.log(migratoryBirds([1, 1, 1, 2, 2, 2, 2, 1]));
