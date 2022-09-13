let length = 0;
for (let symbleCount = 1, space = length - 1; symbleCount <= length; symbleCount++, space--) {
	let printString = "";
	for (let index = 1; index <= space; index++) {
		printString += " ";
	}
	for (let index = 1; index <= symbleCount; index++) {
		printString += "#";
	}
	console.log(printString);
}
