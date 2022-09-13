"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", function (inputStdin) {
	inputString += inputStdin;
});

process.stdin.on("end", function () {
	inputString = inputString.split("\n");
	main();
	process.exit();
});

function readLine() {
	return inputString[currentLine++];
}

/*
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr) {
	const length = arr.length;
	const values = {
		neg: 0,
		pos: 0,
		zero: 0,
	};
	arr.forEach((element) => {
		if (element < 0) values.neg = values.neg + 1;
		if (element == 0) values.zero = values.zero + 1;
		if (element > 0) values.pos = values.pos + 1;
	});
	console.log((values.pos / length).toFixed(6));
	console.log((values.neg / length).toFixed(6));
	console.log((values.zero / length).toFixed(6));
}

function main() {
	const n = parseInt(readLine().trim(), 10);
	console.log(n);
	const arr = readLine()
		.replace(/\s+$/g, "")
		.split(" ")
		.map((arrTemp) => parseInt(arrTemp, 10));
	plusMinus(arr);
}
