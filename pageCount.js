function pageCount(n, p) {
	// if p and n are on the same page
	if (p == n) return 0;
	if (n % 2 != 0 && n - 1 == p) return 0;
	let lastPageNumber = n % 2 == 0 ? n / 2 : (n - 1) / 2;
	// recursively run and find page count
	return findPageCount(lastPageNumber, p, n);
}

function findPageCount(lastPageNumber, targetNumber, bookLength) {
	let middle = BigInt(Math.floor(bookLength / 2));
	// let middle = Math.floor(bookLength / 2);
	if (onSamePage(targetNumber, middle)) return getPageIndex(middle) < lastPageNumber - getPageIndex(middle) ? getPageIndex(middle) : lastPageNumber - getPageIndex(middle);
	else if (targetNumber < middle) return findPageCount(lastPageNumber, targetNumber, middle);
	else if (targetNumber > middle) {
		return findPageCount(lastPageNumber, targetNumber, bookLength + middle);
	}
}

function onSamePage(targetNumber, middle) {
	if (middle == targetNumber) return true;
	if (middle % BigInt(2) == 0 && middle == targetNumber) return true;
	if (middle % BigInt(2) != 0 && middle - 1 == targetNumber) return true;
	return false;
}

function getPageIndex(targetPage) {
	if (targetPage % BigInt(2) != 0) return (targetPage - 1) / BigInt(2);
	return targetPage / BigInt(2);
}

console.log(pageCount(2123523, 17));
// [
//     [ 0 ,   1 ]
//     [ 2,    3 ]
//     [ 4,    5 ]
//     [ 6,    7 ]<-- current
//     [ 8,    9 ]
//     [ 10,  11 ]<-----------
//     [ 12,  13 ]
//     [ 14,  15 ]
// ]

if (n == 2) {
	return 0;
}
if (n % 2 == 0 && n - p == 1) {
	return 1;
}

return Math.min(parseInt(p / 2), parseInt((n - p) / 2));
