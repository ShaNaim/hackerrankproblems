"use strict";

// process.stdin.resume();
// process.stdin.setEncoding("utf-8");

// let inputString = "";
// let currentLine = 0;

// process.stdin.on("data", function (inputStdin) {
// 	inputString += inputStdin;
// });

// process.stdin.on("end", function () {
// 	inputString = inputString.split("\n");

// 	main();
// });

function readLine() {
	return inputString[currentLine++];
}

/*
 * Complete the 'miniMaxSum' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function miniMaxSum(arr) {
	let sortedArray = arr.sort((a, b) => a - b);
	let maxSum = sortedArray.slice(1, sortedArray.length).reduce((a, b) => a + b);
	sortedArray.pop();
	let minSum = sortedArray.reduce((a, b) => a + b);
	console.log(`${minSum} ${maxSum}`);
}

function main() {
	const arr = readLine()
		.replace(/\s+$/g, "")
		.split(" ")
		.map((arrTemp) => parseInt(arrTemp, 10));

	miniMaxSum(arr);
}

miniMaxSum([1, 3, 5, 7, 9]);
